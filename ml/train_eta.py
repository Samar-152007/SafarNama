#!/usr/bin/env python3
"""
Historical Predictive ETA & Terrain Risk Training Pipeline (NER Logistics)
Uses LightGBM (with scikit-learn GradientBoosting fallback) trained on terrain-specific features:
- Monsoon precipitation level (mm/hr)
- Historical bottleneck / checkpoint delay times (mins)
- Road elevation gradient (% slope)
- Cargo payload weight (metric tons)
- Distance (km) & Hairpin turn density
"""

import os
import sys
import json

# Ensure UTF-8 output on Windows terminal
if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import joblib

# Try importing LightGBM; fallback to GradientBoostingRegressor if LightGBM is not present
try:
    from lightgbm import LGBMRegressor
    USING_LIGHTGBM = True
except ImportError:
    from sklearn.ensemble import GradientBoostingRegressor
    USING_LIGHTGBM = False


def generate_synthetic_ner_trip_data(num_records: int = 5000, random_seed: int = 42) -> pd.DataFrame:
    """
    Synthesizes realistic historical trip logs spanning North-Eastern corridors
    (Guwahati, Shillong, Silchar, Imphal, Kohima, Aizawl, Agartala, Tawang).
    """
    np.random.seed(random_seed)

    # 1. Distance in kilometers (typically 40km to 450km in NER)
    distance_km = np.random.uniform(30.0, 420.0, size=num_records)

    # 2. Average Road Gradient (%) - 0.5% (plains) up to 14.0% (steep ghats)
    avg_gradient_pct = np.random.uniform(0.5, 13.5, size=num_records)

    # 3. Elevation Gain (meters)
    elevation_gain_m = distance_km * (avg_gradient_pct / 100.0) * 1000.0 * np.random.uniform(0.7, 1.2, size=num_records)

    # 4. Monsoon Precipitation (mm/hr) - NER has highest rainfall in world (Cherrapunji/Mawsynram)
    # Heavy monsoons between 0mm and 75mm/hr
    monsoon_precip_mm_hr = np.random.exponential(scale=12.0, size=num_records)
    monsoon_precip_mm_hr = np.clip(monsoon_precip_mm_hr, 0.0, 85.0)

    # 5. Checkpoint / Bottleneck Delay (Inter-state borders like Byrnihat, Churaibari, single-lane toll points)
    checkpoint_delay_mins = np.random.gamma(shape=2.5, scale=14.0, size=num_records)
    checkpoint_delay_mins = np.clip(checkpoint_delay_mins, 5.0, 150.0)

    # 6. Cargo Payload Weight (tons) - 2.0t to 28.0t commercial hauls
    cargo_payload_tons = np.random.uniform(2.0, 24.0, size=num_records)

    # 7. Night Transit (0 or 1) - Curfews, fog, zero visibility
    is_night_transit = np.random.binomial(n=1, p=0.35, size=num_records)

    # 8. Hairpin Turn Density (turns per 10km)
    hairpin_density = avg_gradient_pct * np.random.uniform(1.2, 2.5, size=num_records)

    # -------------------------------------------------------------------------
    # Physics-informed ground truth duration calculation:
    # Baseline plain commercial speed = 55 km/h
    # -------------------------------------------------------------------------
    effective_speed = 55.0 - (avg_gradient_pct * 2.1) - (cargo_payload_tons * 0.45) - (monsoon_precip_mm_hr * 0.22) - (hairpin_density * 0.5)
    effective_speed = np.where(is_night_transit == 1, effective_speed * 0.82, effective_speed)
    effective_speed = np.clip(effective_speed, 14.0, 60.0) # trucks cannot drop below 14km/h or exceed 60km/h on mountains

    # Drive duration in minutes + checkpoint delays + natural stochastic variance
    base_drive_mins = (distance_km / effective_speed) * 60.0
    random_noise_mins = np.random.normal(loc=0.0, scale=12.0, size=num_records)
    actual_trip_duration_mins = base_drive_mins + checkpoint_delay_mins + random_noise_mins
    actual_trip_duration_mins = np.clip(actual_trip_duration_mins, 20.0, None)

    df = pd.DataFrame({
        'distance_km': np.round(distance_km, 1),
        'elevation_gain_m': np.round(elevation_gain_m, 1),
        'avg_gradient_pct': np.round(avg_gradient_pct, 2),
        'monsoon_precip_mm_hr': np.round(monsoon_precip_mm_hr, 1),
        'checkpoint_delay_mins': np.round(checkpoint_delay_mins, 1),
        'cargo_payload_tons': np.round(cargo_payload_tons, 1),
        'is_night_transit': is_night_transit,
        'hairpin_density': np.round(hairpin_density, 2),
        'actual_trip_duration_mins': np.round(actual_trip_duration_mins, 1),
    })

    return df


def train_pipeline(output_dir: str = 'ml'):
    """
    Trains the predictive ETA regression model and saves artifacts
    """
    os.makedirs(output_dir, exist_ok=True)
    print("🌲 Generating historical North-Eastern logistics dataset (5,000 trips)...")
    df = generate_synthetic_ner_trip_data(5000)

    # Save synthetic training set CSV for transparency & audits
    dataset_path = os.path.join(output_dir, 'ner_historical_trips.csv')
    df.to_csv(dataset_path, index=False)
    print(f"📁 Dataset written to: {dataset_path}")

    features = [
        'distance_km',
        'elevation_gain_m',
        'avg_gradient_pct',
        'monsoon_precip_mm_hr',
        'checkpoint_delay_mins',
        'cargo_payload_tons',
        'is_night_transit',
        'hairpin_density',
    ]
    target = 'actual_trip_duration_mins'

    X = df[features]
    y = df[target]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    print(f"🚀 Training Predictive ETA Model (Using: {'LightGBM' if USING_LIGHTGBM else 'Scikit-Learn GradientBoosting'})...")

    if USING_LIGHTGBM:
        model = LGBMRegressor(
            n_estimators=250,
            learning_rate=0.04,
            num_leaves=31,
            max_depth=6,
            subsample=0.8,
            colsample_bytree=0.8,
            random_state=42,
            n_jobs=-1,
        )
    else:
        model = GradientBoostingRegressor(
            n_estimators=150,
            learning_rate=0.05,
            max_depth=5,
            random_state=42,
        )

    model.fit(X_train, y_train)

    # Evaluation
    preds = model.predict(X_test)
    mae = mean_absolute_error(y_test, preds)
    rmse = np.sqrt(mean_squared_error(y_test, preds))
    r2 = r2_score(y_test, preds)

    print("\n" + "=" * 55)
    print("📊 MODEL EVALUATION RESULTS:")
    print(f"   Mean Absolute Error (MAE) : {mae:.2f} minutes")
    print(f"   Root Mean Squared Error   : {rmse:.2f} minutes")
    print(f"   R² Accuracy Score         : {r2 * 100:.2f}%")
    print("=" * 55)

    # Feature Importance
    importances = model.feature_importances_
    feat_imp = sorted(zip(features, importances), key=lambda x: x[1], reverse=True)
    print("\n🔍 TOP PREDICTIVE TERRAIN FEATURES:")
    for feat, imp in feat_imp:
        print(f"   - {feat:25s}: {imp:.4f}")

    # Save Model Artifact
    model_path = os.path.join(output_dir, 'model_eta.joblib')
    joblib.dump(model, model_path)
    print(f"\n💾 Model serialized to: {model_path}")

    # Save Metadata JSON for the FastAPI inference microservice
    meta = {
        'model_type': 'LightGBM' if USING_LIGHTGBM else 'GradientBoostingRegressor',
        'metrics': {
            'mae_mins': round(float(mae), 2),
            'rmse_mins': round(float(rmse), 2),
            'r2_score': round(float(r2), 4),
        },
        'features': features,
        'feature_importances': {f: float(i) for f, i in feat_imp},
        'trained_samples': len(X_train),
    }

    meta_path = os.path.join(output_dir, 'model_metadata.json')
    with open(meta_path, 'w') as f:
        json.dump(meta, f, indent=2)
    print(f"📋 Model metadata written to: {meta_path}")


if __name__ == '__main__':
    train_pipeline()

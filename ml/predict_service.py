#!/usr/bin/env python3
"""
FastAPI Microservice for Real-Time Predictive ETA & NER Terrain Risk Scoring
Exposes endpoints consumed by the Node.js SafarNama backend.
"""

import os
import sys
import json
import joblib
import numpy as np

if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List

app = FastAPI(
    title="SafarNama ML Logistics & ETA Microservice",
    version="1.0.0",
    description="Inference engine for terrain gradients, monsoon precipitation, and checkpoint delays in NER."
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_PATH = os.path.join(os.path.dirname(__file__), 'model_eta.joblib')
META_PATH = os.path.join(os.path.dirname(__file__), 'model_metadata.json')

model = None
metadata = None

# Attempt to load model on startup
if os.path.exists(MODEL_PATH):
    try:
        model = joblib.load(MODEL_PATH)
        if os.path.exists(META_PATH):
            with open(META_PATH, 'r') as f:
                metadata = json.load(f)
        print("✅ [FastAPI ML] Trained ETA model successfully loaded into memory.")
    except Exception as e:
        print(f"⚠️ [FastAPI ML] Error loading serialized model: {e}")


class TripFeatures(BaseModel):
    distanceKm: float = Field(..., description="Trip distance in km", ge=1.0)
    elevationGainM: Optional[float] = Field(None, description="Total elevation ascent in meters")
    avgGradientPct: float = Field(3.5, description="Average road incline %", ge=0.0, le=25.0)
    monsoonPrecipMmHr: float = Field(10.0, description="Precipitation rate mm/hour", ge=0.0)
    checkpointDelayMins: float = Field(25.0, description="Inter-state checkpoint hold up in minutes", ge=0.0)
    cargoPayloadTons: float = Field(8.0, description="Truck payload weight in metric tons", ge=0.1, le=40.0)
    isNightTransit: bool = Field(False, description="Whether transit traverses night curfew hours")
    hairpinDensity: Optional[float] = Field(None, description="Number of hairpin turns per 10km")


class RouteRiskRequest(BaseModel):
    corridorName: str
    waypointCount: int = 5
    avgPrecipitationMmHr: float = 20.0
    maxGradientPct: float = 9.0
    knownLandslideProneKm: float = 14.5


@app.get("/health")
def health_check():
    return {
        "status": "HEALTHY",
        "service": "SafarNama ML Prediction Service",
        "modelLoaded": model is not None,
        "modelType": metadata.get("model_type") if metadata else "Heuristic Physics Engine",
        "evaluationMetrics": metadata.get("metrics") if metadata else None,
    }


@app.post("/predict-eta")
def predict_eta(trip: TripFeatures):
    # Fill in derived features
    elevation_gain = trip.elevationGainM or (trip.distanceKm * (trip.avgGradientPct / 100.0) * 1000.0)
    hairpins = trip.hairpinDensity or (trip.avgGradientPct * 1.8)

    # If ML model is loaded in memory, perform tree inference
    if model is not None:
        feature_vector = np.array([[
            trip.distanceKm,
            elevation_gain,
            trip.avgGradientPct,
            trip.monsoonPrecipMmHr,
            trip.checkpointDelayMins,
            trip.cargoPayloadTons,
            1 if trip.isNightTransit else 0,
            hairpins,
        ]])
        predicted_mins = float(model.predict(feature_vector)[0])
    else:
        # High precision physics fallback
        effective_speed = 55.0 - (trip.avgGradientPct * 2.1) - (trip.cargoPayloadTons * 0.45) - (trip.monsoonPrecipMmHr * 0.22)
        if trip.isNightTransit:
            effective_speed *= 0.82
        effective_speed = max(effective_speed, 14.0)
        predicted_mins = (trip.distanceKm / effective_speed) * 60.0 + trip.checkpointDelayMins

    predicted_mins = max(round(predicted_mins, 1), 15.0)

    # Calculate 0-100 Terrain & Weather Vulnerability Index
    risk_score = 10.0
    risk_score += min(trip.avgGradientPct * 4.2, 35.0)
    risk_score += min(trip.monsoonPrecipMmHr * 1.1, 35.0)
    risk_score += min(trip.cargoPayloadTons * 1.2, 15.0)
    if trip.isNightTransit:
        risk_score += 15.0
    risk_score = min(round(risk_score, 1), 99.0)

    # Dynamic advisories
    advisories = []
    if trip.monsoonPrecipMmHr > 30:
        advisories.append("CRITICAL: Severe cloudburst alert; active debris flow possible on ghat sections.")
    elif trip.monsoonPrecipMmHr > 15:
        advisories.append("MODERATE: Monsoon slick road surfaces. Reduce speed by 25%.")

    if trip.avgGradientPct > 7.5:
        advisories.append("STEEP GRADIENT: Sustained 2nd-gear engine braking required for heavy cargo.")

    if trip.checkpointDelayMins > 60:
        advisories.append("BOTTLENECK: High inter-state commercial freight queue at border checkpoint.")

    return {
        "source": "LIGHTGBM_PIPELINE" if model is not None else "NER_PHYSICS_ENGINE",
        "predictedDurationMins": round(predicted_mins),
        "predictedEtaHours": round(predicted_mins / 60.0, 2),
        "terrainRiskScore": risk_score,
        "riskCategory": "HIGH" if risk_score > 70 else "MODERATE" if risk_score > 40 else "LOW",
        "featuresReceived": {
            "distanceKm": trip.distanceKm,
            "avgGradientPct": trip.avgGradientPct,
            "monsoonPrecipMmHr": trip.monsoonPrecipMmHr,
            "cargoPayloadTons": trip.cargoPayloadTons,
        },
        "advisories": advisories,
    }


@app.post("/route-risk")
def calculate_route_risk(req: RouteRiskRequest):
    composite_risk = (
        (req.avgPrecipitationMmHr * 0.9) +
        (req.maxGradientPct * 3.8) +
        (req.knownLandslideProneKm * 2.2)
    )
    composite_risk = min(max(round(composite_risk, 1), 5.0), 99.0)

    return {
        "corridor": req.corridorName,
        "compositeRiskIndex": composite_risk,
        "isHighHazardZone": composite_risk >= 65.0,
        "recommendedAction": "DIVERSION_REQUIRED" if composite_risk >= 75.0 else "PROCEED_WITH_TELEMETRY_MONITORING",
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("predict_service:app", host="0.0.0.0", port=8000, reload=True)

-- ============================================================================
-- SAFARNAMA: AI-Based Smart Logistics & Accessibility Intelligence Platform (NER)
-- Database: PostgreSQL 14+ with PostGIS Spatial Extension
-- ============================================================================

-- Enable PostGIS & UUID extensions
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ----------------------------------------------------------------------------
-- ENUMS
-- ----------------------------------------------------------------------------
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('Admin', 'FleetManager', 'Driver');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE vehicle_status AS ENUM ('AVAILABLE', 'EN_ROUTE', 'MAINTENANCE', 'OFFLINE');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE delivery_status AS ENUM ('PENDING', 'IN_TRANSIT', 'REROUTED', 'DELIVERED', 'FAILED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE incident_severity AS ENUM ('P1', 'P2', 'P3', 'P4');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE incident_type AS ENUM (
        'landslide',
        'flash_flood',
        'road_subsidence',
        'fallen_tree',
        'heavy_fog',
        'rockfall',
        'bridge_damage',
        'checkpoint_congestion'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE alert_status AS ENUM ('PENDING', 'PROCESSING', 'VERIFIED', 'RESOLVED', 'DISMISSED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- ----------------------------------------------------------------------------
-- USERS & RBAC
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role user_role NOT NULL DEFAULT 'Driver',
    phone_number VARCHAR(20),
    refresh_token TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------------
-- VEHICLES & FLEET ASSETS
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS vehicles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    registration_number VARCHAR(30) UNIQUE NOT NULL,
    model_name VARCHAR(100) NOT NULL,
    vehicle_type VARCHAR(50) NOT NULL DEFAULT '4x4 Cargo Truck',
    max_payload_kg NUMERIC(10, 2) NOT NULL DEFAULT 8500.00,
    status vehicle_status NOT NULL DEFAULT 'AVAILABLE',
    driver_id UUID REFERENCES users(id) ON DELETE SET NULL,
    last_location GEOMETRY(Point, 4326),
    altitude_m NUMERIC(8, 2) DEFAULT 120.00,
    speed_kmh NUMERIC(6, 2) DEFAULT 0.00,
    heading_deg NUMERIC(5, 2) DEFAULT 0.00,
    fuel_pct NUMERIC(5, 2) DEFAULT 100.00,
    battery_health_pct NUMERIC(5, 2) DEFAULT 98.00,
    engine_temp_c NUMERIC(5, 2) DEFAULT 85.00,
    tire_pressure_psi NUMERIC(5, 2) DEFAULT 35.00,
    last_ping_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------------
-- TELEMETRY LOGS (Idempotent for Dead-Zone Cellular Outages)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS telemetry_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
    client_tx_id VARCHAR(128) UNIQUE NOT NULL, -- Device-generated transaction UUID to prevent duplicate inserts
    location GEOMETRY(Point, 4326) NOT NULL,
    altitude_m NUMERIC(8, 2),
    speed_kmh NUMERIC(6, 2),
    heading_deg NUMERIC(5, 2),
    fuel_pct NUMERIC(5, 2),
    engine_temp_c NUMERIC(5, 2),
    battery_pct NUMERIC(5, 2),
    cellular_rssi_dbm INT, -- Signal strength in dBm (-110 = dead zone, -60 = strong)
    was_offline_buffered BOOLEAN DEFAULT FALSE,
    recorded_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------------
-- CONSIGNMENTS & DELIVERIES
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS deliveries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tracking_code VARCHAR(50) UNIQUE NOT NULL,
    vehicle_id UUID REFERENCES vehicles(id) ON DELETE SET NULL,
    assigned_driver_id UUID REFERENCES users(id) ON DELETE SET NULL,
    status delivery_status NOT NULL DEFAULT 'PENDING',
    origin_name VARCHAR(150) NOT NULL,
    destination_name VARCHAR(150) NOT NULL,
    origin_geom GEOMETRY(Point, 4326) NOT NULL,
    destination_geom GEOMETRY(Point, 4326) NOT NULL,
    cargo_weight_kg NUMERIC(10, 2) NOT NULL,
    cargo_description TEXT,
    priority VARCHAR(20) DEFAULT 'STANDARD', -- CRITICAL_MEDICINE, RELIEF, STANDARD
    eta_timestamp TIMESTAMPTZ,
    predicted_duration_mins INT,
    risk_score NUMERIC(5, 2) DEFAULT 15.00, -- 0-100 terrain/weather vulnerability index
    active_route_geojson JSONB,
    reroute_reason TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------------
-- MULTI-STOP WAYPOINTS
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS delivery_stops (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    delivery_id UUID NOT NULL REFERENCES deliveries(id) ON DELETE CASCADE,
    stop_order INT NOT NULL,
    waypoint_name VARCHAR(150) NOT NULL,
    waypoint_geom GEOMETRY(Point, 4326) NOT NULL,
    expected_arrival TIMESTAMPTZ,
    actual_arrival TIMESTAMPTZ,
    status VARCHAR(30) DEFAULT 'PENDING', -- PENDING, REACHED, SKIPPED
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------------
-- INCIDENTS, HAZARDS & LANDSLIDES
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS incidents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(200) NOT NULL,
    incident_type incident_type NOT NULL,
    severity_rating incident_severity NOT NULL DEFAULT 'P3',
    location GEOMETRY(Point, 4326) NOT NULL,
    highway_code VARCHAR(50) NOT NULL, -- e.g. NH27, NH29, NH37, NH10
    state_code VARCHAR(10) NOT NULL,   -- AS, ML, NL, MN, TR, MZ, AR, SK
    description TEXT,
    affected_radius_m INT NOT NULL DEFAULT 5000,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    estimated_clearance_at TIMESTAMPTZ,
    reported_by UUID REFERENCES users(id) ON DELETE SET NULL,
    verified_by_authority BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------------
-- EDGE DASHCAM ALERTS & MEDIA INGESTION
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS dashcam_alerts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vehicle_id UUID REFERENCES vehicles(id) ON DELETE SET NULL,
    event_type incident_type NOT NULL,
    confidence_score NUMERIC(4, 3) NOT NULL, -- e.g. 0.942
    location GEOMETRY(Point, 4326) NOT NULL,
    speed_at_capture_kmh NUMERIC(5, 2),
    media_url VARCHAR(500), -- 5-second video clip URL or local storage path
    thumbnail_url VARCHAR(500),
    processed_status alert_status NOT NULL DEFAULT 'PENDING',
    incident_id UUID REFERENCES incidents(id) ON DELETE SET NULL,
    raw_metadata JSONB,
    captured_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------------
-- IDEMPOTENCY REGISTRY FOR OFFLINE BUFFERED SYNC
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS idempotency_keys (
    key VARCHAR(128) PRIMARY KEY,
    endpoint VARCHAR(100) NOT NULL,
    response_hash VARCHAR(64),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------------
-- SPATIAL GiST INDEXES (Essential for PostGIS ST_DWithin performance)
-- ----------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_vehicles_geom ON vehicles USING GIST(last_location);
CREATE INDEX IF NOT EXISTS idx_telemetry_geom ON telemetry_logs USING GIST(location);
CREATE INDEX IF NOT EXISTS idx_deliveries_origin_geom ON deliveries USING GIST(origin_geom);
CREATE INDEX IF NOT EXISTS idx_deliveries_dest_geom ON deliveries USING GIST(destination_geom);
CREATE INDEX IF NOT EXISTS idx_stops_geom ON delivery_stops USING GIST(waypoint_geom);
CREATE INDEX IF NOT EXISTS idx_incidents_geom ON incidents USING GIST(location);
CREATE INDEX IF NOT EXISTS idx_dashcam_geom ON dashcam_alerts USING GIST(location);

-- Standard B-Tree Indexes
CREATE INDEX IF NOT EXISTS idx_telemetry_vehicle_time ON telemetry_logs (vehicle_id, recorded_at DESC);
CREATE INDEX IF NOT EXISTS idx_deliveries_status ON deliveries (status);
CREATE INDEX IF NOT EXISTS idx_incidents_active ON incidents (is_active);
CREATE INDEX IF NOT EXISTS idx_dashcam_status ON dashcam_alerts (processed_status);

-- ----------------------------------------------------------------------------
-- SAMPLE SEED DATA (North Eastern Corridors)
-- ----------------------------------------------------------------------------
INSERT INTO users (id, full_name, email, password_hash, role, phone_number)
VALUES 
    ('00000000-0000-0000-0000-000000000001', 'Tenzing Norbu', 'admin@safarnama.ner', '$2a$12$e8Y54D7/7a9Zke0nFqm7qupZpT989Fom.dC1J7JmSj4f4vLz6vN5e', 'Admin', '+919862000001'),
    ('00000000-0000-0000-0000-000000000002', 'Bikash Barman', 'fleet@safarnama.ner', '$2a$12$e8Y54D7/7a9Zke0nFqm7qupZpT989Fom.dC1J7JmSj4f4vLz6vN5e', 'FleetManager', '+919862000002'),
    ('00000000-0000-0000-0000-000000000003', 'Hemen Kalita', 'driver1@safarnama.ner', '$2a$12$e8Y54D7/7a9Zke0nFqm7qupZpT989Fom.dC1J7JmSj4f4vLz6vN5e', 'Driver', '+919862000003'),
    ('00000000-0000-0000-0000-000000000004', 'Lalrintluanga Mizo', 'driver2@safarnama.ner', '$2a$12$e8Y54D7/7a9Zke0nFqm7qupZpT989Fom.dC1J7JmSj4f4vLz6vN5e', 'Driver', '+919862000004')
ON CONFLICT (email) DO NOTHING;

-- Seed Vehicles: Guwahati, Shillong, Silchar
INSERT INTO vehicles (id, registration_number, model_name, vehicle_type, max_payload_kg, status, driver_id, last_location, altitude_m, speed_kmh, fuel_pct, battery_health_pct, engine_temp_c)
VALUES
    ('11111111-1111-1111-1111-111111111111', 'AS-01-GC-4921', 'Tata Prima 4x4 Heavy Hauler', 'Heavy Heavy Cargo', 14000.00, 'EN_ROUTE', '00000000-0000-0000-0000-000000000003', ST_SetSRID(ST_MakePoint(91.7362, 26.1445), 4326), 65.0, 52.4, 76.5, 96.0, 88.0),
    ('22222222-2222-2222-2222-222222222222', 'ML-05-D-8812', 'Ashok Leyland Mountain Rhino', 'Medium Freight', 9000.00, 'EN_ROUTE', '00000000-0000-0000-0000-000000000004', ST_SetSRID(ST_MakePoint(91.8933, 25.5788), 4326), 1520.0, 38.0, 64.0, 94.0, 91.5),
    ('33333333-3333-3333-3333-333333333333', 'TR-01-T-3304', 'Mahindra Furio 11 Express', 'Express Cold-Chain', 6500.00, 'AVAILABLE', NULL, ST_SetSRID(ST_MakePoint(91.2868, 23.8315), 4326), 40.0, 0.0, 89.0, 99.0, 72.0)
ON CONFLICT (registration_number) DO NOTHING;

-- Seed Incidents: NH27 Landslide, NH6 Flash Flood
INSERT INTO incidents (id, title, incident_type, severity_rating, location, highway_code, state_code, description, affected_radius_m, is_active, estimated_clearance_at)
VALUES
    ('44444444-4444-4444-4444-444444444441', 'Major Landslide & Rockfall at Sonapur Tunnel', 'landslide', 'P1', ST_SetSRID(ST_MakePoint(92.3551, 25.1378), 4326), 'NH06', 'ML', 'Heavy monsoon downpour triggered 200m debris flow blocking both lanes between Jowai and Silchar.', 25000, TRUE, NOW() + INTERVAL '14 hours'),
    ('44444444-4444-4444-4444-444444444442', 'Kaziranga Southern Bypass Flash Flooding', 'flash_flood', 'P2', ST_SetSRID(ST_MakePoint(93.4112, 26.5872), 4326), 'NH27', 'AS', 'Brahmaputra overflow submerged 3.2km highway stretch near Bagori; heavy vehicle diversion active.', 15000, TRUE, NOW() + INTERVAL '6 hours')
ON CONFLICT DO NOTHING;

-- Seed Delivery Consignment
INSERT INTO deliveries (id, tracking_code, vehicle_id, assigned_driver_id, status, origin_name, destination_name, origin_geom, destination_geom, cargo_weight_kg, cargo_description, priority, eta_timestamp, risk_score)
VALUES
    ('55555555-5555-5555-5555-555555555555', 'SN-NER-2026-904', '11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000003', 'IN_TRANSIT', 'Guwahati Logistics Hub (Amingaon)', 'Silchar FMCG Distribution Depot', ST_SetSRID(ST_MakePoint(91.7362, 26.1445), 4326), ST_SetSRID(ST_MakePoint(92.7926, 24.8333), 4326), 7850.00, 'Essential Medical Supplies & Perishable Rations', 'CRITICAL_MEDICINE', NOW() + INTERVAL '7 hours 45 minutes', 78.5)
ON CONFLICT (tracking_code) DO NOTHING;

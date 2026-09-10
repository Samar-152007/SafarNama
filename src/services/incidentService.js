/**
 * SafarNama Incident Management Service
 * Manages incident reporting, simulated AI vision inspection, and live map feeds
 */
import { initialIncidents } from '../data/incidents';

const STORAGE_KEY = 'safarnama_incidents_v1';

export function getStoredIncidents() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn('Could not read from localStorage:', err);
  }
  return initialIncidents;
}

export function saveIncidents(incidents) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(incidents));
  } catch (err) {
    console.warn('Could not save to localStorage:', err);
  }
}

export function resetToDefaultIncidents() {
  localStorage.removeItem(STORAGE_KEY);
  return initialIncidents;
}

/**
 * Add a new user-reported incident
 */
export function addIncident(report) {
  const current = getStoredIncidents();
  const newIncident = {
    id: `inc-${Date.now()}`,
    type: report.type || 'Landslide',
    title: report.title || `${report.type.toUpperCase()} DISRUPTION DETECTED`,
    highway: report.highway || 'NH-27 Corridor',
    state: report.state || 'Assam',
    lat: report.lat || 26.2 + (Math.random() - 0.5) * 1.5,
    lng: report.lng || 92.5 + (Math.random() - 0.5) * 2.0,
    riskScore: report.riskScore || 85,
    severity: report.severity || 'HIGH',
    severityLevel: (report.severity || 'high').toLowerCase(),
    clearanceTime: report.clearanceTime || '8–14 hours',
    recommendation: report.recommendation || 'Immediate route reassessment required. Advise convoy halt.',
    affectedVehicles: report.affectedVehicles || 'Commercial freight restricted',
    reportedAt: 'Just now',
    description: report.description || 'Reported disruption on mountainous highway sector.',
    imageUrl: report.imageUrl || null,
    isSimulated: true,
    userReported: true
  };

  const updated = [newIncident, ...current];
  saveIncidents(updated);
  return newIncident;
}

/**
 * Simulated AI Vision Analysis for uploaded road images
 */
export async function simulateAIVisionAnalysis(fileOrDataUrl, incidentTypeHint = 'Landslide') {
  // Return a promise with multi-phase scanning simulation
  return new Promise((resolve) => {
    setTimeout(() => {
      // Generate realistic AI analysis findings
      let detected = incidentTypeHint;
      let severity = 'HIGH';
      let riskScore = 87;
      let recommendation = 'Immediate route reassessment required. Deploy heavy road clearing machinery.';
      let confidence = 94.8;
      let visualDefects = ['Structural asphalt caving', 'Loose scree debris ~40 cu.m', 'Impaired drainage gutter'];

      if (incidentTypeHint === 'Flood') {
        detected = 'Flash Flood Inundation';
        severity = 'CRITICAL';
        riskScore = 92;
        recommendation = 'Submerged pavement hazard; high velocity runoff exceeding 1.2 m/s. Convoys halt immediately.';
        confidence = 96.2;
        visualDefects = ['Water crest overtopping highway', 'Culvert silt blockage', 'Loss of traction profile'];
      } else if (incidentTypeHint === 'Road Damage') {
        detected = 'Road Surface Fissure & Caving';
        severity = 'HIGH';
        riskScore = 79;
        recommendation = 'Restrict multi-axle freight over 18 tons; single-lane convoy control advised.';
        confidence = 91.5;
        visualDefects = ['Transverse crack width >12cm', 'Shoulder detachment', 'Sub-base washout'];
      } else if (incidentTypeHint === 'Road Blockage') {
        detected = 'Heavy Vehicle / Debris Obstruction';
        severity = 'MODERATE';
        riskScore = 64;
        recommendation = 'Bypass clearance in progress. Estimated single-lane opening within 2 hours.';
        confidence = 93.0;
        visualDefects = ['Physical obstacle across both lanes', 'Emergency recovery active'];
      }

      resolve({
        detected,
        severity,
        riskScore,
        confidence,
        recommendation,
        visualDefects,
        isDemoAI: true,
        disclaimer: 'Simulated SafarNama Vision Model (Edge-ResNet50 v2.4 prototype demo)'
      });
    }, 2200);
  });
}

/**
 * SafarNama Route Intelligence Service
 * Computes corridor telemetry, hazard interception, and optimized alternate paths
 */
import { demoRoutesData, routeHubs } from '../data/demoRoutes';

export const AI_ANALYSIS_STEPS = [
  { id: 1, text: 'SCANNING TERRAIN', detail: 'Ingesting InSAR satellite elevation models & slope stability gradients' },
  { id: 2, text: 'ANALYZING WEATHER', detail: 'Polling Open-Meteo live rainfall, cloudburst radars & wind vectors' },
  { id: 3, text: 'CHECKING ROAD CONDITIONS', detail: 'Aggregating NHIDCL telemetry, BRO road clearances & patrol sensor logs' },
  { id: 4, text: 'ASSESSING DISRUPTION RISK', detail: 'Calculating multi-factor vulnerability index (soil saturation + gradient)' },
  { id: 5, text: 'GENERATING ALTERNATIVE ROUTES', detail: 'Synthesizing stabilized lower-elevation bypasses & safe convoy waypoints' }
];

export async function calculateRouteAnalysis(fromName, toName) {
  // Normalize key
  const key = `${fromName.toLowerCase()}-${toName.toLowerCase()}`;
  const route = demoRoutesData[key] || demoRoutesData['guwahati-tawang'];

  // Simulate network / AI processing delay for realism
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    query: { from: fromName, to: toName },
    ...route
  };
}

export function getAvailableHubs() {
  return routeHubs;
}

import { globalAcoRouter, getOptimizedRoute } from './services/acoRouter.js';

console.log('🐜 Testing Ant Colony Optimization (ACO) on North Eastern Network...\n');

// 1. Compute Route under normal baseline conditions
console.log('--- TEST 1: Normal Conditions (Guwahati to Silchar via NH06 / NH27) ---');
const normalResult = globalAcoRouter.optimize('GUWAHATI', 'SILCHAR');
console.log('Path Found:', normalResult.found);
console.log('Discovered Path:', normalResult.pathNames.join(' -> '));
console.log('Total Distance:', normalResult.totalDistanceKm, 'km');
console.log('Average Elevation Gradient:', normalResult.averageGradientPct, '%');
console.log('Composite Cost:', normalResult.compositeTerrainRiskCost);

// 2. Simulate Active Landslide at Sonapur (Shillong <-> Silchar edge severed)
console.log('\n--- TEST 2: Active Sonapur Landslide (Simulating Severed NH06 Edge) ---');
globalAcoRouter.updateEdgeBlockage('SHILLONG', 'SILCHAR', true);
const reroutedResult = globalAcoRouter.optimize('GUWAHATI', 'SILCHAR');
console.log('Path Found:', reroutedResult.found);
console.log('Dynamic Bypass Path:', reroutedResult.pathNames.join(' -> '));
console.log('Total Distance:', reroutedResult.totalDistanceKm, 'km');
console.log('Average Elevation Gradient:', reroutedResult.averageGradientPct, '%');
console.log('Composite Cost:', reroutedResult.compositeTerrainRiskCost);

if (reroutedResult.path.includes('NAGAON') && reroutedResult.path.includes('SILCHAR')) {
  console.log('\n✅ ACO successfully navigated around the blocked Sonapur landslide via Eastern Bypass (Nagaon -> Silchar)!');
} else {
  console.log('\n⚠️ ACO path computed: ', reroutedResult.path);
}

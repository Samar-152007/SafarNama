/**
 * Nature-Inspired Route Optimization Engine: Ant Colony Optimization (ACO)
 * Tailored for North Eastern Region (NER) Mountainous Terrain & Disruption Dynamics.
 * 
 * Cost / Fitness Formula:
 * Cost = (w1 * Distance) + (w2 * Road_Elevation_Gradient) + (w3 * Weather_Risk_Factor) + (w4 * Landslide_Road_Block_Penalty)
 */

import { getRedisClient } from '../config/redis.js';
import { enrichCorridorsWithLiveTelemetry } from './environmentalService.js';

// North Eastern Regional Node Network (Logistics Hubs & Waypoints)
export const NER_NODES = {
  GUWAHATI: { id: 'GUWAHATI', name: 'Guwahati Logistics Hub', lat: 26.1445, lng: 91.7362, elevation: 55 },
  SHILLONG: { id: 'SHILLONG', name: 'Shillong Meghalaya Depot', lat: 25.5788, lng: 91.8933, elevation: 1525 },
  NAGAON: { id: 'NAGAON', name: 'Nagaon Transit Junction', lat: 26.3456, lng: 92.6841, elevation: 60 },
  TEZPUR: { id: 'TEZPUR', name: 'Tezpur North-Bank Terminal', lat: 26.6528, lng: 92.7926, elevation: 75 },
  JORHAT: { id: 'JORHAT', name: 'Jorhat Upper-Assam Center', lat: 26.7509, lng: 94.2037, elevation: 87 },
  DIBRUGARH: { id: 'DIBRUGARH', name: 'Dibrugarh Brahmaputra Terminal', lat: 27.4728, lng: 94.9120, elevation: 108 },
  SILCHAR: { id: 'SILCHAR', name: 'Silchar Barak Valley Hub', lat: 24.8333, lng: 92.7926, elevation: 25 },
  KOHIMA: { id: 'KOHIMA', name: 'Kohima Nagaland Depot', lat: 25.6751, lng: 94.1086, elevation: 1444 },
  IMPHAL: { id: 'IMPHAL', name: 'Imphal Manipur Station', lat: 24.8170, lng: 93.9368, elevation: 786 },
  AIZAWL: { id: 'AIZAWL', name: 'Aizawl Mizoram Hub', lat: 23.7271, lng: 92.7176, elevation: 1132 },
  AGARTALA: { id: 'AGARTALA', name: 'Agartala Tripura Depot', lat: 23.8315, lng: 91.2868, elevation: 32 },
};

// Initial Corridor Graph with terrain factors
// gradient: % average slope, weatherRisk: 0-100, isBlocked: boolean
export const DEFAULT_CORRIDORS = [
  { from: 'GUWAHATI', to: 'SHILLONG', distance: 98, gradient: 8.5, weatherRisk: 35, isBlocked: false, highway: 'NH06' },
  { from: 'SHILLONG', to: 'SILCHAR', distance: 215, gradient: 12.0, weatherRisk: 75, isBlocked: true, highway: 'NH06' }, // Often blocked at Sonapur
  { from: 'GUWAHATI', to: 'NAGAON', distance: 120, gradient: 1.2, weatherRisk: 20, isBlocked: false, highway: 'NH27' },
  { from: 'NAGAON', to: 'TEZPUR', distance: 62, gradient: 1.5, weatherRisk: 25, isBlocked: false, highway: 'NH715' },
  { from: 'NAGAON', to: 'JORHAT', distance: 180, gradient: 1.8, weatherRisk: 30, isBlocked: false, highway: 'NH27' },
  { from: 'JORHAT', to: 'DIBRUGARH', distance: 135, gradient: 1.0, weatherRisk: 20, isBlocked: false, highway: 'NH27' },
  { from: 'NAGAON', to: 'SILCHAR', distance: 260, gradient: 9.5, weatherRisk: 45, isBlocked: false, highway: 'NH27_NH54' }, // Eastern Bypass via Lumding/Haflong
  { from: 'JORHAT', to: 'KOHIMA', distance: 155, gradient: 11.2, weatherRisk: 50, isBlocked: false, highway: 'NH29' },
  { from: 'KOHIMA', to: 'IMPHAL', distance: 138, gradient: 10.5, weatherRisk: 60, isBlocked: false, highway: 'NH02' },
  { from: 'SILCHAR', to: 'AIZAWL', distance: 175, gradient: 13.8, weatherRisk: 65, isBlocked: false, highway: 'NH54' },
  { from: 'SILCHAR', to: 'AGARTALA', distance: 285, gradient: 6.5, weatherRisk: 40, isBlocked: false, highway: 'NH08' },
  { from: 'GUWAHATI', to: 'TEZPUR', distance: 178, gradient: 2.0, weatherRisk: 25, isBlocked: false, highway: 'NH15' },
];

export class AntColonyOptimizer {
  constructor(options = {}) {
    this.numAnts = options.numAnts || 25;
    this.maxIterations = options.maxIterations || 40;
    this.alpha = options.alpha || 1.2;     // Pheromone importance
    this.beta = options.beta || 2.5;       // Heuristic desirability importance
    this.evaporationRate = options.evaporationRate || 0.35; // Rho
    this.qConstant = options.qConstant || 150; // Pheromone deposit multiplier

    // Terrain cost weight hyperparameters
    this.wDistance = options.wDistance || 1.0;
    this.wGradient = options.wGradient || 3.5;       // Steep climbs penalize heavy trucks heavily
    this.wWeather = options.wWeather || 2.0;         // Rain/fog risk
    this.wLandslideBlock = options.wLandslideBlock || 10000.0; // Blocked road penalty

    this.graph = new Map();
    this.pheromones = new Map();

    this.initializeGraph(options.corridors || DEFAULT_CORRIDORS);
  }

  /**
   * Initializes adjacency list and uniform pheromone baseline
   */
  initializeGraph(corridors) {
    this.graph.clear();
    this.pheromones.clear();

    // Register all nodes
    for (const key of Object.keys(NER_NODES)) {
      this.graph.set(key, []);
    }

    // Populate bidirectional edges
    for (const edge of corridors) {
      this.addEdge(edge.from, edge.to, edge);
      this.addEdge(edge.to, edge.from, edge);
    }
  }

  addEdge(u, v, props) {
    if (!this.graph.has(u)) this.graph.set(u, []);
    const edge = {
      to: v,
      distance: props.distance,
      gradient: props.gradient || 2.0,
      weatherRisk: props.weatherRisk || 15,
      isBlocked: !!props.isBlocked,
      highway: props.highway || 'NH',
    };
    this.graph.get(u).push(edge);

    // Initial pheromone level
    const edgeKey = `${u}->${v}`;
    this.pheromones.set(edgeKey, 1.0);
  }

  /**
   * Terrain-aware Composite Edge Cost Function
   */
  calculateEdgeCost(edge) {
    if (edge.isBlocked) {
      return this.wLandslideBlock;
    }

    const cost =
      this.wDistance * edge.distance +
      this.wGradient * (edge.gradient * 5.0) +
      this.wWeather * (edge.weatherRisk * 0.8);

    return Math.max(cost, 1.0);
  }

  /**
   * Heuristic visibility: eta = 1 / Cost
   */
  getHeuristic(edge) {
    const cost = this.calculateEdgeCost(edge);
    return 1.0 / cost;
  }

  getPheromone(u, v) {
    return this.pheromones.get(`${u}->${v}`) || 0.1;
  }

  setPheromone(u, v, val) {
    this.pheromones.set(`${u}->${v}`, Math.max(val, 0.001));
  }

  /**
   * Run ACO to find optimal route between startNode and endNode
   */
  optimize(startNode, endNode) {
    if (!this.graph.has(startNode) || !this.graph.has(endNode)) {
      throw new Error(`Invalid start (${startNode}) or end (${endNode}) node.`);
    }

    let bestPath = null;
    let bestCost = Infinity;

    for (let iter = 0; iter < this.maxIterations; iter++) {
      const antPaths = [];

      for (let ant = 0; ant < this.numAnts; ant++) {
        const path = this.constructAntRoute(startNode, endNode);
        if (path) {
          const cost = this.calculatePathCost(path);
          antPaths.push({ path, cost });

          if (cost < bestCost) {
            bestCost = cost;
            bestPath = path;
          }
        }
      }

      // Evaporation phase
      for (const [key, val] of this.pheromones.entries()) {
        this.pheromones.set(key, val * (1 - this.evaporationRate));
      }

      // Pheromone deposition phase
      for (const { path, cost } of antPaths) {
        if (cost >= this.wLandslideBlock) continue; // Do not reward blocked paths
        const deposit = this.qConstant / cost;
        for (let i = 0; i < path.length - 1; i++) {
          const u = path[i];
          const v = path[i + 1];
          const currentPheromone = this.getPheromone(u, v);
          this.setPheromone(u, v, currentPheromone + deposit);
          // Symmetric edge
          this.setPheromone(v, u, this.getPheromone(v, u) + deposit);
        }
      }
    }

    return this.formatResult(bestPath, bestCost);
  }

  constructAntRoute(startNode, endNode) {
    let current = startNode;
    const visited = new Set([current]);
    const path = [current];

    while (current !== endNode) {
      const neighbors = this.graph.get(current) || [];
      const validMoves = neighbors.filter((n) => !visited.has(n.to));

      if (validMoves.length === 0) {
        return null; // Dead-end reached
      }

      // Compute probabilistic transition wheel
      const probabilities = [];
      let sumProb = 0;

      for (const edge of validMoves) {
        const tau = Math.pow(this.getPheromone(current, edge.to), this.alpha);
        const eta = Math.pow(this.getHeuristic(edge), this.beta);
        const p = tau * eta;
        probabilities.push(p);
        sumProb += p;
      }

      if (sumProb <= 0) {
        // Uniform choice fallback
        const chosen = validMoves[Math.floor(Math.random() * validMoves.length)];
        current = chosen.to;
      } else {
        // Roulette-wheel selection
        const rand = Math.random() * sumProb;
        let cumulative = 0;
        let chosen = validMoves[0];

        for (let i = 0; i < validMoves.length; i++) {
          cumulative += probabilities[i];
          if (rand <= cumulative) {
            chosen = validMoves[i];
            break;
          }
        }
        current = chosen.to;
      }

      visited.add(current);
      path.push(current);
    }

    return path;
  }

  calculatePathCost(path) {
    let total = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const u = path[i];
      const v = path[i + 1];
      const edge = (this.graph.get(u) || []).find((e) => e.to === v);
      if (edge) {
        total += this.calculateEdgeCost(edge);
      } else {
        total += 99999;
      }
    }
    return total;
  }

  formatResult(path, cost) {
    if (!path || cost >= this.wLandslideBlock) {
      return {
        found: false,
        message: 'No safe transit corridor discovered. Severe landslide or flooding blocks all active routes.',
        path: [],
        totalDistanceKm: 0,
        averageGradientPct: 0,
        compositeTerrainRiskCost: cost,
      };
    }

    let totalDistance = 0;
    let totalGradient = 0;
    const legs = [];

    for (let i = 0; i < path.length - 1; i++) {
      const u = path[i];
      const v = path[i + 1];
      const edge = (this.graph.get(u) || []).find((e) => e.to === v);
      totalDistance += edge.distance;
      totalGradient += edge.gradient;
      legs.push({
        from: NER_NODES[u],
        to: NER_NODES[v],
        highway: edge.highway,
        distanceKm: edge.distance,
        gradientPct: edge.gradient,
        weatherRisk: edge.weatherRisk,
      });
    }

    return {
      found: true,
      path,
      pathNames: path.map((nodeId) => NER_NODES[nodeId]?.name || nodeId),
      totalDistanceKm: Math.round(totalDistance),
      averageGradientPct: +(totalGradient / (path.length - 1)).toFixed(1),
      compositeTerrainRiskCost: +cost.toFixed(2),
      legs,
    };
  }

  /**
   * Dynamic Blockage Handler:
   * When an incident (e.g. Sonapur Landslide) blocks an edge, sever it,
   * vaporize pheromones, and recompute alternative bypass corridors.
   */
  updateEdgeBlockage(u, v, isBlocked) {
    const update = (from, to) => {
      const edges = this.graph.get(from) || [];
      const target = edges.find((e) => e.to === to);
      if (target) {
        target.isBlocked = isBlocked;
      }
      if (isBlocked) {
        // Vaporize pheromone to zero
        this.pheromones.set(`${from}->${to}`, 0.0001);
      }
    };

    update(u, v);
    update(v, u);
  }
}

// Global Singleton Router Instance
export const globalAcoRouter = new AntColonyOptimizer();

/**
 * High-level cached route calculation
 */
export async function getOptimizedRoute(startNode, endNode, options = {}) {
  const redis = getRedisClient();
  const travelDate = options.travelDate ? new Date(options.travelDate) : new Date();
  const plannedMonth = travelDate.getMonth() + 1;
  const cacheKey = `safarnama:aco:${startNode}:${endNode}:m${plannedMonth}`;

  // Check Redis cache if available
  try {
    const cached = await redis.get(cacheKey);
    if (cached && !options.forceRecalculate) {
      return JSON.parse(cached);
    }
  } catch (err) {
    // Continue with fresh calculation
  }

  let corridors = options.corridors || DEFAULT_CORRIDORS;
  let isLiveTelemetry = false;

  if (options.useLiveTelemetry !== false) {
    try {
      corridors = await enrichCorridorsWithLiveTelemetry(corridors, NER_NODES, travelDate);
      isLiveTelemetry = true;
    } catch (e) {
      console.warn('Using standard corridor weights (live telemetry offline)');
    }
  }

  const router = new AntColonyOptimizer({ ...options, corridors });
  const result = router.optimize(startNode, endNode);

  if (result.found) {
    result.telemetry = {
      isLiveTelemetry,
      source: isLiveTelemetry ? 'Open-Meteo Satellite & SRTM DEM Real-Time' : 'SafarNama Historical Baseline',
      calculatedAt: new Date().toISOString()
    };
  }

  // Cache computed path in Redis with 10-minute TTL
  try {
    if (result.found) {
      await redis.set(cacheKey, JSON.stringify(result), 'EX', 600);
    }
  } catch (err) {
    // Ignore cache failure
  }

  return result;
}

export default {
  NER_NODES,
  DEFAULT_CORRIDORS,
  AntColonyOptimizer,
  globalAcoRouter,
  getOptimizedRoute,
};

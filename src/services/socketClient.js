/**
 * Real-time WebSocket Client (Socket.io) with Automatic Fallback Simulator
 */

class RealtimeClient {
  constructor() {
    this.socket = null;
    this.listeners = new Map();
    this.isConnected = false;
    this.simTimer = null;
    this.serverUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  }

  connect() {
    // If Socket.io global is available or load dynamically
    try {
      if (typeof window !== 'undefined' && window.io) {
        this.socket = window.io(this.serverUrl, {
          transports: ['websocket', 'polling'],
          reconnectionAttempts: 5,
          timeout: 4000,
        });

        this.socket.on('connect', () => {
          this.isConnected = true;
          this.emitLocal('connection_change', { connected: true, socketId: this.socket.id });
        });

        this.socket.on('disconnect', () => {
          this.isConnected = false;
          this.emitLocal('connection_change', { connected: false });
        });

        // Forward server events to local listeners
        const eventNames = [
          'telemetry:update',
          'geofence:alert',
          'incident:new',
          'dashcam:alert_processed',
          'delivery:status',
          'delivery:rerouted',
          'telemetry:deadzone_synced',
          'route:reroute_notice',
        ];

        eventNames.forEach((evt) => {
          this.socket.on(evt, (data) => {
            this.emitLocal(evt, data);
          });
        });
      } else {
        // Run graceful local simulation mode so UI is always interactive
        this.startSimulation();
      }
    } catch (e) {
      this.startSimulation();
    }
  }

  startSimulation() {
    this.isConnected = true;
    this.emitLocal('connection_change', { connected: true, simulated: true });

    // Periodic telemetry ping simulation for NER corridor
    if (!this.simTimer) {
      let step = 0;
      this.simTimer = setInterval(() => {
        step++;
        const simulatedSpeed = 48 + Math.sin(step) * 12;
        const simulatedFuel = Math.max(76.5 - step * 0.05, 30);
        const simulatedTemp = 86 + Math.cos(step) * 4;

        this.emitLocal('telemetry:update', {
          vehicleId: '11111111-1111-1111-1111-111111111111',
          lat: 26.1445 + Math.sin(step * 0.1) * 0.02,
          lng: 91.7362 + (step * 0.005),
          altitude: 65 + step * 3,
          speed: +simulatedSpeed.toFixed(1),
          fuelPct: +simulatedFuel.toFixed(1),
          engineTemp: +simulatedTemp.toFixed(1),
          batteryPct: 96,
          heading: (step * 15) % 360,
          recordedAt: new Date().toISOString(),
        });
      }, 3500);
    }
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
    return () => this.off(event, callback);
  }

  off(event, callback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback);
    }
  }

  emitLocal(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach((cb) => {
        try {
          cb(data);
        } catch (err) {
          console.error(`Error in listener for ${event}:`, err);
        }
      });
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
    if (this.simTimer) {
      clearInterval(this.simTimer);
      this.simTimer = null;
    }
  }
}

export const realtimeClient = new RealtimeClient();
export default realtimeClient;

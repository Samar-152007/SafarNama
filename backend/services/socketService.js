import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { getRedisPub, getRedisSub, isConnected } from '../config/redis.js';

let ioInstance = null;

/**
 * Initializes Socket.io with optional Redis pub/sub adapter
 * @param {import('http').Server} httpServer
 */
export function initSocketServer(httpServer) {
  ioInstance = new Server(httpServer, {
    cors: {
      origin: '*', // Allow dashboard connections from Vite dev or production origin
      methods: ['GET', 'POST'],
      credentials: true,
    },
    transports: ['websocket', 'polling'],
  });

  // Attach Redis adapter if connected for multi-node horizontal scaling
  if (isConnected()) {
    try {
      const pubClient = getRedisPub();
      const subClient = getRedisSub();
      ioInstance.adapter(createAdapter(pubClient, subClient));
      console.log('✅ [Socket.io] Scalable Redis Adapter attached.');
    } catch (err) {
      console.warn('⚠️ [Socket.io] Running on standalone in-memory transport.');
    }
  }

  ioInstance.on('connection', (socket) => {
    // console.log(`🔌 [Socket.io] Client connected: ${socket.id}`);

    // Join fleet dashboard room
    socket.join('fleet');

    socket.on('join:driver', (driverId) => {
      socket.join(`driver:${driverId}`);
    });

    socket.on('join:vehicle', (vehicleId) => {
      socket.join(`vehicle:${vehicleId}`);
    });

    socket.on('disconnect', () => {
      // console.log(`🔌 [Socket.io] Client disconnected: ${socket.id}`);
    });
  });

  return ioInstance;
}

export function getIO() {
  return ioInstance;
}

export function broadcastToRoom(room, event, data) {
  if (ioInstance) {
    ioInstance.to(room).emit(event, data);
  }
}

export function broadcastAll(event, data) {
  if (ioInstance) {
    ioInstance.emit(event, data);
  }
}

export default {
  initSocketServer,
  getIO,
  broadcastToRoom,
  broadcastAll,
};

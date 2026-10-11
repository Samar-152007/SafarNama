import { useEffect, useState } from 'react';
import { realtimeClient } from '../services/socketClient';

/**
 * Custom React hook for connecting to real-time fleet events
 */
export function useSocket(eventName, handler) {
  useEffect(() => {
    realtimeClient.connect();
    if (!eventName || !handler) return;

    const unsubscribe = realtimeClient.on(eventName, handler);
    return () => {
      unsubscribe();
    };
  }, [eventName, handler]);
}

/**
 * Hook to retrieve connection status
 */
export function useSocketStatus() {
  const [status, setStatus] = useState({ connected: false, simulated: false });

  useEffect(() => {
    realtimeClient.connect();
    const unsub = realtimeClient.on('connection_change', (info) => {
      setStatus(info);
    });
    return () => unsub();
  }, []);

  return status;
}

export default useSocket;

'use client';

import { io, type Socket } from 'socket.io-client';

let socket: Socket | null = null;

export function createSocket() {
  if (socket) return socket;
  socket = io(process.env.NEXT_PUBLIC_WS_URL || 'https://ws.mt5-analytics.local', {
    transports: ['websocket'],
    auth: {
      token: typeof window !== 'undefined' ? window.localStorage.getItem('mt5_token') : undefined
    }
  });

  return socket;
}

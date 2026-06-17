import { io, type Socket } from 'socket.io-client';

let socket: Socket | null = null;

function getClientToken() {
  if (typeof window === 'undefined') return undefined;
  return window.localStorage.getItem('mt5_token') ?? undefined;
}

export function getSocket() {
  if (socket) return socket;

  socket = io(process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:8080', {
    autoConnect: false,
    transports: ['websocket'],
    auth: {
      token: getClientToken(),
    },
  });

  return socket;
}

export function connectSocket() {
  const client = getSocket();

  if (!client.connected) {
    client.connect();
  }

  return client;
}

export function disconnectSocket() {
  if (socket?.connected) {
    socket.disconnect();
  }
}

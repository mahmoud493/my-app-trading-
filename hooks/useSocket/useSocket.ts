'use client';

import { useEffect, useState } from 'react';
import { createSocket } from '../../services/socket/client';

export function useSocket<T = any>(event: string, initialData: T) {
  const [data, setData] = useState<T>(initialData);

  useEffect(() => {
    const socket = createSocket();
    socket.on(event, setData);
    return () => {
      socket.off(event, setData);
    };
  }, [event]);

  return data;
}

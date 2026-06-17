'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserSession } from '../types/auth';

interface AuthState {
  session: UserSession | null;
  setUser: (session: UserSession) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      session: null,
      setUser: (session) => set({ session }),
      logout: () => {
        if (typeof window !== 'undefined') {
          window.localStorage.removeItem('mt5_token');
        }
        set({ session: null });
      }
    }),
    {
      name: 'mt5-auth-store',
      partialize: (state) => ({ session: state.session })
    }
  )
);

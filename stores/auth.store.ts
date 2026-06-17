import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserSession } from '../types/auth';

interface AuthState {
  user: UserSession['user'] | null;
  token: string | null;
  setAuth: (session: UserSession) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setAuth: (session) => {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('mt5_token', session.token);
        }

        set({ user: session.user, token: session.token });
      },
      logout: () => {
        if (typeof window !== 'undefined') {
          window.localStorage.removeItem('mt5_token');
        }

        set({ user: null, token: null });
      },
    }),
    {
      name: 'mt5-auth-store',
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);

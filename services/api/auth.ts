import { api } from './axios';
import type { LoginValues, RegisterValues, UserSession } from '../../types/auth';

export async function login(values: LoginValues): Promise<UserSession> {
  const response = await api.post('/auth/login', values);
  const session = response.data as UserSession;
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('mt5_token', session.token);
  }
  return session;
}

export async function registerUser(values: RegisterValues): Promise<UserSession> {
  const response = await api.post('/auth/register', values);
  const session = response.data as UserSession;
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('mt5_token', session.token);
  }
  return session;
}

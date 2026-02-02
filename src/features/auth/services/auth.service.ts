import { api } from '@/services/api';
import { User } from '@/types/user';

export type AuthResponse = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

export function login(email: string, password: string) {
  return api.post<AuthResponse>('/auth/login', {
    email,
    password
  });
}

export function refreshToken(refreshToken: string) {
  return api.post<{ accessToken: string }>(
    '/auth/refresh',
    { refreshToken }
  );
}

export function loginWithGoogle() {
  window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
}

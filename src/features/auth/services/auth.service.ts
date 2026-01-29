import { api } from '@/services/api';

const API_URL = import.meta.env.VITE_API_URL;

export type AuthUser = {
  id: string;
  email: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
};

export function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  return api.post<LoginResponse>('/auth/login', {
    email,
    password
  });
}

export function refreshToken(
  refreshToken: string
): Promise<{ accessToken: string }> {
  return api.post<{ accessToken: string }>('/auth/refresh', {
    refreshToken
  });
}

export function loginWithGoogle(): void {
  redirectToOAuthProvider('google');
}

function redirectToOAuthProvider(provider: 'google'): void {
  window.location.href = `${API_URL}/auth/${provider}`;
}

import { api } from '@/services/api';

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
  };
};

export function login(email: string, password: string) {
  return api.post<LoginResponse>('/auth/login', {
    email,
    password
  });
}

export function refreshToken(refreshToken: string) {
  return api.post<{
    accessToken: string;
  }>('/auth/refresh', { refreshToken });
}

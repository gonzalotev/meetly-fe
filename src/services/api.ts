import { useAuthStore } from '@/store/auth.store';
import { refreshToken as refreshService } from '@/features/auth/services/auth.service';

const API_URL = import.meta.env.VITE_API_URL;

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

let isRefreshing = false;
let pendingRequests: (() => void)[] = [];

async function request<T>(
  method: HttpMethod,
  url: string,
  body?: unknown
): Promise<T> {
  const { accessToken, refreshToken, logout, login, user } =
    useAuthStore.getState();

  const res = await fetch(`${API_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && {
        Authorization: `Bearer ${accessToken}`
      })
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (res.status === 401 && refreshToken) {
    if (!isRefreshing) {
      isRefreshing = true;

      try {
        const newToken = await refreshService(refreshToken);

        login({
          user: user!,
          accessToken: newToken.accessToken,
          refreshToken
        });

        pendingRequests.forEach(cb => cb());
        pendingRequests = [];
      } catch {
        logout();
        throw new Error('Session expired');
      } finally {
        isRefreshing = false;
      }
    }

    return new Promise(resolve => {
      pendingRequests.push(() =>
        resolve(request<T>(method, url, body))
      );
    });
  }

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || 'API error');
  }

  return res.json();
}

export const api = {
  get: <T>(url: string) => request<T>('GET', url),
  post: <T>(url: string, body?: unknown) =>
    request<T>('POST', url, body),
  put: <T>(url: string, body?: unknown) =>
    request<T>('PUT', url, body),
  patch: <T>(url: string, body?: unknown) =>
    request<T>('PATCH', url, body),
  delete: <T>(url: string) =>
    request<T>('DELETE', url)
};

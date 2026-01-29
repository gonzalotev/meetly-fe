import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
import { useAuthStore } from '@/store/auth.store';

export default function GoogleCallback() {
  const login = useAuthStore(state => state.login);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const accessToken = params.get('token');
    const refreshToken = params.get('refresh');

    if (accessToken && refreshToken) {
      // Idealmente pedir /me
      login({
        accessToken,
        refreshToken,
        user: { id: 'temp', email: '' }
      });

      history.replace('/app');
    }
  }, []);

  return null;
}

import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
import { useAuthStore } from '@/store/auth.store';
import { api } from '@/services/api';
import { User } from '@/types/user';

export default function GoogleCallback() {
    const login = useAuthStore(state => state.login);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        async function handleGoogleLogin() {
            const params = new URLSearchParams(location.search);

            const accessToken = params.get('token');
            const refreshToken = params.get('refresh');

            if (!accessToken || !refreshToken) {
                history.replace('/login');
                return;
            }

            login({
                user: {
                    id: 'temp',
                    email: '',
                    role: 'user',
                },
                accessToken,
                refreshToken
            });

            const user = await api.get<User>('/users/me');
            login({
                user,
                accessToken,
                refreshToken
            });

            history.replace('/app');
        }

        handleGoogleLogin();
    }, []);


    return null;
}

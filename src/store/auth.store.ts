import { create } from 'zustand';

type User = {
    id: string;
    email: string;
};

type AuthState = {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;

    login: (data: {
        user: User;
        accessToken: string;
        refreshToken: string;
    }) => void;

    logout: () => void;
    hydrate: () => void;
};


export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,

    login: ({ user, accessToken, refreshToken }) => {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('user', JSON.stringify(user));

        set({
            user,
            accessToken,
            refreshToken,
            isAuthenticated: true
        });
    },

    logout: () => {
        localStorage.clear();
        set({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false
        });
    },

    hydrate: () => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        const user = localStorage.getItem('user');

        if (accessToken && refreshToken && user) {
            set({
                accessToken,
                refreshToken,
                user: JSON.parse(user),
                isAuthenticated: true
            });
        }
    }

}));

import { Route, Redirect } from 'react-router-dom';
import Login from '@/features/auth/pages/Login';
import { AuthTabs } from './AuthTabs';
import { useAuthStore } from '@/store/auth.store';
import GoogleCallback from '@/features/auth/pages/GoogleCallback';

export function AppRoutes() {
    const isAuthenticated = useAuthStore(
        state => state.isAuthenticated
    );

    if (!isAuthenticated) {
        return (
            <>
                <Route path="/login">
                    <Login />
                </Route>
                <Redirect to="/login" />
                <Route path="/auth/google">
                    <GoogleCallback />
                </Route>
            </>
        );
    }

    return (
        <>
            <Route path="/app">
                <AuthTabs />
            </Route>
            <Redirect from="/" to="/app" />
        </>
    );
}

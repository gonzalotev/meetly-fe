import { Route, Redirect } from 'react-router-dom';
import Login from '@/features/auth/pages/Login';
import GoogleCallback from '@/features/auth/pages/GoogleCallback';
import { AuthTabs } from './AuthTabs';
import { useAuthStore } from '@/store/auth.store';

export function AppRoutes() {
  const isAuthenticated = useAuthStore(
    state => state.isAuthenticated
  );

  if (!isAuthenticated) {
    return (
      <>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route path="/auth/google">
          <GoogleCallback />
        </Route>

        <Redirect to="/login" />
      </>
    );
  }

  return (
    <>
      <Route path="/app">
        <AuthTabs />
      </Route>

      <Redirect exact from="/" to="/app" />
    </>
  );
}

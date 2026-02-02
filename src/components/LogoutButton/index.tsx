import { IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import { useAuthStore } from '@/store/auth.store';

export function LogoutButton() {
  const logout = useAuthStore(state => state.logout);
  const history = useHistory();

  function handleLogout() {
    logout();
    history.replace('/login');
  }

  return (
    <IonButton color="danger" expand="block" onClick={handleLogout}>
      Cerrar sesión
    </IonButton>
  );
}

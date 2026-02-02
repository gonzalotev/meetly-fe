import {
  IonPage,
  IonContent,
  IonAvatar,
  IonText,
  IonButton,
  IonCard,
  IonCardContent
} from '@ionic/react';
import { useAuthStore } from '@/store/auth.store';
import { AppHeader } from '@/components/layout/AppHeader';
import { logOutOutline } from 'ionicons/icons';

export default function Profile() {
  const user = useAuthStore(state => state.user);
  const logout = useAuthStore(state => state.logout);

  if (!user) return null;

  return (
    <IonPage>
      <AppHeader title="Perfil" />

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent style={{ textAlign: 'center' }}>
            <IonAvatar
              style={{
                width: 96,
                height: 96,
                margin: '0 auto 16px'
              }}
            >
              <img
                src={user.avatarUrl ?? '/avatar-placeholder.png'}
                alt="avatar"
              />
            </IonAvatar>

            <IonText>
              <h2>{user.email}</h2>
              <p style={{ opacity: 0.6 }}>Cuenta Google</p>
            </IonText>

            <IonButton
              expand="block"
              color="danger"
              style={{ marginTop: 24 }}
              onClick={logout}
            >
              Cerrar sesión
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

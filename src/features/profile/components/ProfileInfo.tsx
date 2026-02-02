import { IonCard, IonCardContent, IonText } from '@ionic/react';
import { useAuthStore } from '@/store/auth.store';

export function ProfileInfo() {
  const user = useAuthStore(state => state.user);

  if (!user) {
    return (
      <IonText color="medium">
        <p>No hay información del usuario</p>
      </IonText>
    );
  }

  return (
    <IonCard>
      <IonCardContent>
        <h2>Datos de la cuenta</h2>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>ID:</strong> {user.id}
        </p>
      </IonCardContent>
    </IonCard>
  );
}

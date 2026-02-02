import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonLabel,
  IonSkeletonText
} from '@ionic/react';
import { useAuthStore } from '@/store/auth.store';

export function AppHeader({ title }: { title: string }) {
  const user = useAuthStore(state => state.user);

  return (
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>{title}</span>

            {user ? (
              <small style={{ opacity: 0.6 }}>{user.email}</small>
            ) : (
              <IonSkeletonText animated style={{ width: 120 }} />
            )}
          </div>
        </IonTitle>

        {user ? (
          <IonAvatar slot="end" style={{ marginRight: 12 }}>
            <img
              src={user.avatarUrl ?? '/avatar-placeholder.png'}
              alt="avatar"
            />
          </IonAvatar>
        ) : (
          <IonSkeletonText
            slot="end"
            animated
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              marginRight: 12
            }}
          />
        )}
      </IonToolbar>
    </IonHeader>
  );
}

import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

export function AppHeader() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img
            src="/meetly-logo.png"
            alt="Meetly"
            style={{ width: 24, height: 24 }}
          />
          Meetly
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

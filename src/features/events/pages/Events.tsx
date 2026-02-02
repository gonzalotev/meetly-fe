import { AppHeader } from "@/components/layout/AppHeader";
import { IonContent, IonPage } from "@ionic/react";

export default function Events() {
  return (
    <IonPage>
      <AppHeader title="Eventos" />
      <IonContent className="ion-padding">
        Eventos
      </IonContent>
    </IonPage>
  );
}
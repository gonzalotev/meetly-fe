import { AppHeader } from "@/components/layout/AppHeader";
import { IonContent, IonPage } from "@ionic/react";

export default function Groups() {
  return (
    <IonPage>
      <AppHeader title="Eventos" />
      <IonContent className="ion-padding">
        Grupos
      </IonContent>
    </IonPage>
  );
}
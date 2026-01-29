import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonIcon,
  IonLabel
} from '@ionic/react';
import { calendar, people, person } from 'ionicons/icons';
import { Route, Redirect } from 'react-router-dom';

export function AuthTabs() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/app/events">
          <div>Eventos</div>
        </Route>

        <Route path="/app/groups">
          <div>Grupos</div>
        </Route>

        <Route path="/app/profile">
          <div>Perfil</div>
        </Route>

        <Redirect exact from="/app" to="/app/events" />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="events" href="/app/events">
          <IonIcon icon={calendar} />
          <IonLabel>Eventos</IonLabel>
        </IonTabButton>

        <IonTabButton tab="groups" href="/app/groups">
          <IonIcon icon={people} />
          <IonLabel>Grupos</IonLabel>
        </IonTabButton>

        <IonTabButton tab="profile" href="/app/profile">
          <IonIcon icon={person} />
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

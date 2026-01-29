import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/auth.store';

import { AppRoutes } from './routes';

/* Core CSS required for Ionic */
import '@ionic/react/css/core.css';

/* Basic CSS */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '../theme/variables.css';


setupIonicReact();

export default function App() {
  const hydrate = useAuthStore(state => state.hydrate);

  useEffect(() => {
    hydrate();
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <AppRoutes />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

import {
    IonPage,
    IonContent,
    IonInput,
    IonButton,
    IonText
} from '@ionic/react';
import { useState } from 'react';
import { login, loginWithGoogle } from '../services/auth.service';
import { useAuthStore } from '@/store/auth.store';
import { useHistory } from 'react-router';

export default function Login() {
    const loginStore = useAuthStore(state => state.login);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleLogin() {
        try {
            const res = await login(email, password);
            loginStore(res);
            history.replace('/app');
        } catch (e: any) {
            setError(e.message);
        }
    }

    function handleGoogleLogin() {
        loginWithGoogle();
    }

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <div style={{ maxWidth: 400, margin: '0 auto', marginTop: 80 }}>
                    <h1 style={{ textAlign: 'center' }}>Meetly</h1>
                    <p style={{ textAlign: 'center', opacity: 0.6 }}>
                        Organizá encuentros sin vueltas
                    </p>

                    <IonInput
                        label="Email"
                        fill="outline"
                        value={email}
                        onIonChange={e => setEmail(e.detail.value!)}
                    />

                    <IonInput
                        label="Contraseña"
                        type="password"
                        fill="outline"
                        value={password}
                        onIonChange={e => setPassword(e.detail.value!)}
                        style={{ marginTop: 12 }}
                    />

                    {error && (
                        <IonText color="danger">
                            <p>{error}</p>
                        </IonText>
                    )}

                    <IonButton
                        expand="block"
                        style={{ marginTop: 24 }}
                        onClick={handleLogin}
                    >
                        Entrar
                    </IonButton>

                    <IonButton
                        expand="block"
                        color="light"
                        onClick={handleGoogleLogin}
                    >
                        Continuar con Google
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
}

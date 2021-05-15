import {
  IonImg,
  IonPage,
  IonIcon,
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";
import firebase from "firebase/app";
import React, { useState } from "react";
import { accessibilityOutline } from 'ionicons/icons';

import "./Home.css";
import Logotipo from "../../assets/logotipo.png";

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const RenderForm = (
    <>
      <IonItem>
        <IonLabel position="floating" >Email</IonLabel>
        <IonInput value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating" >Contraseña</IonLabel>
        <IonInput value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
      </IonItem>
      <IonButton className="button_signin_home" type="submit" fill="solid" expand="full" >
        <IonIcon slot="start" icon={accessibilityOutline} />
        <IonIcon slot="end" icon={accessibilityOutline} />
        Ingresar
      </IonButton>
    </>
  );

  return (
    <IonPage>
      <IonContent fullscreen className="container-home">
        <IonContent className="container-home__logo">
          <IonImg src={Logotipo} />
        </IonContent>
        <IonContent className="container_paragraph_home" >
          <div className="paragraph_home" >
            La red social del gremio de la construccion mas grande de Colomabia
          </div>
        </IonContent>
        {RenderForm}
        <IonContent className="container-home_footer" >
          <IonButton size="small" color="secondary" fill="clear" expand="block">
            Al ingresar aceptas nuestros <br/>
            terminos y condiciones
          </IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;

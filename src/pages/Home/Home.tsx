import {
  IonImg,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonContent,
} from "@ionic/react";
import React, { useState } from "react";

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
      <IonButton className="button_signin_home_restore" type="button" color="tertiary" fill="clear" size="small" expand="block" >
        ¿Olvidaste tu contraseña?
      </IonButton>
      <IonButton routerLink="/posts" className="button_signin_home" type="submit" fill="solid" size="default" expand="block" >
        Ingresar
      </IonButton>
      <IonButton routerLink="/register" className="button_signin_home" color="tertiary" type="button" fill="solid" size="default" expand="block" >
        Registrate
      </IonButton>
    </>
  );

  return (
    <IonPage>
      <IonContent scrollY={false} fullscreen className="container-home">
        <IonContent scrollY={false} className="container-home__logo">
          <IonImg src={Logotipo} />
        </IonContent>
        <IonContent className="container_paragraph_home" >
          <div className="paragraph_home" >
            La red social del gremio de la construccion mas grande de Colombia
          </div>
        </IonContent>
        {RenderForm}
        <IonContent scrollY={false} className="container-home_footer" >
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

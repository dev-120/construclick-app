import {
  IonImg,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonContent,
  IonFooter,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

import "./Home.css";
import Logotipo from "../../assets/logo.png";

const Home: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const RenderForm = (
    <>
      <IonItem className="input-login__home ion-margin-top ion-margin-horizontal">
        <IonLabel mode="md" position="floating">Email</IonLabel>
        <IonInput
          mode="md"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value!)}
        />
      </IonItem>
      <IonItem className="input-login__home ion-margin-top ion-margin-horizontal">
        <IonLabel mode="md" position="floating">Contraseña</IonLabel>
        <IonInput
          type="password"
          mode="md"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
        />
      </IonItem>
      <IonButton
        className="button_signin_home_restore ion-margin"
        type="button"
        color="primary"
        fill="clear"
        size="small"
        expand="block"
      >
        ¿Olvidaste tu contraseña?
      </IonButton>
      <IonButton
        routerLink="/posts"
        className="button_signin_home"
        type="submit"
        fill="solid"
        size="default"
        expand="block"
      >
        Ingresar
      </IonButton>
      <IonButton
        routerLink="/register"
        className="button_signin_home"
        color="primary"
        type="button"
        fill="outline"
        size="default"
        expand="block"
      >
        Registrate
      </IonButton>
    </>
  );

  return (
    <IonPage>
      <IonContent scrollY={false} fullscreen className="container-home">
        <IonItem lines="none" className="container-home__logo">
          <IonImg src={Logotipo} />
        </IonItem>
        {RenderForm}
      </IonContent>
      <IonFooter mode="md">
        <IonToolbar mode="md" className="footer-home__login">
          <IonButton expand="block" fill="clear" className="ion-margin">
            Al ingresar aceptas nuestros <br />
            terminos y condiciones
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
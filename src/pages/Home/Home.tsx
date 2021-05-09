import {
  IonImg,
  IonPage,
  IonIcon,
  IonButton,
  IonContent,
} from "@ionic/react";
import React from "react";
import firebase from "firebase/app";
import { logoGoogle, logoFacebook } from 'ionicons/icons';

import Logotipo from "../../assets/logotipo.png";

import "./Home.css";

const Home: React.FC = () => {

  const onClickLoginGoogle = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  };


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
        <IonButton
          strong
          className="button_login_social"
          id="button-google"
          onClick={onClickLoginGoogle}
          shape="round"
          expand="full"
          color="google"
        >
          Ingresa con Google
          <IonIcon icon={logoGoogle} slot="start" />
        </IonButton>
        <IonButton
          strong
          className="button_login_social"
          shape="round"
          expand="full"
          id="button-facebook"
          color="facebook"
        >
          Ingresa con Facebook
          <IonIcon icon={logoFacebook} slot="start" />
        </IonButton>
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

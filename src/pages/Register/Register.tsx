import {
  IonButton,
  IonContent,
  IonPage,
  IonList,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonItem,
  IonImg,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Register.css";
import Logo from "../../assets/logo_orange.png";

const RegisterPage: React.FC = () => {
  const history = useHistory();
  const [registerType, setRegisterType] = useState<string>("Persona");

  const clickHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    registerType === "Persona"
      ? history.push("/register/personas")
      : history.push("/register/empresas");
  };

  const changeHandler = (e: {
    detail: { value: React.SetStateAction<string> };
  }) => {
    setRegisterType(e.detail.value);
  };
  return (
    <IonPage>
      <IonContent fullscreen className="ion-text-center">
        <IonImg src={Logo} className="logo-image" />
        <h2 className="ion-text-center">Registrate</h2>
        <IonList>
          <IonItem>
            <IonLabel>Usuario</IonLabel>
            <IonSelect
              name="type-user"
              value={registerType}
              placeholder="Selecciona uno"
              onIonChange={changeHandler}
            >
              <IonSelectOption value="Persona">Persona</IonSelectOption>
              <IonSelectOption value="Empresa">Empresa</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        <p>Selecciona Tipo de Usuario</p>
        <IonButton onClick={clickHandler}> Siguiente</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;

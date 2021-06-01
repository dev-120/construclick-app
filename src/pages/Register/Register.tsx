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
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonSlides,
  IonIcon,
  IonSlide,
  IonDatetime,
  IonAvatar,
  IonFooter,
  IonButtons,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import React, { useState, useRef } from "react";
import { arrowBackOutline } from "ionicons/icons";

import "./Register.css";
import Logo from "../../assets/logo.png";
import LogoConstruclick from "../../assets/logotipo.png";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

interface SlideProps {
  children?: React.ReactNode;
  canBack: boolean;
  backSlideHandler: React.MouseEventHandler<HTMLIonButtonElement>;
}

const SlideHeader: React.FC = () => {
  return (
    <>
      {
        <IonHeader className="ion-no-border ion-text-left">
          <IonToolbar>
            <IonButton fill="clear">
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
          </IonToolbar>
        </IonHeader>
      }
    </>
  );
};

const Slide: React.FC<SlideProps> = ({
  children,
  canBack,
  backSlideHandler,
}) => (
  <IonSlide className="ion-padding">
    {children}
    {canBack && <SlideFooter />}
  </IonSlide>
);

const SlideFooter: React.FC = () => {
  return (
    <IonFooter mode="md">
      <IonToolbar className="footer-page__register">
        <IonButton expand="block" fill="clear" color="primary">
          Al ingresar aceptas nuestros <br />
          terminos y condiciones
        </IonButton>
      </IonToolbar>
    </IonFooter>
  );
};

const RegisterPage: React.FC = () => {
  const history = useHistory();
  const slidesRef = useRef<HTMLIonSlidesElement>(null);

  const [nit, setNit] = useState("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState("");
  const [profession, setProfession] = useState<string>("");
  const [city, setCity] = useState<string>("Santa Marta");
  const [password, setPassword] = useState<string>("");
  const [registerType, setRegisterType] = useState<string>("person");
  const [birthDate, setBirthDate] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [legalAgentName, setLegalAgentName] = useState("");
  const [legalAgentPhone, setLegalAgentPhone] = useState("");

  const clickHandler = (e: { preventDefault: () => void }) => {
    slidesRef.current?.slideNext();
  };

  const backSlideHandler = async () => {
    const isBeginning = await slidesRef?.current?.isBeginning();
    if (isBeginning) {
      history.goBack();
    } else {
      slidesRef.current?.slidePrev();
    }
  };

  const isBussiness = () => registerType === "business";

  return (
    <IonPage>
      <IonContent fullscreen className="ion-text-center slide-page-dark">
        <IonSlides mode="md" pager={true} options={slideOpts} ref={slidesRef}>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent fullscreen className="slide-page-dark">
              <IonImg src={Logo} className="logo-image" />
              <h2 className="ion-text-center">Registrate</h2>
              <IonItem className="item-list__dark ion-margin">
                <IonLabel>Tipo de usuario</IonLabel>
                <IonSelect
                  className="item-list__dark"
                  name="type-user"
                  value={registerType}
                  placeholder="Selecciona uno"
                  onIonChange={(e) => {
                    setRegisterType(e.detail.value);
                  }}
                >
                  <IonSelectOption value="person">Persona</IonSelectOption>
                  <IonSelectOption value="business">Empresa</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonButton className="ion-margin-top" onClick={clickHandler}>
                Siguiente
              </IonButton>
            </IonContent>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent className="ion-padding content-center-vertical slide-page-dark">
              <IonImg src={Logo} className="logo-image__register" />
              <IonTitle className="ion-margin ion-padding-bottom">
                ¿Quien eres?
              </IonTitle>
              <IonAvatar className="avatar-profile ion-margin-bottom">
                <img src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg" />
              </IonAvatar>
              <IonItem className="item-list__dark">
                <IonLabel position="floating">
                  Nombre {isBussiness() && "de la empresa"}
                </IonLabel>
                <IonInput
                  type="text"
                  value={name}
                  onIonChange={(e) => setName(e.detail.value!)}
                  required
                />
              </IonItem>
              {!isBussiness() && (
                <IonItem className="ion-margin-vertical item-list__dark">
                  <IonLabel position="floating">Apellido</IonLabel>
                  <IonInput
                    type="text"
                    value={lastName}
                    onIonChange={(e) => setLastName(e.detail.value!)}
                    required
                  />
                </IonItem>
              )}
              {isBussiness() && (
                <IonItem className="ion-margin-vertical item-list__dark">
                  <IonLabel position="floating">Nit</IonLabel>
                  <IonInput
                    type="text"
                    value={nit}
                    onIonChange={(e) => setNit(e.detail.value!)}
                    required
                  />
                </IonItem>
              )}
              <IonGrid>
                <IonRow className="justify-content-center">
                  <IonCol size="6">
                    <IonButton
                      fill="outline"
                      className="ion-padding-horizontal"
                      expand="block"
                      onClick={backSlideHandler}
                    >
                      atras
                    </IonButton>
                  </IonCol>
                  <IonCol size="6">
                    <IonButton
                      className="ion-padding-horizontal"
                      expand="block"
                      onClick={clickHandler}
                    >
                      siguiente
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonContent>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent className="ion-padding ion-margin-vertical slide-page-dark">
              <IonImg src={Logo} className="logo-image__register" />
              <IonTitle className="ion-padding">
                ¿Como te podemos contactar?
              </IonTitle>
              <IonItem className="item-list__dark">
                <IonLabel>Ciudad</IonLabel>
                <IonSelect
                  name="type-user"
                  value={city}
                  placeholder="Selecciona uno"
                  onIonChange={(e) => {
                    setCity(e.detail.value);
                  }}
                >
                  <IonSelectOption value="Santa Marta">
                    Santa Marta
                  </IonSelectOption>
                  <IonSelectOption value="Barranquilla">
                    Barranquilla
                  </IonSelectOption>
                  <IonSelectOption value="Medellin">Medellin</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem className="ion-margin-vertical item-list__dark">
                <IonLabel>Direccion</IonLabel>
                <IonInput
                  type="text"
                  value={address}
                  onIonChange={(e) => setAddress(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonItem className="ion-margin-vertical item-list__dark">
                <IonLabel>Email</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonItem className="ion-margin-vertical item-list__dark">
                <IonLabel>Celular</IonLabel>
                <IonInput
                  type="tel"
                  value={cellphone}
                  onIonChange={(e) => setCellphone(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonGrid>
                <IonRow className="justify-content-center">
                  <IonCol size="6">
                    <IonButton
                      fill="outline"
                      className="ion-padding-horizontal"
                      expand="block"
                      onClick={backSlideHandler}
                    >
                      atras
                    </IonButton>
                  </IonCol>
                  <IonCol size="6">
                    <IonButton
                      className="ion-padding-horizontal"
                      expand="block"
                      onClick={clickHandler}
                    >
                      siguiente
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonContent>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent className="ion-padding ion-margin-vertical slide-page-dark">
              <IonImg src={Logo} className="logo-image__register" />
              <IonTitle className="ion-padding">Aseguremos tu cuenta</IonTitle>
              <IonItem className="ion-margin-vertical item-list__dark">
                <IonLabel>Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonItem className="ion-margin-vertical item-list__dark">
                <IonLabel>Confirmar Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={confirmPassword}
                  onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonGrid>
                <IonRow className="justify-content-center">
                  <IonCol size="6">
                    <IonButton
                      fill="outline"
                      className="ion-padding-horizontal"
                      expand="block"
                      onClick={backSlideHandler}
                    >
                      atras
                    </IonButton>
                  </IonCol>
                  <IonCol size="6">
                    <IonButton
                      className="ion-padding-horizontal"
                      expand="block"
                      onClick={clickHandler}
                    >
                      siguiente
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonContent>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent className="ion-padding ion-margin-vertical slide-page-dark">
              {!isBussiness() && (
                <>
                  <IonImg src={Logo} className="logo-image__register" />
                  <IonTitle className="ion-padding">Dinos mas de ti</IonTitle>
                  <IonItem className="ion-margin-top item-list__dark">
                    <IonLabel>Fecha de Nacimiento</IonLabel>
                    <IonDatetime
                      displayFormat="DD-MM-YYYY"
                      min="1940"
                      max="2021"
                      value={birthDate}
                      onIonChange={(e) => setBirthDate(e.detail.value!)}
                    />
                  </IonItem>
                  <IonItem className="ion-margin-top item-list__dark">
                    <IonLabel>Genero</IonLabel>
                    <IonSelect
                      name="genero"
                      value={gender}
                      placeholder="Selecciona uno"
                      onIonChange={(e) => setGender(e.detail.value!)}
                    >
                      <IonSelectOption value="Hombre">Hombre</IonSelectOption>
                      <IonSelectOption value="Mujer">Mujer</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                  <IonItem className="ion-margin-top item-list__dark">
                    <IonLabel>Profesion</IonLabel>
                    <IonSelect
                      name="profesion"
                      value={profession}
                      placeholder="Seleciona Profesion"
                      onIonChange={(e) => setProfession(e.detail.value!)}
                    >
                      <IonSelectOption value="Ingeniero">
                        Ingeniero
                      </IonSelectOption>
                      <IonSelectOption value="Obrero">Obrero</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </>
              )}
              {isBussiness() && (
                <>
                  <IonImg src={Logo} className="logo-image__register" />
                  <IonTitle className="ion-padding">
                    Datos del representante
                  </IonTitle>
                  <IonItem className="ion-margin-vertical item-list__dark">
                    <IonLabel>Nombre Representante</IonLabel>
                    <IonInput
                      type="text"
                      value={legalAgentName}
                      onIonChange={(e) => setLegalAgentName(e.detail.value!)}
                      required
                    />
                  </IonItem>
                  <IonItem className="ion-margin-top item-list__dark">
                    <IonLabel>Telefono Representante</IonLabel>
                    <IonInput
                      type="tel"
                      value={legalAgentPhone}
                      onIonChange={(e) => setLegalAgentPhone(e.detail.value!)}
                      required
                    />
                  </IonItem>
                </>
              )}
              <IonButton className="ion-margin-top" type="submit">
                Registrarse
              </IonButton>
            </IonContent>
          </Slide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;

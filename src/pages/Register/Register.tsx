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
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import React, { useState, useRef } from "react";
import { arrowBackOutline } from "ionicons/icons";

import "./Register.css";
import Logo from "../../assets/logo_orange.png";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

interface SlideProps {
  children?: React.ReactNode;
  canBack: boolean;
  backSlideHandler: React.MouseEventHandler<HTMLIonButtonElement>;
}

const Slide: React.FC<SlideProps> = ({
  children,
  canBack,
  backSlideHandler,
}) => (
  <IonSlide className="ion-padding">
    {canBack && (
      <IonHeader className="ion-no-border ion-text-left">
        <IonToolbar>
          <IonButton fill="clear" onClick={backSlideHandler}>
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
    )}
    {children}
  </IonSlide>
);

const RegisterPage: React.FC = () => {
  const history = useHistory();
  const slidesRef = useRef<HTMLIonSlidesElement>(null);

  const [nit, setNit] = useState("");
  const [email, setEmail] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");
  const [genero, setGenero] = useState<string>("");
  const [celular, setCelular] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [fotoDePerfil, setFotoDePerfil] = useState("");
  const [profesion, setProfesion] = useState<string>("");
  const [city, setCity] = useState<string>("Santa Marta");
  const [contraseña, setContraseña] = useState<string>("");
  const [registerType, setRegisterType] = useState<string>("person");
  const [fechaDeNacimiento, setFechaDeNacimento] = useState<string>("");
  const [confirmarContraseña, setConfirmarContraseña] = useState<string>("");
  const [nombreRepresentanteLegal, setNombreRepresentanteLegal] = useState("");
  const [telefonoRepresentanteLegal, setTelefonoRepresentanteLegal] =
    useState("");

  const clickHandler = (e: { preventDefault: () => void }) => {
    slidesRef.current?.slideNext();
  };

  const backSlideHandler = async () => {
    slidesRef.current?.slidePrev();
  };

  const isBussiness = () => registerType === "business";

  return (
    <IonPage>
      <IonContent fullscreen className=" ion-text-center">
        <IonSlides mode="md" pager={true} options={slideOpts} ref={slidesRef}>
          <Slide canBack={false} backSlideHandler={backSlideHandler}>
            <IonImg src={Logo} className="logo-image" />
            <h2 className="ion-text-center">Registrate</h2>
            <IonList>
              <IonItem>
                <IonLabel>Tipo de usuario</IonLabel>
                <IonSelect
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
            </IonList>
            <IonButton onClick={clickHandler}> Siguiente</IonButton>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonTitle className="ion-margin ion-padding">¿Quien eres?</IonTitle>
            <IonContent className="ion-padding content-center-vertical ">
              <IonAvatar className="avatar-profile" >
                <img src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg" />
              </IonAvatar>
              <IonItem>
                <IonLabel position="floating">
                  Nombre {isBussiness() && "de la empresa"}
                </IonLabel>
                <IonInput
                  type="text"
                  value={nombre}
                  onIonChange={(e) => setNombre(e.detail.value!)}
                  required
                />
              </IonItem>
              {!isBussiness() && (
                <IonItem className="ion-margin-top">
                  <IonLabel position="floating">Apellido</IonLabel>
                  <IonInput
                    type="text"
                    value={apellido}
                    onIonChange={(e) => setApellido(e.detail.value!)}
                    required
                  />
                </IonItem>
              )}
              {isBussiness() && (
                <IonItem className="ion-margin-top">
                  <IonLabel position="floating">Nit</IonLabel>
                  <IonInput
                    type="text"
                    value={nit}
                    onIonChange={(e) => setNit(e.detail.value!)}
                    required
                  />
                </IonItem>
              )}
              <IonButton className="ion-margin-top" onClick={clickHandler}>
                Siguiente
              </IonButton>
            </IonContent>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent className="ion-padding ion-margin-vertical">
              <IonTitle className="ion-padding">
                ¿Como te podemos contactar?
              </IonTitle>
              <IonItem>
                <IonLabel>Ciudad</IonLabel>
                <IonSelect
                  name="type-user"
                  value={registerType}
                  placeholder="Selecciona uno"
                  onIonChange={(e) => {
                    setRegisterType(e.detail.value);
                  }}
                >
                  <IonSelectOption value="Santa Marta">Santa Marta</IonSelectOption>
                  <IonSelectOption value="Barranquilla">Barranquilla</IonSelectOption>
                  <IonSelectOption value="Medellin">Medellin</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem className="ion-margin-vertical">
                <IonLabel>Direccion</IonLabel>
                <IonInput
                  type="text"
                  value={address}
                  onIonChange={(e) => setAddress(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonItem className="ion-margin-vertical">
                <IonLabel>Email</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonItem className="ion-margin-vertical">
                <IonLabel>Celular</IonLabel>
                <IonInput
                  type="tel"
                  value={celular}
                  onIonChange={(e) => setCelular(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonButton className="ion-margin-top" onClick={clickHandler}>
                Siguiente
              </IonButton>
            </IonContent>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent className="ion-padding ion-margin-vertical">
              <IonTitle className="ion-padding">Aseguremos tu cuenta</IonTitle>
              <IonItem className="ion-margin-vertical">
                <IonLabel>Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={contraseña}
                  onIonChange={(e) => setContraseña(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonItem className="ion-margin-vertical">
                <IonLabel>Confirmar Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={confirmarContraseña}
                  onIonChange={(e) => setConfirmarContraseña(e.detail.value!)}
                  required
                />
              </IonItem>
              <IonButton className="ion-margin-top" onClick={clickHandler}>
                Siguiente
              </IonButton>
            </IonContent>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent className="ion-padding ion-margin-vertical">
              {!isBussiness() && (
                <>
                  <IonTitle className="ion-padding">Dinos mas de ti</IonTitle>
                  <IonItem className="ion-margin-top">
                    <IonLabel>Fecha de Nacimiento</IonLabel>
                    <IonDatetime
                      displayFormat="DD-MM-YYYY"
                      min="1940"
                      max="2021"
                      value={fechaDeNacimiento}
                      onIonChange={(e) => setFechaDeNacimento(e.detail.value!)}
                    />
                  </IonItem>
                  <IonItem className="ion-margin-top">
                    <IonLabel>Genero</IonLabel>
                    <IonSelect
                      name="genero"
                      value={genero}
                      placeholder="Selecciona uno"
                      onIonChange={(e) => setGenero(e.detail.value!)}
                    >
                      <IonSelectOption value="Hombre">Hombre</IonSelectOption>
                      <IonSelectOption value="Mujer">Mujer</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                  <IonItem className="ion-margin-top">
                    <IonLabel>Profesion</IonLabel>
                    <IonSelect
                      name="profesion"
                      value={profesion}
                      placeholder="Seleciona Profesion"
                      onIonChange={(e) => setProfesion(e.detail.value!)}
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
                  <IonTitle className="ion-padding">
                    Datos del representante
                  </IonTitle>
                  <IonItem className="ion-margin-vertical">
                    <IonLabel>Nombre Representante</IonLabel>
                    <IonInput
                      type="text"
                      value={nombreRepresentanteLegal}
                      onIonChange={(e) =>
                        setNombreRepresentanteLegal(e.detail.value!)
                      }
                      required
                    />
                  </IonItem>
                  <IonItem className="ion-margin-top">
                    <IonLabel>Telefono Representante</IonLabel>
                    <IonInput
                      type="tel"
                      value={telefonoRepresentanteLegal}
                      onIonChange={(e) =>
                        setTelefonoRepresentanteLegal(e.detail.value!)
                      }
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

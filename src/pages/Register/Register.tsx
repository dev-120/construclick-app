import {
  IonContent,
  IonPage,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonItem,
  IonImg,
  IonTitle,
  IonInput,
  IonSlides,
  IonDatetime,
  IonAvatar,

} from "@ionic/react";
import { useHistory } from "react-router-dom";
import React, { useState, useRef } from "react";
import { Plugins, CameraResultType } from "@capacitor/core";

import {
  Slide, SlideButtons, slideOpts
} from './Slide';
import "./Register.css";
import Logo from "../../assets/logo.png";
import useUser from "../../hooks/useUser";
import { uploadImage } from '../../services/image.service';
import { AVATAR_IMAGE, ROLES } from "../../config/constants";
import LogoConstruclick from "../../assets/logotipo_black.png";
import { dataURLtoFile } from "../../utils/image";
import useCommons from "../../hooks/useCommons";

const { Camera } = Plugins;

const RegisterPage: React.FC = () => {
  const history = useHistory();
  const { registerAction } = useUser();
  const slidesRef = useRef<HTMLIonSlidesElement>(null);
  const { cities, professions } = useCommons();

  const [nit, setNit] = useState("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [profession, setProfession] = useState<string>("");
  const [city, setCity] = useState<string>("Santa Marta");
  const [password, setPassword] = useState<string>("");
  const [registerType, setRegisterType] = useState<string>("person");
  const [birthDate, setBirthDate] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [legalAgentName, setLegalAgentName] = useState("");
  const [legalAgentPhone, setLegalAgentPhone] = useState("");
  const [legalAgentEmail, setLegalAgentEmail] = useState("");

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

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    });
    console.log(image);
    setProfilePicture(image.dataUrl ?? null);
  };
  const isBussiness = () => registerType === "business";

  const onSubmit = async () => {
    const role = registerType === "person" ? ROLES.person : ROLES.company;
    let imageUrl;

    if(profilePicture){
      const responseImage = await uploadImage(dataURLtoFile(profilePicture, 'image.png'));
      imageUrl = responseImage.data.data;
    }


    registerAction({
      ...role === ROLES.person ? {
        birthdate: birthDate,
        gender,
        profession_id: profession,
        last_name: lastName,
      } : {
        nit,
        name_legal_representative: legalAgentName,
        phone_legal_representative: legalAgentPhone,
        email_legal_representative: legalAgentEmail,
      },
      email,
      image_url: imageUrl,
      city_id: city,
      name,
      password,
      phone: cellphone,
      type: role,
    });
  };

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
              <SlideButtons canBack={false} clickHandler={clickHandler} />
            </IonContent>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent className="ion-padding content-center-vertical slide-page-dark">
              <IonImg src={LogoConstruclick} className="logo-image__register" />
              <IonTitle className="ion-margin ion-padding-bottom">
                ¿Quien eres?
              </IonTitle>
              <IonAvatar onClick={takePicture} className="avatar-profile ion-margin-bottom">
                <img className="profile-img_register" src={profilePicture || AVATAR_IMAGE} alt="Avatar" />
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
              <SlideButtons
                canBack={true}
                clickHandler={clickHandler}
                backSlideHandler={backSlideHandler}
              />
            </IonContent>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent className="ion-padding ion-margin-vertical slide-page-dark">
              <IonImg src={LogoConstruclick} className="logo-image__register" />
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
              <SlideButtons
                canBack={true}
                backSlideHandler={backSlideHandler}
                clickHandler={clickHandler}
              />
            </IonContent>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent className="ion-padding ion-margin-vertical slide-page-dark">
              <IonImg src={LogoConstruclick} className="logo-image__register" />
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
              <SlideButtons
                canBack
                clickHandler={clickHandler}
                backSlideHandler={backSlideHandler}
              />
            </IonContent>
          </Slide>
          <Slide canBack backSlideHandler={backSlideHandler}>
            <IonContent className="ion-padding ion-margin-vertical slide-page-dark">
              {!isBussiness() && (
                <>
                  <IonImg
                    src={LogoConstruclick}
                    className="logo-image__register"
                  />
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
                      {professions?.map((item) => (
                        <IonSelectOption value={item.id}>
                          {item.name}
                        </IonSelectOption>
                      ))}
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
                    <IonLabel>Nombre del representante</IonLabel>
                    <IonInput
                      type="text"
                      value={legalAgentName}
                      onIonChange={(e) => setLegalAgentName(e.detail.value!)}
                      required
                    />
                  </IonItem>
                  <IonItem className="ion-margin-top item-list__dark">
                    <IonLabel>Telefono del representante</IonLabel>
                    <IonInput
                      type="tel"
                      value={legalAgentPhone}
                      onIonChange={(e) => setLegalAgentPhone(e.detail.value!)}
                      required
                    />
                  </IonItem>
                  <IonItem className="ion-margin-top item-list__dark">
                    <IonLabel>Email del representante</IonLabel>
                    <IonInput
                      type="email"
                      value={legalAgentEmail}
                      onIonChange={(e) => setLegalAgentEmail(e.detail.value!)}
                      required
                    />
                  </IonItem>
                </>
              )}
              <SlideButtons
                canBack={true}
                titleButton="Registrate"
                backSlideHandler={backSlideHandler}
                clickHandler={onSubmit}
              />
            </IonContent>
          </Slide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;

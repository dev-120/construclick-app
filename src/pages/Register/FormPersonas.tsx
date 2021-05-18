import {
  IonContent,
  IonHeader,
  IonSlide,
  IonToolbar,
  IonSlides,
  IonPage,
  IonButton,
  IonIcon,
  IonInput,
  IonLabel,
  IonItem,
  IonDatetime,
  IonTitle,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState, useRef } from "react";
import { arrowBackOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const FormPersonas: React.FC = () => {
  const slidesRef = useRef<HTMLIonSlidesElement>(null);
  const history = useHistory();

  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [fechaDeNacimiento, setFechaDeNacimento] = useState<string>("");
  const [genero, setGenero] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [celular, setCelular] = useState<string>("");
  const [fotoDePerfil, setFotoDePerfil] = useState("");
  const [contraseña, setContraseña] = useState<string>("");
  const [confirmarContraseña, setConfirmarContraseña] = useState<string>("")
  const [profesion, setProfesion] = useState<string>("");


  const sliderHandler = () => {
    slidesRef.current?.slideNext();
  };

  const backSlideHandler = async () => {
    let initial = await slidesRef.current?.isBeginning();
    console.log(initial);
    initial ? history.push("/register") : slidesRef.current?.slidePrev();
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Enviado");
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <form onSubmit={submitHandler} className="form-register">
          <IonSlides mode="md" pager={true} options={slideOpts} ref={slidesRef}>
            <IonSlide className="ion-padding">
              <IonHeader className="ion-no-border ion-text-left">
                <IonToolbar>
                  <IonButton fill="clear" onClick={backSlideHandler}>
                    <IonIcon icon={arrowBackOutline}></IonIcon>
                    Atras
                  </IonButton>
                </IonToolbar>
              </IonHeader>
              <IonTitle className="ion-margin ion-padding">
                Ingresa Tus Datos
              </IonTitle>
              <IonContent className="ion-padding">
                <IonItem>
                  <IonLabel position="floating">Nombre</IonLabel>
                  <IonInput
                    type="text"
                    value={nombre}
                    onIonChange={(e) => setNombre(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem className="ion-margin-top">
                  <IonLabel position="floating">Apellido</IonLabel>
                  <IonInput
                    type="text"
                    value={apellido}
                    onIonChange={(e) => setApellido(e.detail.value!)}
                    required
                  />
                </IonItem>
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
                <IonButton className="ion-margin-top" onClick={sliderHandler}>
                  Siguiente
                </IonButton>
              </IonContent>
            </IonSlide>
            <IonSlide className="ion-padding">
              <IonHeader className="ion-no-border ion-text-left">
                <IonToolbar>
                  <IonButton fill="clear" onClick={backSlideHandler}>
                    <IonIcon icon={arrowBackOutline}></IonIcon>
                    Atras
                  </IonButton>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding ion-margin-vertical">
                <IonTitle className="ion-padding">Ingresa Tus Datos</IonTitle>
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
                <IonButton className="ion-margin-top" onClick={sliderHandler}>
                  Siguiente
                </IonButton>
              </IonContent>
            </IonSlide>
            <IonSlide className="ion-padding">
              <IonHeader className="ion-no-border ion-text-left">
                <IonToolbar>
                  <IonButton fill="clear" onClick={backSlideHandler}>
                    <IonIcon icon={arrowBackOutline}></IonIcon>
                    Atras
                  </IonButton>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding ion-margin-vertical">
                <IonTitle className="ion-padding">Ingresa Tus Datos</IonTitle>
                <IonItem className="ion-margin-vertical">
                  <IonLabel>Celular</IonLabel>
                  <IonInput
                    type="tel"
                    value={celular}
                    onIonChange={(e) => setCelular(e.detail.value!)}
                    required
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
                <IonButton className="ion-margin-top" type="submit">
                  Registrarse
                </IonButton>
              </IonContent>
            </IonSlide>
          </IonSlides>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default FormPersonas;

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
import react, { useState, useRef } from "react";
import { arrowBackOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const FormPersonas: React.FC = () => {
  const slidesRef = useRef<HTMLIonSlidesElement>(null);
  const history = useHistory();

  const [nombreEmpresa, setNombreEmpresa] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contraseña, setContraseña] = useState<string>("");
  const [confirmarContraseña, setConfirmarContraseña] = useState<string>("");
  const [Logo, setLogo] = useState("");
  const [celular, setCelular] = useState<string>("");
  
  const [nit, setNit] = useState('');
  const [nombreRepresentanteLegal, setNombreRepresentanteLegal] = useState("")
  const [telefonoRepresentanteLegal, setTelefonoRepresentanteLegal] = useState("")
  
  
  
  

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
                  <IonLabel position="floating">Nombre de Empresa</IonLabel>
                  <IonInput
                    type="text"
                    value={nombreEmpresa}
                    onIonChange={(e) => setNombreEmpresa(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem className="ion-margin-top">
                  <IonLabel position="floating">Nit</IonLabel>
                  <IonInput
                    type="number"
                    value={nit}
                    onIonChange={(e) => setNit(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem className="ion-margin-top">
                <IonLabel position="floating">Celular</IonLabel>
                  <IonInput
                    type="tel"
                    value={telefonoRepresentanteLegal}
                    onIonChange={(e) => setTelefonoRepresentanteLegal(e.detail.value!)}
                    required
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
                  <IonLabel>Nombre Representante</IonLabel>
                  <IonInput
                    type="text"
                    value={nombreRepresentanteLegal}
                    onIonChange={(e) => setNombreRepresentanteLegal(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem className="ion-margin-top">
                  <IonLabel>Telefono Representante</IonLabel>
                  <IonInput
                    type="tel"
                    value={telefonoRepresentanteLegal}
                    onIonChange={(e) => setTelefonoRepresentanteLegal(e.detail.value!)}
                    required
                  />
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

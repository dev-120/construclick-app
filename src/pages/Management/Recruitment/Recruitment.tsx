import {
  IonPage,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonList,
  IonCard,
  IonCardHeader,
  IonLabel,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonText,
  IonSegment,
  IonSegmentButton,
  IonRadioGroup,
  IonRadio,
} from "@ionic/react";
import {
  thumbsUpSharp,
  chatboxEllipsesSharp,
  shareSocialSharp,
  personAdd,
  duplicateOutline,
} from "ionicons/icons";
import { useState } from "react";

import Header from "../../../components/Header/Header";
import "./Recruitment.css";
import ProfilePicPersonal from "../../../assets/profile_pic_personal.jpg";
import ProfilePicPersonal2 from "../../../assets/profile_pic_personal2.jpg";
import ProfilePicPersonal3 from "../../../assets/profile_pic_personal3.jpg";
import StarRating from "../../../components/StarRating/StarRating";

const mockupPersonal = {
  interventor: [
    {
      id: 0,
      imgSrc: ProfilePicPersonal,
      name: "Hassem Escobar Coquies",
      title: "Intervertor (Ingeniero civil)",
      likes: 92,
      comments: 18,
      rating: 5,
    },
    {
      id: 1,
      imgSrc: ProfilePicPersonal2,
      name: "Jhorman Pacheco Perez",
      title: "Intervertor (Arquitecto)",
      likes: 83,
      comments: 12,
      rating: 4.5,
    },
    {
      id: 2,
      imgSrc: ProfilePicPersonal3,
      name: "Luis Gamero Añez",
      title: "Intervertor (Maestro)",
      likes: 61,
      comments: 10,
      rating: 3.5,
    },
  ],
  oficiales: [
    {
      id: 0,
      imgSrc: ProfilePicPersonal,
      name: "Hassem Escobar Coquies",
      title: "Oficial (Ingeniero civil)",
      likes: 92,
      comments: 18,
      rating: 5,
    },
  ],
};

const Recruitment: React.FC = () => {
  const [selectedSegmentSupervisor, setselectedSegmentSupervisor] =
    useState<SelectedSegmentTypes>("interventor");
  const [selectedHiredPersonal, setSelectedHiredPersonal] =
    useState<SelectedSegmentTypes>("oficiales");
  const [hiredSupervisor, setHiredSupervisor] = useState<boolean>(true);
  function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
    return key in obj;
  }
  return (
    <IonPage>
      <Header canBack href="/gestion/dashboard" />
      <IonContent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Contratación personal</IonTitle>
        </IonToolbar>
        <IonList className="ion-margin-end ion-margin-horizontal">
          <h4>
            <strong>Información sobre el personal: </strong>
          </h4>
          <h3>*DEMASIADO IMPORTANTE</h3>
          <p>
            Hacer la contratación del recurso humano/personal con el que se
            ejecuta una obra de construcción, requiere con minimo de experiencia
            y/o conocimientos tecnicos para llevarlo acabo de manera optima,
            salvaguardando tus interes y economia. Vas a requerir en tu obra de
            un interventor/supervisor de toda tu confianza
          </p>
        </IonList>
        <IonText className="ion-padding">
          (1) ¿ Contratar interventor/Supervisor ?
        </IonText>
        <IonRadioGroup
          value={hiredSupervisor}
          onIonChange={(e) => setHiredSupervisor(e.detail.value!)}
        >
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">
              No, yo mismo seré el supervisor.
            </IonLabel>
            <IonRadio slot="start" value={false} />
          </IonItem>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">
              Si, voy a necesitar un supervisor. <strong>(Recomendado)*</strong>
            </IonLabel>
            <IonRadio slot="start" value={true} />
          </IonItem>
        </IonRadioGroup>
        {hiredSupervisor && (
          <>
            <IonSegment
              value={selectedSegmentSupervisor}
              onIonChange={(e: any) =>
                setselectedSegmentSupervisor(e.detail.value!)
              }
              scrollable
            >
              <IonSegmentButton value="interventor">
                <IonLabel>Interventor</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="oficiales">
                <IonLabel>Oficiales</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="electricista">
                <IonLabel>Electricista</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="albañil">
                <IonLabel>Albañil</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="sst">
                <IonLabel>SST</IonLabel>
              </IonSegmentButton>
            </IonSegment>
            {hasKey(mockupPersonal, selectedSegmentSupervisor) &&
              mockupPersonal[selectedSegmentSupervisor].map(
                (person: PersonalInformation) => (
                  <PersonalCard key={person.id} {...person} />
                )
              )}
          </>
        )}
        <IonText className="ion-padding">(2) Contratar al personal</IonText>
        <IonSegment
          value={selectedHiredPersonal}
          onIonChange={(e: any) => setSelectedHiredPersonal(e.detail.value!)}
          scrollable
        >
          <IonSegmentButton value="interventor">
            <IonLabel>Interventor</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="oficiales">
            <IonLabel>Oficiales</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="electricista">
            <IonLabel>Electricista</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="albañil">
            <IonLabel>Albañil</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sst">
            <IonLabel>SST</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {hasKey(mockupPersonal, selectedHiredPersonal) &&
          mockupPersonal[selectedHiredPersonal].map(
            (person: PersonalInformation) => (
              <PersonalCard key={person.id} {...person} />
            )
          )}
        <IonItem button lines="none">
          <IonIcon slot="start" icon={personAdd} color="dark" />
          <IonLabel>
            <strong>Agregar mas personal</strong>
          </IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonText>
            <strong>(3)</strong> Ahora si, puede delegar responsables en cada
            items de tu obra
          </IonText>
        </IonItem>

        <IonItem button className="ion-padding-horizontal" lines="none">
          <IonIcon icon={duplicateOutline} color="dark" />
          <IonLabel>
            <strong>Volver a lista de items</strong>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

type SelectedSegmentTypes =
  | "interventor"
  | "oficiales"
  | "electricista"
  | "albañil"
  | "sst";

type PersonalInformation = {
  id: number;
  imgSrc: string;
  name: string;
  title: string;
  likes: number;
  comments: number;
  rating: number;
};

const PersonalCard: React.FC<PersonalInformation> = ({
  id,
  imgSrc,
  name,
  title,
  likes,
  comments,
  rating,
}: PersonalInformation) => {
  return (
    <>
      <IonCard mode="md">
        <IonCardHeader>
          <IonItem lines="none">
            <img
              slot="start"
              src={imgSrc}
              className="PersonalCard-image__style"
            />
            <IonLabel>
              {name}
              <br></br>
              <IonText style={{ fontSize: "10px" }}>{title}</IonText>
              <br></br>
              <StarRating rating={rating} />
            </IonLabel>
          </IonItem>
        </IonCardHeader>
        <IonCardContent>
          <IonGrid>
            <IonRow className="ion-align-items-center">
              <IonCol size="3">
                <IonButton fill="clear">
                  <IonIcon size="small" slot="start" icon={thumbsUpSharp} />
                  <IonLabel>{likes}</IonLabel>
                </IonButton>
              </IonCol>
              <IonCol size="3">
                <IonButton fill="clear">
                  <IonIcon
                    size="small"
                    slot="start"
                    icon={chatboxEllipsesSharp}
                    className="ion-no-margin"
                  />
                  <IonLabel>{comments}</IonLabel>
                </IonButton>
              </IonCol>
              <IonCol size="3" className="ion-no-padding">
                <IonButton fill="clear">
                  <IonIcon
                    size="small"
                    slot="start"
                    icon={shareSocialSharp}
                    className="ion-no-margin"
                  />
                  <IonLabel style={{ fontSize: "10px" }}>Share</IonLabel>
                </IonButton>
              </IonCol>
              <IonCol size="3" className="ion-no-margin">
                <div className="ion-no-margin ion-no-padding ProfileCard-buttons__style">
                  <IonButton size="small" fill="outline">
                    Ver perfil
                  </IonButton>
                  <br></br>
                  <IonButton size="small">Contactar</IonButton>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default Recruitment;

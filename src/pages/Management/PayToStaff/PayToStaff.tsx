import {
  IonPage,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonCardTitle,
  IonIcon,
  IonButton,
  IonDatetime,
  IonText,
  IonLabel,
  useIonModal,
} from "@ionic/react";
import { receipt, close } from "ionicons/icons";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

import "./PayToStaff.css";
import Header from "../../../components/Header/Header";
import ProfilePicImg from "../../../assets/profile_pic_personal.jpg";
import ProfilePicImg2 from "../../../assets/profile_pic_personal2.jpg";
import ProfilePicImg3 from "../../../assets/profile_pic_personal3.jpg";

const mockupMenu = {
  contrato: [
    {
      name: "Hassem Escobar",
      title: "Interventor",
      imgSrc: ProfilePicImg,
    },
  ],
};

const mockupActivities = [
  {
    title: `Contrato`,
    profile: {
      name: "Hassam Escobar",
      profession: "Interventor",
      profilePic: ProfilePicImg,
    },
    activities: [
      {
        title: "Contrato",
        text: "El interventor de la obra  es contratado con un salario, pagado cada quince dias",
      },
    ],
  },
  {
    title: "Actividades (2/7)",
    profile: {
      name: "Samuel Ricaurte",
      profession: "Auxiliar de obra",
      profilePic: ProfilePicImg2,
    },
    activities: [
      {
        title: "Demolicion de muros",
        labelsFirst: ["Presupuesto", "Presupuesto faltante"],
        data1First: 730000,
        data2First: 730000,
        labelSecond: ["Dias totales", "Dias Faltantes"],
        data1Second: 4,
        data2Second: 4,
        cuantity: 43,
      },
      {
        title: "Demolicion de Enchape",
        labelsFirst: ["Presupuesto", "Presupuesto faltante"],
        data1First: 440000,
        data2First: 440000,
        labelSecond: ["Dias totales", "Dias Faltantes"],
        data1Second: 3,
        data2Second: 3,
        cuantity: 28,
      },
    ],
  },
  {
    title: "Actividades (3/5)",
    profile: {
      name: "Luis Contreras",
      profession: "Auxiliar de obra",
      profilePic: ProfilePicImg3,
    },
    activities: [
      {
        title: "Demolicion de muros",
        labelsFirst: ["Presupuesto", "Presupuesto faltante"],
        data1First: 730000,
        data2First: 730000,
        labelSecond: ["Dias totales", "Dias Faltantes"],
        data1Second: 4,
        data2Second: 4,
        cuantity: 43,
      },
      {
        title: "Demolicion de Enchape",
        labelsFirst: ["Presupuesto", "Presupuesto faltante"],
        data1First: 440000,
        data2First: 222000,
        labelSecond: ["Dias totales", "Dias Faltantes"],
        data1Second: 3,
        data2Second: 3,
        cuantity: 28,
      },
    ],
  },
  {
    title: "Actividades (3/8)",
    profile: {
      name: "Jorge Charris",
      profession: "Auxiliar de obra",
      profilePic: ProfilePicImg,
    },
    activities: [
      {
        title: "Demolicion de muros",
        labelsFirst: ["Presupuesto", "Presupuesto faltante"],
        data1First: 730000,
        data2First: 730000,
        labelSecond: ["Dias totales", "Dias Faltantes"],
        data1Second: 4,
        data2Second: 4,
        cuantity: 43,
      },
      {
        title: "Demolicion de Enchape",
        labelsFirst: ["Presupuesto", "Presupuesto faltante"],
        data1First: 440000,
        data2First: 222000,
        labelSecond: ["Dias totales", "Dias Faltantes"],
        data1Second: 3,
        data2Second: 3,
        cuantity: 28,
      },
    ],
  },
];

const PayToStaff: React.FC = () => {
  const [sinceDate, setSinceDate] = useState("");
  const [toDate, setToDate] = useState(sinceDate ? sinceDate + 1 : "");
  return (
    <IonPage>
      <Header canBack href="/gestion/dashboard" />
      <IonContent fullscreen>
        <IonToolbar className="ion-text-center">
          <IonTitle>Pago al personal</IonTitle>
        </IonToolbar>
        <IonList>
          <IonItem>
            <IonLabel>Desde: </IonLabel>
            <IonDatetime
              min="2021-07-01"
              pickerFormat="DD MMMM YYYY"
              value={sinceDate}
              placeholder="Ingresa una fecha"
              onIonChange={(e) => setSinceDate(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Hasta: </IonLabel>
            <IonDatetime
              min="2021-07-01"
              max="2100-01-01"
              pickerFormat="DD MMMM YYYY"
              value={toDate}
              placeholder="Ingresa una fecha"
              onIonChange={(e) => setToDate(e.detail.value!)}
            />
          </IonItem>
          {mockupActivities.map((card) => (
            <PayToStaffCard key={card.title} {...card} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

type PayToStaffCardProps = {
  title: string;
  profile: {
    name: string;
    profession: string;
    profilePic: string;
  };
  activities: Array<any>;
};

const PayToStaffCard = ({
  title,
  profile,
  activities,
}: PayToStaffCardProps) => {
  const handleDismiss = () => {
    dismiss();
  };

  const [present, dismiss] = useIonModal(ActivitiesDetail, {
    activities,
    title,
    onDismiss: handleDismiss,
  });
  return (
    <IonCard
      onClick={() => {
        present();
      }}
    >
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size="7">
              <strong color="dark">{title}</strong>
              <IonItem lines="none"></IonItem>
              <IonItem lines="none" className="ion-no-padding">
                <IonIcon
                  slot="start"
                  style={{ fontSize: "25px" }}
                  color="dark"
                  icon={receipt}
                />
                <IonButton
                  style={{ fontSize: "9px", width: "100px" }}
                  size="small"
                >
                  Gestionar Pago
                </IonButton>
              </IonItem>
            </IonCol>
            <IonCol size="5">
              <div className="PayToStaff-profileCol__styles">
                <img src={profile.profilePic} />
                <p>{profile.name}</p>
                <strong>{profile.profession}</strong>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

type ActivitiesDetailProps = {
  title: string;
  activities: [
    {
      title: string;
      text?: string;
      labelsFirst: string[];
      data1First: number;
      data2First: number;
      labelSecond: string[];
      data1Second: number;
      data2Second: number;
      cuantity: number;
    }
  ];
  onDismiss: () => void;
};

const ActivitiesDetail = ({
  activities,
  title,
  onDismiss,
}: ActivitiesDetailProps) => {
  return (
    <IonPage>
      <IonContent>
        <IonToolbar>
          <IonItem>
            <IonLabel>Pago al Personal</IonLabel>
            <IonButton onClick={() => onDismiss()} fill="clear" color="dark">
              <IonIcon slot="icon-only" icon={close} />
            </IonButton>
          </IonItem>
        </IonToolbar>
        {title === "Contrato" && (
          <IonCard>
            <IonItem lines="none">
              <IonText className="ion-margin ion-text-wrap">
                <p className="ion-text-wrap ion-margin">
                  <strong>{activities[0].title}: </strong>
                  {activities[0].text}
                </p>
              </IonText>
            </IonItem>
            <IonButton expand="full">Pagar</IonButton>
          </IonCard>
        )}
        {title !== "Contrato" && (
          <IonList>
            {activities.map((activity, index) => (
              <IonCard key={index}>
                <IonItem>
                  <IonLabel>
                    {activity.title}
                  </IonLabel>
                </IonItem>
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonCol size="6" className="ion-text-center">
                        <ActivityDetailDoughnut
                          labels={activity.labelsFirst}
                          data1={activity.data1First}
                          data2={activity.data2Second}
                          colorData1="rgba(125, 91, 166, 1)"
                          colorData2="rgba(125, 91, 166, 0.5)"
                        />
                        <IonLabel>
                          {activity.data2First}
                          <strong> $ {activity.data1First}</strong>
                        </IonLabel>
                      </IonCol>
                      <IonCol size="6" className="ion-text-center">
                        <ActivityDetailDoughnut
                          labels={activity.labelSecond}
                          data1={activity.data1Second}
                          data2={activity.data2Second}
                          colorData1="rgba(39, 60, 44, 1)"
                          colorData2="rgba(98, 195, 112, 0.5)"
                        />
                        <IonLabel>
                          {activity.data1Second} Dias /
                          <strong> {activity.data2Second} Dia(s)</strong>
                        </IonLabel>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

type ActivitiesDetailDoughnutProps = {
  labels: Array<string>;
  data1: number;
  data2: number;
  colorData1: string;
  colorData2: string;
};

const ActivityDetailDoughnut = ({
  labels,
  data1,
  data2,
  colorData1,
  colorData2,
}: ActivitiesDetailDoughnutProps) => {
  const data = {
    labels: [...labels],
    datasets: [
      {
        data: [data1, data2],
        backgroundColor: [colorData1, colorData2],
      },
    ],
  };
  return <Doughnut type="doughnout" data={data} />;
};

export default PayToStaff;

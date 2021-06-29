import {
  IonPage,
  IonContent,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonList,
  IonText,
  IonItem,
  IonSearchbar,
  IonIcon,
  IonBadge,
  IonItemDivider,
  IonLabel,
  IonNote,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  useIonModal,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonInput,
} from "@ionic/react";
import {
  checkmarkCircleOutline,
  checkmarkCircle,
  personCircle,
  calendarOutline,
  calendar,
  close,
  personAdd,
  storefront,
  receipt,
  card,
  book
} from "ionicons/icons";
import Header from "../../../components/Header/Header";
import { useState } from "react";

import "./ScheduleItemDetail.css";
import Doughnut from "../../../components/Doughnut/Doughnut";

interface ScheduleUrl {
  match: {
    url: string;
    params: {
      id: string;
    };
  };
}

const doughnutChartData = (data: any) => ({
  datasets: [data],
});

const preliminarsOption = [
  {
    id: 0,
    title: "Demolición de muros",
    cost: 210000,
    avatar: personCircle,
    since: Date.parse("May 31, 2021"),
    to: Date.parse("June 1, 2021"),
  },
  {
    id: 1,
    title: "Demolición de enchape",
    cost: 190000,
    avatar: personCircle,
    since: Date.parse("May 31, 2021"),
    to: Date.parse("June 1, 2021"),
  },
  {
    id: 2,
    title: "Demolición de piso",
    cost: 210000,
    avatar: personCircle,
    since: Date.parse("May 31, 2021"),
    to: Date.parse("June 1, 2021"),
  },
  {
    id: 3,
    title: "Desmonte de ventanas",
    cost: 310000,
    avatar: personCircle,
    since: Date.parse("May 31, 2021"),
    to: Date.parse("June 1, 2021"),
  },
];

const ScheduleItemDetail: React.FC<ScheduleUrl> = ({ match }) => {
  return (
    <IonPage>
      <Header canBack href="/gestion/cronograma" />
      <IonContent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Cronograma</IonTitle>
        </IonToolbar>
        {match.params.id === "preliminares" && (
          <>
            <IonItem className="ion-text-center" lines="none">
              <IonLabel>Preliminares (2/6)</IonLabel>
            </IonItem>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="6" className=" ion-text-center">
                    <Doughnut
                      centerLegend={32 + "%"}
                      classStyle="doughnut_dashboard"
                      title="Presupuesto"
                      color="#ff8a80"
                      data={doughnutChartData({
                        backgroundColor: ["#ff8a80", "#F5F5F6"],
                        data: [65, 35],
                      })}
                    />
                    <IonLabel className="ion-text-wrap">
                      $368.000/ <strong>$1'150.000</strong>
                    </IonLabel>
                  </IonCol>
                  <IonCol size="6" className=" ion-text-center">
                    <Doughnut
                      centerLegend={33 + "%"}
                      classStyle="doughnut_dashboard"
                      title="Avance de Obra"
                      color="blue"
                      data={doughnutChartData({
                        backgroundColor: ["blue", "#F5F5F6"],
                        data: [65, 35],
                      })}
                    />
                    <IonLabel className="ion-text-wrap">
                      1 Dias(s)/ <strong>3 Días(s)</strong>
                    </IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            {preliminarsOption.map((option) => (
              <ActivitiesCard key={option.id} items={option} />
            ))}
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

interface activitiesCardProps {
  items: {
    id: number;
    title: string;
    cost: number;
    avatar: string;
    since: number;
    to: number;
  };
}

const ActivitiesCard: React.FC<activitiesCardProps> = ({ items }) => {
  const [item, setItem] = useState(items);
  const handleDissmis = () => {
    dismiss();
  };
  const changeDateHandler = (id: number, newDate: Array<any>) => {
    setItem({ ...item, since: newDate[0], to: newDate[1] });
  };
  const [present, dismiss] = useIonModal(ActivityDetail, {
    item,
    onDismiss: handleDissmis,
    onDateChange: changeDateHandler,
  });
  const dates = [new Date(item.since), new Date(item.to)];
  const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <IonCard onClick={() => present()}>
      <IonCardContent>
        <IonGrid slot="start">
          <IonRow>
            <IonCol size="9">
              <IonItem lines="none" className="ion-no-padding">
                <IonIcon icon={checkmarkCircleOutline} />
                <IonLabel className="ion-text-wrap ion-text-center">
                  {" "}
                  {item.title}
                </IonLabel>
              </IonItem>
              <IonItem lines="none" className="ion-no-padding">
                <IonIcon icon={calendarOutline} />
                <IonLabel className="ion-text-wrap">
                  Desde: ({days[dates[0].getDay()]}. {dates[0].getDate()} de{" "}
                  {months[dates[0].getMonth()]})
                </IonLabel>
              </IonItem>
              <IonItem lines="none" className="ion-no-padding">
                <IonIcon icon={calendar} />
                <IonLabel className="ion-text-wrap">
                  Hasta: ({days[dates[1].getDay()]}. {dates[1].getDate()} de{" "}
                  {months[dates[1].getMonth()]})
                </IonLabel>
              </IonItem>
            </IonCol>
            <IonCol size="3" className="ion-justify-content-center">
              <IonItem
                lines="none"
                className="ion-text-center Card-Icon__style"
              >
                <IonIcon
                  style={{ fontSize: "70px" }}
                  color="dark"
                  icon={personCircle}
                  className=""
                />
              </IonItem>

              <IonItem className="ion-no-padding Card-Cost__style" lines="none">
                <IonLabel className="ion-text-center ">${item.cost}</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

interface itemActivity {
  id: number;
  title: string;
  cost: number;
  avatar: string;
  since: number;
  to: number;
}

const ActivityDetail: React.FC<{
  item: itemActivity;
  onDismiss: () => void;
  onDateChange: (id: number, newDate: Array<number>) => void;
}> = ({ item, onDismiss, onDateChange }) => {
  const [sinceDate, setSinceDate] = useState("");
  const [untilDate, setUntilDate] = useState("");
  const changeSinceDate = (e: any) => {
    setSinceDate(e.detail.value!);
  };
  const changeUntilDate = (e: any) => {
    setUntilDate(e.detail.value!);
  };
  const closeHandler = () => {
    onDateChange(item.id, [Date.parse(sinceDate), Date.parse(untilDate)]);
    onDismiss();
  };
  return (
    <IonCard>
      <IonItem>
        <IonIcon slot="start" icon={checkmarkCircleOutline} />
        <IonLabel>{item.title}</IonLabel>
        <IonButton slot="end" fill="clear" color="dark" onClick={closeHandler}>
          <IonIcon slot="icon-only" icon={close} />
        </IonButton>
      </IonItem>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonIcon slot="start" icon={calendarOutline} />
            <IonLabel>Desde: </IonLabel>
            <IonInput
              type="date"
              value={sinceDate}
              onIonChange={changeSinceDate}
            />
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={calendar} />
            <IonLabel>Hasta: </IonLabel>
            <IonInput
              type="date"
              value={untilDate}
              onIonChange={changeUntilDate}
            />
          </IonItem>
          <IonItem disabled>
            <IonIcon slot="start" icon={personAdd} />
            <IonLabel>Asignar a: Personal contratado</IonLabel>
          </IonItem>
          <IonItem disabled>
            <IonIcon slot="start" icon={storefront} />
            <IonLabel>Almacen: Insumos, materiales y equipos</IonLabel>
          </IonItem>
          <IonItem disabled>
            <IonIcon slot="start" icon={card} />
            <IonLabel>presupuesto: ${item.cost}</IonLabel>
          </IonItem>
          <IonItem disabled>
            <IonIcon slot="start" icon={book} />
            <IonLabel>Cantidad: 43(m2)- Metro cuadrado</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default ScheduleItemDetail;

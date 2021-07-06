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
  useIonModal,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonButton,
  IonCardContent,
  IonDatetime,
  IonModal,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useEffect, useState } from "react";
import {
  alarmOutline,
  personCircle,
  checkmarkDoneCircle,
  people,
  list,
  duplicate,
  receipt,
  checkmarkCircleOutline,
  storefront,
  card,
  book,
  personAdd,
  calendar,
  calendarOutline,
  close,
  closeOutline,
} from "ionicons/icons";

import "./Schedule";
import Header from "../../../components/Header/Header";
import ProfiePic from "../../../assets/profile_pic_personal.jpg";

const activitiesMenu = [
  {
    title: "Para hoy",
    total: 9,
    icon: alarmOutline,
    linkTo: "hoy",
    items: [
      {
        id: 0,
        title: "ACTA DE INICIO",
        since: "Lun. 31 de May",
        to: "Lun. 31 de May",
        assigned: {
          profilePic: ProfiePic,
          name: "Hassam Escobar",
          profession: "Interventor",
        },
        checked: false
      },
    ],
  },
  {
    title: "Terminadas",
    total: 2,
    icon: checkmarkDoneCircle,
    linkTo: "terminadas",
  },
  { title: "Asignadas a", total: 3, icon: personCircle, linkTo: "asignadas" },
  {
    title: "Lista de actividades",
    total: 23,
    icon: receipt,
    linkTo: "actividades",
  },
];

const itemsListMenu = [
  { title: "Preliminares", total: "2/6" },
  { title: "Estructura", total: "1/4" },
  { title: "Mamposteria", total: "0/3" },
  { title: "Acabados", total: "0/4" },
  { title: "Pisos y enchapes", total: "0/6" },
  { title: "Carpinteria en madera", total: "0/7" },
  { title: "Carpinteria en metal", total: "0/6" },
  { title: "Instalaciones electricas", total: "0/5" },
  { title: "Instalaciones hidrosanitarias", total: "0/6" },
];

interface ItemsListProps {
  title: string;
  total: string;
}

interface ScheduleProps {
  match: {
    url: string;
  };
}

const Schedule: React.FC<ScheduleProps> = ({ match }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [itemsList, setItemsList] =
    useState<Array<ItemsListProps>>(itemsListMenu);
  const [showNewItem, setShowNewItem] = useState<boolean>(false);
  const [showDisabled, setShowDisabled] = useState(false);


  return (
    <IonPage>
      <Header canBack href="/gestion/dashboard" />
      <IonContent>
        <IonToolbar>
          <IonTitle className="ion-text-center">
            {match.url === "/gestion/cronograma-ejecucion"
              ? "Cronograma - ejecucion"
              : "Cronograma"}
          </IonTitle>
        </IonToolbar>
        <IonList>
          <IonItem lines="none">
            <IonSearchbar
              placeholder="Buscar actividad"
              animated
              value={searchValue}
              onIonChange={(e) => setSearchValue(e.detail.value!)}
            />
          </IonItem>
          {activitiesMenu.map((activity, index) => (
            <IonItem
              key={index}
              lines="none"
              button
            >
              <IonIcon slot="start" icon={activity.icon} color="dark" />
              <IonLabel>{activity.title}</IonLabel>
              <IonBadge mode="md" slot="end" color="dark">
                {activity.total}
              </IonBadge>
            </IonItem>
          ))}
          <IonItemDivider></IonItemDivider>
          <IonItem lines="none">
            <IonTitle>Lista de Items</IonTitle>
          </IonItem>
          {itemsList.map((item, index) => (
            <IonItem
              button
              key={index}
              lines="none"
              className="ion-text-wrap"
              routerLink={`${match.url}/${item.title.toLowerCase()}`}
            >
              <IonIcon slot="start" icon={list} />
              <IonLabel>{item.title}</IonLabel>
              <IonIcon icon={people} slot="end" />
              <IonNote slot="end">{item.total}</IonNote>
            </IonItem>
          ))}
          <IonItem
            button
            onClick={() => setShowNewItem(true)}
          >
            <IonIcon slot="start" icon={duplicate} />
            <IonLabel>Nuevo Item</IonLabel>
          </IonItem>
          {showNewItem && (
            <NewItemSchedule setShow={() => setShowNewItem(!showNewItem)} />
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

type NewItemScheduleProps = {
  setShow: () => void;
};

const NewItemSchedule = ({ setShow }: NewItemScheduleProps) => {
  const [selectedOption, setSelectedOption] = useState("volume");
  const [budget, setBudget] = useState<number>(0);
  return (
    <IonCard>
      <IonItem>
        <IonIcon slot="start" icon={checkmarkCircleOutline} />
        <IonInput placeholder="Ingrese nombre de actividad" required />
        <IonButton
          slot="end"
          fill="clear"
          color="dark"
          onClick={() => setShow()}
        >
          <IonIcon slot="icon-only" icon={closeOutline} />
        </IonButton>
      </IonItem>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonIcon slot="start" icon={calendarOutline} />
            <IonLabel>Desde: </IonLabel>
            <IonDatetime
              displayFormat="YYYY-MM-DD"
              displayTimezone="America/Bogota"
              placeholder="Ingrese Fecha"
            />
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={calendar} />
            <IonLabel>Hasta: </IonLabel>
            {/*<IonInput
              type="date"
            /> */}
            <IonDatetime
              displayFormat="YYYY-MM-DD"
              displayTimezone="America/Bogota"
              placeholder="Ingrese Fecha"
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
          <IonItem>
            <IonIcon slot="start" icon={card} />
            <IonLabel>presupuesto: </IonLabel>
            <IonInput
              type="number"
              placeholder="Ingrese presupuesto"
              value={budget}
              onIonChange={(e) => setBudget(parseInt(e.detail.value!))}
            />
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={book} />
            <IonLabel>Cantidad: </IonLabel>
            <IonInput type="number" />
            <IonSelect
              value={selectedOption}
              onIonChange={(e) => setSelectedOption(e.detail.value!)}
            >
              <IonSelectOption value="distance">Distancia</IonSelectOption>
              <IonSelectOption value="area">Área</IonSelectOption>
              <IonSelectOption value="volume">Volumen</IonSelectOption>
              <IonSelectOption value="unit">Unidad</IonSelectOption>
              <IonSelectOption value="global">Global</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default Schedule;

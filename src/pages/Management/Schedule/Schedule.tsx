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
} from "@ionic/react";
import {useState} from "react";
import { alarmOutline, personCircle, checkmarkDoneCircle, listCircle, people, list, duplicate, receipt } from "ionicons/icons";

import "./Schedule";
import Header from "../../../components/Header/Header";


const activitiesMenu = [
  { title: "Para hoy", total: 9, icon: alarmOutline },
  { title: "Terminadas", total: 2, icon: checkmarkDoneCircle },
  { title: "Asignadas a", total: 3, icon: personCircle },
  { title: "Lista de actividades", total: 23, icon: receipt },
]

const itemsListMenu = [
  { title: "Preliminares", total: "2/6"},
  { title: "Estructura", total: "1/4"},
  { title: "Mamposteria", total: "0/3"},
  { title: "Acabados", total: "0/4" },
  { title: "Pisos y enchapes", total: "0/6" },
  { title: "Carpinteria en madera", total: "0/7" },
  { title: "Carpinteria en metal", total: "0/6" },
  { title: "Instalaciones electricas", total: "0/5" },
  { title: "Instalaciones hidrosanitarias", total: "0/6" },
]

interface ItemsListProps{
  title: string;
  total: string;
}

interface ScheduleProps{
  match: {
    url: string;
  }
}

const Schedule: React.FC<ScheduleProps> = ({ match }) => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [itemsList, setItemsList] = useState<Array<ItemsListProps>>(itemsListMenu)
  return (
    <IonPage>
      <Header canBack href="/gestion/dashboard" />
      <IonContent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Cronograma</IonTitle>
        </IonToolbar>
        <IonList>
          <IonItem lines="none">
            <IonSearchbar placeholder="Buscar actividad" animated value={searchValue}  onIonChange={(e) => setSearchValue(e.detail.value!)} />
          </IonItem>
          {activitiesMenu.map((activity, index)=> (
            <IonItem key={index} lines="none" button>
              <IonIcon slot="start"  icon={activity.icon}  color="dark"/>
              <IonLabel>{activity.title}</IonLabel>
              <IonBadge mode="md" slot="end" color="dark">{activity.total}</IonBadge>
            </IonItem>
          ))}
          <IonItemDivider></IonItemDivider>
          <IonItem lines="none">
            <IonTitle>Lista de Items</IonTitle>
          </IonItem>
          {itemsList.map((item, index) => (
            <IonItem button key={index} lines="none" className="ion-text-wrap" routerLink={`${match.url}/${item.title.toLowerCase()}`}>
              <IonIcon slot="start" icon={list} />
              <IonLabel>{item.title}</IonLabel>
              <IonIcon icon={people} slot="end"/>
              <IonNote slot="end">{item.total}</IonNote>
            </IonItem>
          ))}
          <IonItem>
            <IonIcon slot="start" icon={duplicate}/>
            <IonLabel>Nuevo Item</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Schedule;

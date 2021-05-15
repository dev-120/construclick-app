import React, { useState } from "react";
import {
  IonImg,
  IonPage,
  IonIcon,
  IonButton,
  IonContent,
  IonToolbar,
  IonSegment,
  IonFab,
  IonFabButton,
  IonFabList,
  IonSegmentButton,
  IonSelect,
  IonLabel,
  IonItem,
  useIonModal,
  IonSelectOption,
  IonTitle,
} from "@ionic/react";
import { locationOutline } from 'ionicons/icons';

import './MarketPlace.css';
import Header from '../../components/Header/Header';

const cities = [
  "Santa Marta",
  "Barranquilla",
  "Medellin"
];

const categories = [
  'Todo',
  'Herramientas',
  'Pinturas',
  'Electricidad',
  'Plomeria',
  'Jardineria',
  'Maquinaria'
]

type PropsSelectCity = {
  onChange: Function;
};

const SelectCity : React.FC<PropsSelectCity> = ({ onChange }) => (
  <IonContent>
    <IonToolbar>
      <IonTitle>
        Selecciona una ciudad
      </IonTitle>
    </IonToolbar>
    {cities.map((opt) => (
      <IonItem button onClick={() => {onChange(opt)}} >
        {opt}
      </IonItem>
    ))}
  </IonContent>
);

const Category : React.FC<{ name: string}> = ({ name }) => (
  <div className="category_opt" >
    <IonButton className="container_icon_button_category_opt" >
      <IonIcon className="icon_button_category_opt" icon={locationOutline} />
    </IonButton>
    <span>{name}</span>
  </div>
)

const SelectCategory = () => (
  <div className="list_Categories">
    {categories.map(cat => <Category name={cat} />)}
  </div>
)

const MarketPlacePage = () => {
  const [city, setCity] = useState(cities[0]);
  const [openCityFilter, closeCityFilter] = useIonModal(SelectCity, {
    onChange: (v: string) => {
      setCity(v);
      closeCityFilter();
    }
  });

  return (
    <IonPage>
      <Header canBack={false} title="MarketPlace" />
      <IonContent>
        <IonItem onClick={() => openCityFilter()} button lines="none" >
          <IonIcon icon={locationOutline} slot="start" />
          <IonLabel>
            {city}
          </IonLabel>
        </IonItem>
        <SelectCategory />
      </IonContent>
    </IonPage>
  );
};

export default MarketPlacePage;

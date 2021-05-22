import React, { useEffect, useState } from "react";
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
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonBadge,
  IonText,
  IonButtons,
} from "@ionic/react";
import { locationOutline, chevronForwardOutline } from "ionicons/icons";
import { useHistory } from 'react-router-dom'

import "./MarketPlace.css";
import Header from "../../components/Header/Header";
import exampleItems from "./utils"



const cities = ["Santa Marta", "Barranquilla", "Medellin"];

const categories = [
  "Todo",
  "Herramientas",
  "Pinturas",
  "Electricidad",
  "Plomeria",
  "Jardineria",
  "Maquinaria",
];
type imageItem = {
  productId: number | undefined;
  img: string;
  productTitle: string;
  productPrice: number;
  discount: number;
};

type PropsSelectCity = {
  onChange: Function;
};

interface sectionBuilder {
  sectionName: string;
}

const SectionsBuilder: React.FC<sectionBuilder> = ({ sectionName }) => {
  const [section, setSections] = useState([...exampleItems]);
  return (
    <>
      <IonButton expand="full" fill="clear">
        <IonText>{sectionName}</IonText>
        <IonIcon icon={chevronForwardOutline} slot="end" />
      </IonButton>

      <ProductList items={section} />
    </>
  );
};

const ProductCard: React.FC<imageItem> = ({
  productId,
  img,
  productTitle,
  productPrice,
  discount,
}) => {

  const history = useHistory()

  const clickHandler = () =>{
    history.push(`/marketplace/${productId}`)
  }

  return (
    <div className="product_item">
      <IonCard mode="md" button={true} onClick={clickHandler}>
        <IonCardHeader>
          <IonImg src={img[0]} />
          <IonCardSubtitle>Herramientas</IonCardSubtitle>
          <IonCardTitle>{productTitle}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonItem lines="none">
            <IonText>${productPrice}</IonText>
            <IonBadge color="primary" slot="end">
              {discount}%
            </IonBadge>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

interface productList {
  items: Array<any>;
}

const ProductList: React.FC<productList> = ({ items }) => {
  return (
    <div className="list_Products">
      {items.map(
        (
          item: {
            productId: number | undefined;
            img: string;
            productTitle: string;
            productPrice: number;
            discount: number;
          },
          index: React.Key | null | undefined
        ) => (
          <ProductCard
            key={item.productId}
            productId={item.productId}
            img={item.img}
            productTitle={item.productTitle}
            productPrice={item.productPrice}
            discount={item.discount}
          />
        )
      )}
    </div>
  );
};

const SelectCity: React.FC<PropsSelectCity> = ({ onChange }) => (
  <IonContent>
    <IonToolbar>
      <IonTitle>Selecciona una ciudad</IonTitle>
    </IonToolbar>
    {cities.map((opt) => (
      <IonItem
        button
        onClick={() => {
          onChange(opt);
        }}
      >
        {opt}
      </IonItem>
    ))}
  </IonContent>
);

const Category: React.FC<{ name: string }> = ({ name }) => (
  <div className="category_opt">
    <IonButton className="container_icon_button_category_opt">
      <IonIcon className="icon_button_category_opt" icon={locationOutline} />
    </IonButton>
    <span>{name}</span>
  </div>
);

const SelectCategory = () => (
  <div className="list_Categories">
    {categories.map((cat) => (
      <Category name={cat} />
    ))}
  </div>
);

const MarketPlacePage = () => {
  const [city, setCity] = useState(cities[0]);
  const [openCityFilter, closeCityFilter] = useIonModal(SelectCity, {
    onChange: (v: string) => {
      setCity(v);
      closeCityFilter();
    },
  });

  return (
    <IonPage>
      <Header canBack={false} title="MarketPlace" />
      <IonContent>
        <IonItem onClick={() => openCityFilter()} button lines="none">
          <IonIcon icon={locationOutline} slot="start" />
          <IonLabel>{city}</IonLabel>
        </IonItem>
        <SelectCategory />
        <SectionsBuilder sectionName="Más Vendidos" />
        <SectionsBuilder sectionName="Recomendados" />
        <SectionsBuilder sectionName="Más Vistos" />
        <SectionsBuilder sectionName="Oferta" />
      </IonContent>
    </IonPage>
  );
};

export default MarketPlacePage;

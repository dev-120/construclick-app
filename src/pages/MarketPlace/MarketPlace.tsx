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

import "./MarketPlace.css";
import Header from "../../components/Header/Header";

import tool1 from "./testImages/tool1.jpg";
import tool2 from "./testImages/tool2.jpg";

const exampleItems = [
  {
    productId: 0,
    img: tool2,
    productTitle: "Tabla de Cortar",
    productPrice: 40000,
    discount: 5,
  },
  {
    productId: 1,
    img: tool1,
    productTitle: "Espatula",
    productPrice: 28000,
    discount: 10,
  },
  {
    productId: 2,
    img: tool2,
    productTitle: "Tabla de Cortar",
    productPrice: 40000,
    discount: 5,
  },
  {
    productId: 3,
    img: tool1,
    productTitle: "Espatula",
    productPrice: 28000,
    discount: 10,
  },
  {
    productId: 4,
    img: tool2,
    productTitle: "Tabla de Cortar",
    productPrice: 40000,
    discount: 5,
  },
  {
    productId: 5,
    img: tool1,
    productTitle: "Espatula",
    productPrice: 28000,
    discount: 10,
  },
];

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
  return (
    <div className="product_item">
      <IonCard mode="md">
        <IonCardHeader>
          <IonImg src={img} />
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

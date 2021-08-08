import React, { useState } from "react";
import {
  IonImg,
  IonPage,
  IonIcon,
  IonButton,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonBadge,
  IonText,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { chevronForwardOutline } from "ionicons/icons";

import "./MarketPlace.css";
import itemsExample from './utils';
import Header from "../../components/Header/Header";
import Section from '../../components/SectionProducts/SectionProducts';

const categories = [
  "Todo",
  "Herramientas",
  "Pinturas",
  "Electricidad",
  "Plomeria",
  "Jardineria",
  "Maquinaria",
];

const SelectCategory = () => (
  <IonSegment className="select_category_mk" scrollable value={categories[0]} >
    {categories.map((cat) => (
      <IonSegmentButton value={cat} >
        <IonLabel>{cat}</IonLabel>
      </IonSegmentButton>
    ))}
  </IonSegment>
);

const MarketPlacePage = () => {
  return (
    <IonPage>
      <Header canBack={false} title="MarketPlace" />
      <IonContent className="container_mk" >
        <SelectCategory />
        <IonImg src="https://www.homecenter.com.co/static/landing/catalogos/img/2019/marzo/tiendas/banner-tiendas-mb.jpg?tmp=19" />
        <Section items={itemsExample} sectionName="Más Vendidos" />
        <Section items={itemsExample} sectionName="Recomendados" />
        <Section items={itemsExample} sectionName="Más Vistos" />
        <Section items={itemsExample} sectionName="Oferta" />
      </IonContent>
    </IonPage>
  );
};

export default MarketPlacePage;

import React, { useState } from "react";
import {
  IonImg,
  IonPage,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";

import "./MarketPlace.css";
import itemsExample from './utils';
import useCommons from "../../hooks/useCommons";
import { Category } from '../../types/marketplace';
import Header from "../../components/Header/Header";
import Section from '../../components/SectionProducts/SectionProducts';

const MarketPlacePage = () => {
  const [ categorySelected, setCategorySelected ] = useState<null | Category>(null);
  const { categories } = useCommons();

  const SelectCategory = () => (
    <IonSegment mode="md" className="select_category_mk" scrollable value={categorySelected?.name || 'todo'} >
      <IonSegmentButton onClick={() => setCategorySelected(null)} value='todo'>
          <IonLabel>Todo</IonLabel>
        </IonSegmentButton>
      {categories.map((cat) => (
        <IonSegmentButton onClick={() => setCategorySelected(cat)} value={cat.name} >
          <IonLabel>{cat.name}</IonLabel>
        </IonSegmentButton>
      ))}
    </IonSegment>
  );

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

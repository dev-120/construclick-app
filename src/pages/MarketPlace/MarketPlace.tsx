import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";

import "./MarketPlace.css";
import useCommons from "../../hooks/useCommons";
import { Category } from "../../types/marketplace";
import Header from "../../components/Header/Header";
import Section from "../../components/SectionProducts/SectionProducts";
import useMarketplace from "../../hooks/useMarketplace";

const MarketPlacePage = () => {
  const [categorySelected, setCategorySelected] = useState<null | Category>(
    null
  );
  const { categories } = useCommons();
  const { grills, } = useMarketplace();

  useEffect(() => {
    console.log(grills);
  }, [grills]);

  const SelectCategory = () => (
    <IonSegment
      mode="md"
      className="select_category_mk"
      scrollable
      value={categorySelected?.name || "todo"}
    >
      <IonSegmentButton onClick={() => setCategorySelected(null)} value="todo">
        <IonLabel>Todo</IonLabel>
      </IonSegmentButton>
      {categories.map((cat) => (
        <IonSegmentButton
          key={cat.name}
          onClick={() => setCategorySelected(cat)}
          value={cat.name}
        >
          <IonLabel>{cat.name}</IonLabel>
        </IonSegmentButton>
      ))}
    </IonSegment>
  );

  return (
    <IonPage>
      <Header canBack={false} title="MarketPlace" />
      <IonContent className="container_mk">
        <SelectCategory />
        {grills.map(({ name, products }) => (
          <Section key={name} items={products} sectionName={name} />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default MarketPlacePage;

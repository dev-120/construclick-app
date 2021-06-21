import React, { useState } from "react";
import {
  IonImg,
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

import './SectionProducts.css';

type imageItem = {
  productId: number | undefined;
  img: string;
  productTitle: string;
  productPrice: number;
  discount: number;
};

interface sectionBuilder {
  sectionName: string;
  items: any;
};

interface productList {
  items: Array<any>;
};

const ProductCard: React.FC<imageItem> = ({
  productId,
  img,
  productTitle,
  productPrice,
  discount,
}) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/marketplace/${productId}`);
  };

  return (
    <div className="product_item">
      <IonCard mode="md" button={true} onClick={clickHandler}>
        <IonCardHeader>
          <IonImg src={img[0]} />
          <IonCardSubtitle>HomeCenter</IonCardSubtitle>
          <IonCardTitle>${productPrice}</IonCardTitle>
        </IonCardHeader>
        <div className="conten_card_product" >
          <span className="title_product" >{productTitle}</span>
          <span className="discount_product" >{discount}%</span>
        </div>
      </IonCard>
    </div>
  );
};

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

const SectionsBuilder: React.FC<sectionBuilder> = ({ sectionName, items }) => {
  const [section, setSections] = useState([...items]);
  return (
    <div className="section_mk_products">
      <IonText>{sectionName}</IonText>
      <ProductList items={section} />
    </div>
  );
};


export default SectionsBuilder;

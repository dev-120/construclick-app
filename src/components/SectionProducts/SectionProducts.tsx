import React, { useState } from "react";
import {
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonText,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

import './SectionProducts.css';

type imageItem = {
  productId: number | undefined;
  img: string;
  productTitle: string;
  productPrice: number;
  discount: number | undefined;
  userName: string;
};

type productData = {
  _id: number | undefined;
  image_url: string;
  title: string;
  price: number;
  discount: number | undefined;
  userName: string;
}

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
  userName,
}) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/marketplace/${productId}`);
  };

  return (
    <div className="product_item">
      <IonCard mode="md" button={true} onClick={clickHandler}>
        <IonCardHeader>
          <IonImg src={img} />
          <IonCardSubtitle>{userName}</IonCardSubtitle>
          <IonCardTitle>${productPrice}</IonCardTitle>
        </IonCardHeader>
        <div className="conten_card_product" >
          <span className="title_product"  >{productTitle}</span>
          <span className="discount_product" >{discount && `${discount}%`}</span>
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
          item: productData,
          index: React.Key | null | undefined
        ) => (
          <ProductCard
            key={item._id}
            productId={item._id}
            img={item.image_url}
            productTitle={item.title}
            productPrice={item.price}
            discount={item.discount}
            userName={item.userName}
          />
        )
      )}
    </div>
  );
};

const SectionsBuilder: React.FC<sectionBuilder> = ({ sectionName, items }) => {
  const [section] = useState([...items]);
  return (
    <div className="section_mk_products">
      <IonText>{sectionName}</IonText>
      <ProductList items={section} />
    </div>
  );
};


export default SectionsBuilder;

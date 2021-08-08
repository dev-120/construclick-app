import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonText,
  IonAvatar,
  IonThumbnail,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import CementArgos from "../../assets/cement_image.jpg";
import MasticImg from "../../assets/masilla_img.jpg";
import StuccoImage from "../../assets/stucco_img.jpg";

import "./Purchases.css";

type ProductPurchase = {
  type: string;
  productId: string;
  seller: string;
  img: string;
  productTitle: string;
  productPrice: number;
  discount: number;
  cuantity: number;
  color: string;
  selectedCuantity: number;
  delivered?: string;
};

const mockupPurchases: ProductPurchase[] = [
  {
    type: "shipping",
    productId: "HTBFN",
    seller: "Ferreteria Santa Marta",
    img: MasticImg,
    productTitle: "Masilla 1g 5.6k",
    productPrice: 15400,
    discount: 8,
    cuantity: 5,
    color: "Cafe",
    selectedCuantity: 1,
    delivered: "Llega el 14 de Julio",
  },
  {
    type: "delivered",
    productId: "OB8NE",
    seller: "Ferreteria Santa Marta",
    img: StuccoImage,
    productTitle: "Estucor estuco 5 kilos",
    productPrice: 7900,
    discount: 15,
    cuantity: 10,
    color: "Blanco",
    selectedCuantity: 1,
    delivered: "Llegó el 14 de Julio",
  },
  {
    type: "delivered",
    productId: "LC93F",
    seller: "Ferreteria Santa Marta",
    img: CementArgos,
    productTitle: "Cemento Argos Gris 50kg",
    productPrice: 25900,
    discount: 5,
    cuantity: 5,
    color: "Gris",
    selectedCuantity: 1,
    delivered: "Llegó el 14 de Julio",
  },
];

const Purchases: React.FC = () => {
  const [items, setItems] = useState<Array<ProductPurchase>>([]);

  useEffect(() => {
    setItems(mockupPurchases);
  }, []);

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Mis compras</IonTitle>
        </IonToolbar>
        <IonList>
          {items.map((product: ProductPurchase) => (
            <Link
              style={{ textDecoration: "none" }}
              key={product.productId}
              to={{
                pathname: `purchases/${product.productId}/detail`,
                state: { item: product }
              }}
            >
              <IonItem
                button
                lines="full"
                className=" Purchases-item__style"
              >
                <IonThumbnail slot="start">
                  <img src={product.img} />
                </IonThumbnail>
                {product.type === "delivered" && (
                  <IonLabel color="medium">
                    Entregado
                    <br />
                    <IonText color="dark">{product.delivered}</IonText>
                  </IonLabel>
                )}
                {product.type === "shipping" && (
                  <IonLabel color="success">
                    En camino
                    <br />
                    <IonText color="dark">{product.delivered}</IonText>
                  </IonLabel>
                )}
              </IonItem>
            </Link>
          ))}
          {items.length === 0 && (
            <IonItem lines="full">No has hecho ninguna compra.</IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Purchases;

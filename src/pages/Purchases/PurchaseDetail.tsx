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
  IonIcon,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import Steps from "rc-steps";
import "../../../node_modules/rc-steps/assets/index.css";

import "./Purchases.css";
import Header from "../../components/Header/Header";
import {
  arrowForward,
  checkmark,
  checkmarkCircleOutline,
  checkmarkOutline,
  chevronForward,
  closeCircleOutline,
} from "ionicons/icons";
import CementArgos from "../../assets/cement_image.jpg";
import MasticImg from "../../assets/masilla_img.jpg";
import StuccoImage from "../../assets/stucco_img.jpg";

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

type matchProps = {
  location: any;
  match: {
    params: {
      id: string;
    };
  };
};

const PurchaseDetail = ({ location, match }: matchProps) => {
  const [currentItem, setCurrentItem] = useState<ProductPurchase | null>();

  useEffect(() => {
    if (location.state !== null) {
      setCurrentItem(location?.state?.item);
    }
    
    let item: any = mockupPurchases.filter(
      (purchase) => purchase.productId === match?.params.id
    );
    setCurrentItem(item[0]);
  }, [match]);

  return (
    <IonPage>
      <Header canBack href="/purchases" />
      <IonContent>
        {currentItem && (
          <div className="PurchaseDetail-Item__style">
            <IonAvatar>
              <img src={currentItem.img} />
            </IonAvatar>
            <IonText
              className="ion-margin-top"
              style={{ fontSize: "13px" }}
              color={currentItem.type === "delivered" ? "medium" : "success"}
            >
              {currentItem.type === "delivered" ? "Entregado" : "En camino"}
            </IonText>
            <IonText style={{ fontSize: "18px" }}>
              {currentItem.productTitle}
            </IonText>
            <IonText style={{ fontSize: "14px" }} color="medium">
              Color: {currentItem.color}
            </IonText>
            <IonText style={{ fontSize: "14px" }} color="medium">
              $ {currentItem.productPrice * (1 - currentItem.discount / 100)} x{" "}
              {currentItem.selectedCuantity} unidad(es)
            </IonText>
          </div>
        )}
        {currentItem?.type === "shipping" && (
          <div className="PurchaseDetail-Item__style">
            <Steps
              size="small"
              initial={0}
              current={1}
              labelPlacement="vertical"
              icons={{
                finish: (
                  <IonIcon
                    style={{ fontSize: "10px" }}
                    icon={checkmarkOutline}
                  />
                ),
                error: <IonIcon icon={closeCircleOutline} />,
              }}
            >
              <Steps.Step title="Preparación" />
              <Steps.Step title="En camino" />
              <Steps.Step status="wait" title="Entrega" />
            </Steps>
          </div>
        )}
        <IonList className="ion-margin-top">
          <IonItem lines="full" className="PurchaseDetail-buttons__style">
            <IonLabel>Vendedor</IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonAvatar slot="start" className="PurchaseDetail-avatar__style">
              FS
            </IonAvatar>
            <IonLabel>{currentItem?.seller}</IonLabel>
          </IonItem>
          <IonItem
            button
            lines="full"
            className="PurchaseDetail-buttons__style"
            routerLink={`/marketplace/${currentItem?.productId}`}
          >
            <IonLabel>Volver a comprar</IonLabel>
            <IonIcon icon={chevronForward} />
          </IonItem>
          <IonItem
            button
            lines="full"
            className="PurchaseDetail-buttons__style"
          >
            <IonLabel>Detalle de la compra</IonLabel>
            <IonIcon icon={chevronForward} />
          </IonItem>
          <IonItem
            button
            lines="full"
            className="PurchaseDetail-buttons__style"
          >
            <IonLabel>Necesito ayuda</IonLabel>
            <IonIcon icon={chevronForward} />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PurchaseDetail;

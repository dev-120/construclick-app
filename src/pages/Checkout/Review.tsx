import {
  IonPage,
  IonContent,
  IonItem,
  IonToolbar,
  IonTitle,
  IonFooter,
  IonLabel,
  IonText,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonButton,
  IonRouterLink,
  IonListHeader,
  IonIcon,
  IonAvatar,
  useIonModal,
  IonInput,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonItemDivider,
} from "@ionic/react";
import { RouteComponentProps, Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header/Header";
import {
  airplaneOutline,
  card,
  cardOutline,
  receiptOutline,
} from "ionicons/icons";
import PseIcon from "../../assets/pse-forma.png";

import "./Checkout.css";

type CheckoutProps = {
  location: {
    state: any;
  };
  match: {
    url: string;
  };
};

type Address = {
  state: string;
  city: string;
  zipCode: number;
  street: string;
  numberHouse1: string;
  numberHouse2: string;
  country: string;
  firstAndLastname: string;
};

type ProductList = {
  color: string;
  cuantity: number;
  discount: number;
  img: string;
  productId: string;
  productTitle: string;
  selectedCuantity: number;
};

const Review: React.FC<RouteComponentProps> = ({
  location,
  match,
}: CheckoutProps) => {
  const [products] = useState<Array<ProductList>>(
    location?.state?.productsList || []
  );
  const [totalPrice, setTotalPrice] = useState(location?.state?.totalP || 0);
  const [currentCard, setCurrentCard] = useState(
    location?.state?.selectedCard || {}
  );
  const [currentAddress, setCurrentAddress] = useState<Address>(
    location?.state?.address || {}
  );
  return (
    <IonPage>
      <Header canBack href="/shopping-cart/checkout/payments" />
      <IonContent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Confirma tu compra</IonTitle>
        </IonToolbar>
        <IonList>
          <IonItem lines="none">
            <IonLabel slot="start">Producto</IonLabel>
            <IonText slot="end">$ {totalPrice}</IonText>
          </IonItem>
          <IonItem lines="none">
            <IonLabel slot="start">Envío</IonLabel>
            <IonText slot="end" color="success">
              $ 10000
            </IonText>
          </IonItem>
          <hr
            className="ion-margin-horizontal"
            style={{ backgroundColor: "black", height: "5" }}
          />
          <IonItem lines="none">
            <IonLabel slot="start">Pagas</IonLabel>
            <IonText slot="end">
              <strong>$ {totalPrice + 10000}</strong>
            </IonText>
          </IonItem>
          <IonButton expand="full" className="ion-margin-vertical">
            Confirmar compra
          </IonButton>
        </IonList>
        <IonList>
          {products.map(
            ({ productId, img, productTitle, selectedCuantity }) => (
              <div
                key={productId}
                className="CheckoutReview-product__style ion-margin"
              >
                <IonAvatar>
                  <img src={img} style={{ borderRadius: "50%" }} />
                </IonAvatar>
                <IonText>{productTitle}</IonText>
                <IonLabel style={{ fontSize: "12px" }} color="dark">
                  Cantidad: {selectedCuantity}
                </IonLabel>
              </div>
            )
          )}
        </IonList>
        <hr
          style={{ backgroundColor: "rgba(210, 215, 211, 1)", height: "5" }}
        />
        <IonList>
          <div className="CheckoutReview-product__style ion-margin">
            <IonAvatar className="PaymentsCheckout-avatar__style">
              <IonIcon icon={airplaneOutline} style={{ fontSize: "30px" }} />
            </IonAvatar>
            <IonText className="ion-margin-top">
              {currentAddress.street} # {currentAddress.numberHouse1} -{" "}
              {currentAddress.numberHouse2}
            </IonText>
            <IonLabel style={{ fontSize: "12px" }} color="medium">
              {currentAddress.city}, {currentAddress.state}
            </IonLabel>
            <IonLabel style={{ fontSize: "12px" }} color="medium">
              {currentAddress.firstAndLastname}
            </IonLabel>

            <IonText className="ion-margin-top">
              Llega el viernes 16 de julio.
            </IonText>
            <IonLabel style={{ fontSize: "12px" }} color="medium">
              La fecha de entrega es un calculo estimado.
            </IonLabel>
          </div>
        </IonList>
        <hr
          style={{ backgroundColor: "rgba(210, 215, 211, 1)", height: "5" }}
        />
        <IonList>
          <div className="CheckoutReview-product__style ion-margin">
            {location?.state?.option === "PSE" && (
              <>
                <IonAvatar className="PaymentsCheckout-avatar__style">
                  <img src={PseIcon} />
                </IonAvatar>
                <IonText className="ion-margin-top">PSE</IonText>
                <IonLabel style={{ fontSize: "12px" }}>Pagas ${totalPrice + 10000}</IonLabel>
              </>
            )}
            {location?.state?.option === "CARD" && (
              <>
                <IonAvatar className="PaymentsCheckout-avatar__style">
                  <IonIcon icon={cardOutline} style={{ fontSize: "30px" }} />
                </IonAvatar>
                <IonText className="ion-margin-top">Tarjeta {currentCard.cardNumber.replace(/\d{12,12}/g, "**** ")}</IonText>
                <IonLabel style={{ fontSize: "12px" }}>Pagas ${totalPrice + 10000}</IonLabel>
              </>
            )}
          </div>
        </IonList>
        <hr
          style={{ backgroundColor: "rgba(210, 215, 211, 1)", height: "5" }}
        />
        <IonList>
          <div className="CheckoutReview-product__style ion-margin">
            <IonAvatar className="PaymentsCheckout-avatar__style">
              <IonIcon icon={receiptOutline} style={{ fontSize: "30px" }} />
            </IonAvatar>
            <IonText className="ion-margin-top">Datos para tu factura</IonText>
            <IonLabel color="medium" style={{ fontSize: "12px" }}>{currentAddress.firstAndLastname} - {currentCard.idType} {currentCard.idNumber}</IonLabel>
          </div>
        </IonList>
        <hr
          style={{ backgroundColor: "rgba(210, 215, 211, 1)", height: "5" }}
        />
        <IonButton className="ion-margin" expand="full">Confirmar compra</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Review;

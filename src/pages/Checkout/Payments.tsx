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
  IonButton,
  IonListHeader,
  IonIcon,
  IonAvatar,
  useIonModal,
  IonInput,
  IonDatetime,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { RouteComponentProps, Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header/Header";
import { cardOutline } from "ionicons/icons";
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

const Payments: React.FC<RouteComponentProps> = ({
  location,
  match,
}: CheckoutProps) => {
  const [products] = useState(location?.state?.productsList || []);
  const [totalPrice, setTotalPrice] = useState(
    location?.state?.total|| 0
  );
  const [savedCards, setSavedCards] = useState<Array<any>>([]);

  const handleDismiss = () => {
    dismiss();
  };

  const getNewCard = (data: any) => {
    setSavedCards((cards) => [...cards, data]);
  };

  const [present, dismiss] = useIonModal(SaveCreditCard, {
    onDismiss: handleDismiss,
    onSave: getNewCard,
  });
  return (
    <IonPage>
      <Header canBack href="/shopping-cart" />
      <IonContent>
        <IonToolbar>
          <IonTitle className="ion-text-center">¿Cómo quieres pagar?</IonTitle>
        </IonToolbar>
        <IonList>
          <IonListHeader>
            <strong>Con tarjeta</strong>
          </IonListHeader>
          {savedCards &&
            savedCards.map((card: any) => (
              <Link
                key={card.cardNumber}
                style={{ textDecoration: "none" }}
                to={{
                  pathname: "review",
                  state: {
                    selectedCard: card,
                    totalP: totalPrice,
                    productsList: products,
                    option: "CARD",
                    address: location?.state?.address
                  },
                }}
              >
                <IonItem button className="ion-margin-horizontal">
                  <IonAvatar
                    slot="start"
                    className="PaymentsCheckout-avatar__style"
                  >
                    <IonIcon icon={cardOutline} color="dark" />
                  </IonAvatar>

                  <IonLabel>
                    {card.cardNumber.replace(/\d{12,12}/g, "**** ")}
                  </IonLabel>
                </IonItem>
              </Link>
            ))}
          <IonItem
            button
            className="ion-margin-horizontal"
            onClick={() => present()}
          >
            <IonAvatar slot="start" className="PaymentsCheckout-avatar__style">
              <IonIcon icon={cardOutline} color="dark" />
            </IonAvatar>

            <IonLabel>Nueva tarjeta de crédito</IonLabel>
          </IonItem>
        </IonList>
        <IonList>
          <IonListHeader>
            <strong>Con otras formas de pago</strong>
          </IonListHeader>
          <Link 
          style={{ textDecoration: "none" }}
          to={{
            pathname: "review",
            state: { selectedCard: { idType: "CC", idNumber: "22268716" }, totalP: totalPrice, productsList: products, option: "PSE", address: location?.state?.address  }
          }}>
            <IonItem button className="ion-margin-horizontal">
              <IonAvatar
                slot="start"
                className="PaymentsCheckout-avatar__style"
              >
                <img src={PseIcon} />
              </IonAvatar>

              <IonLabel>PSE</IonLabel>
            </IonItem>
          </Link>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonItem lines="none">
            <IonLabel slot="start">Pagas</IonLabel>
            <IonText slot="end">
              <strong>$ {totalPrice + 10000}</strong>
            </IonText>
          </IonItem>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

type ShowCreditCardModal = {
  onDismiss: () => void;
  onSave: (data: any) => void;
};

const SaveCreditCard = ({ onDismiss, onSave }: ShowCreditCardModal) => {
  const [cardNumber, setCardNumber] = useState<string>();
  const [expireDate, setExpireDate] = useState<string>();
  const [idType, setIdType] = useState<string>("CC");
  const [ID, setID] = useState<string>();
  const [cvv, setCvv] = useState<string>();
  const [name, setName] = useState<string>();

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (cardNumber && expireDate && idType && ID && cvv) {
      onSave({
        cardNumber,
        expireDate,
        idType,
        idNumber: ID,
        cvv,
        firstAndLastname: name
      });
      onDismiss();
    }
  };

  return (
    <IonContent>
      <form onSubmit={submitHandler}>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Numero de la tarjeta</IonLabel>
            <IonInput
              value={cardNumber}
              onIonChange={(e) => setCardNumber(e.detail.value!)}
              type="text"
              min="16"
              max="16"
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Fecha de vencimiento</IonLabel>
            <IonDatetime
              placeholder="MM/AA"
              value={expireDate}
              doneText="Listo"
              cancelText="Cancelar"
              pickerFormat="MM/YY"
              displayFormat="MM/YY"
              onIonChange={(e) => setExpireDate(e.detail.value!)}
              min="2021"
              max="2030"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Codigo de seguridad</IonLabel>
            <IonInput
              value={cvv}
              onIonChange={(e) => setCvv(e.detail.value!)}
              type="text"
              min="3"
              max="3"
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Tipo de identificación</IonLabel>
            <IonSelect
              value={idType}
              onIonChange={(e) => setIdType(e.detail.value!)}
            >
              <IonSelectOption value="CC">CC</IonSelectOption>
              <IonSelectOption value="CE">CE</IonSelectOption>
              <IonSelectOption value="NIT">NIT</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Número de identificación</IonLabel>
            <IonInput
              value={ID}
              type="text"
              onIonChange={(e) => setID(e.detail.value!)}
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Nombre y Apellidos</IonLabel>
            <IonInput
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
              type="text"
              required
            />
          </IonItem>
        </IonList>
        <IonButton type="submit" expand="full">
          Agregar
        </IonButton>
      </form>
    </IonContent>
  );
};

export default Payments;

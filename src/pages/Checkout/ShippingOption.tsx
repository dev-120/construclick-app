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
  useIonModal,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { RouteComponentProps, Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header/Header";

type CheckoutProps = {
  location: {
    state: any;
  };
  match: {
    url: string;
  };
};

const mockupAddress = {
  state: "Magdalena",
  city: "Santa Marta",
  zipCode: 470004,
  street: "Calle 15",
  numberHouse1: "2",
  numberHouse2: "16",
  country: "Colombia",
  firstAndLastname: "Jhonny Pacheco",
};

const ShippingOption: React.FC<RouteComponentProps> = ({
  location,
  match,
}: CheckoutProps) => {
  const [products] = useState(location?.state?.productList || []);
  const [totalPrice, setTotalPrice] = useState(location?.state?.total || 0);
  const [address, setAdress] = useState<Address>(mockupAddress);

  const dismissHandler = () => dismiss();
  const addressHandler = (data: Address) => {
    setAdress(data)
  };

  const [present, dismiss] = useIonModal(ModifyAddress, {
    onDismiss: dismissHandler,
    onSaveAddress: addressHandler,
  });
  return (
    <IonPage>
      <Header canBack href="/shopping-cart" />
      <IonContent>
        <IonToolbar>
          <IonTitle className="ion-text-center">
            Selecciona un método de entrega
          </IonTitle>
        </IonToolbar>
        <IonList>
          <IonCard color="light">
            <IonCardHeader>
              <IonCardTitle>
                <strong>Domicilio</strong>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonLabel className="ion-text-wrap">
                {address.street} # {address.numberHouse1}-{address.numberHouse2}
                , {address.city} - {address.state}, {address.country},{" "}
                {address.zipCode}
              </IonLabel>
              <br></br>
              <IonButton
                fill="clear"
                color="secondary"
                className=""
                size="small"
                onClick={() => present()}
              >
                Modificar ubicación
              </IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardContent>
              <IonItem lines="none" className="ion-no-padding">
                <IonLabel slot="start" className="ion-text-wrap">
                  Llega el viernes 16 de julio.
                </IonLabel>
                <IonText slot="end" color="success">
                  $ 10000
                </IonText>
              </IonItem>
            </IonCardContent>
          </IonCard>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonItem lines="none">
            <IonLabel slot="start">Pagas</IonLabel>
            <IonText slot="end">
              <strong>$ {totalPrice}</strong>
            </IonText>
          </IonItem>
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `payments`,
              state: { productsList: products, total: totalPrice, address: address },
            }}
          >
            <IonButton expand="full">Siguiente</IonButton>
          </Link>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
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

type ModifyAddressProps = {
  onDismiss: () => void;
  onSaveAddress: (data: Address) => void;
};

const ModifyAddress = ({ onDismiss, onSaveAddress }: ModifyAddressProps) => {
  const [stateAddress, setStateAddress] = useState<string>("");
  const [cityAddress, setCityAddress] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [numberHouse1, setNumberHouse1] = useState<string>("");
  const [numberHouse2, setNumberHouse2] = useState<string>("");
  const [name, setName] = useState<string>("");
  const submitHandler = (e: any) => {
    e.preventDefault()
    if (
      stateAddress &&
      cityAddress &&
      streetAddress &&
      numberHouse1 &&
      numberHouse2 &&
      name
    ) {
      onSaveAddress({
        state: stateAddress,
        city: cityAddress,
        street: streetAddress,
        numberHouse1: numberHouse1,
        numberHouse2: numberHouse2,
        zipCode: 1234,
        country: "Colombia",
        firstAndLastname: name,
      });
      onDismiss();
    }
  };
  return (
    <IonContent>
      <IonItem lines="none" className="ion-text-center">
        <IonTitle>Ingresa tu dirección</IonTitle>
      </IonItem>
      <form action="post" onSubmit={submitHandler}>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Escribe tu departamento</IonLabel>
            <IonInput
              value={stateAddress}
              onIonChange={(e) => setStateAddress(e.detail.value!)}
              type="text"
              placeholder="Magdalena"
              autofocus
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Escribe tu ciudad</IonLabel>
            <IonInput
              value={cityAddress}
              onIonChange={(e) => setCityAddress(e.detail.value!)}
              type="text"
              placeholder="Santa Marta"
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Dirección</IonLabel>
            <IonInput
              value={streetAddress}
              onIonChange={(e) => setStreetAddress(e.detail.value!)}
              placeholder="Calle 30"
              required
            />
          </IonItem>
          <IonGrid>
            <IonRow>
              <IonCol size="2">
                <IonItem className="ion-no-padding">
                  <IonLabel slot="start" position="fixed">
                    #
                  </IonLabel>
                </IonItem>
              </IonCol>
              <IonCol size="4">
                <IonItem className="ion-no-padding">
                  <IonInput
                    value={numberHouse1}
                    onIonChange={(e) => setNumberHouse1(e.detail.value!)}
                    placeholder="Ej.: 140A"
                    required
                  />
                </IonItem>
              </IonCol>
              <IonCol size="2">
                <IonItem className="ion-no-padding">
                  <IonLabel slot="start" position="fixed">
                    -
                  </IonLabel>
                </IonItem>
              </IonCol>
              <IonCol size="4">
                <IonItem className="ion-no-padding">
                  <IonInput
                    value={numberHouse2}
                    onIonChange={(e) => setNumberHouse2(e.detail.value!)}
                    placeholder="Ej.: 25"
                    required
                  />
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonItem>
            <IonLabel position="floating">Nombre y Apellidos</IonLabel>
            <IonInput
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
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

export default ShippingOption;

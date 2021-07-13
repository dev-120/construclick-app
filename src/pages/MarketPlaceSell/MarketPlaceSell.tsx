import {
  IonPage,
  IonContent,
  IonItem,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonList,
  IonInput,
  IonIcon,
  IonText,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonToggle,
  IonButton,
} from "@ionic/react";
import { images, storefront, storefrontOutline } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";

import Header from "../../components/Header/Header";
import "./MarketPlaceSell.css";
import InterventorImg from "../../assets/interventor_img.png"

const mockupUser = {
  name: "Jhonny Pacheco",
  profilePic: InterventorImg,
};

const itemCategories = [
  {name: "Herramientas", val: "tools"},
  {name: "Pinturas", val: "paint"},
  {name: "Electricidad", val:"electricity"},
  {name: "Plomeria", val:"plumbing"},
  {name: "Jardineria", val:"gardening"},
  {name: "Maquinaria", val: "machinery"},
]

const itemStates = [
  { name :"Nuevo", val:"new" },
  {name:"Usado - Como nuevo", val: "usedAsNew"},
  {name:"Usado - Buen estado", val:"usedNiceState"},
  {name:"Usado - Aceptable", val:"usedAceptableState"}
]

const MarketPlaceSell = () => {
  const [itemTitle, setItemTitle] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<number>(0);
  const [itemCategory, setItemCategory] = useState("tools");
  const [itemState, setItemState] = useState("new");
  const [itemLocation, setItemLocation] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemAvailable, setItemAvailable]= useState("available")
  const [offerShipping, setOfferShipping] = useState(false)
  const history = useHistory()

  const submitHandler = (e: any) => {
    e.preventDefault()
    history.push("/marketplace")
  }

  return (
    <IonPage>
      <Header canBack href="/marketplace" />
      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle className="ion-text-center">Nueva Publicacion</IonTitle>
        </IonToolbar>
        <IonItem lines="none">
          <img src={mockupUser.profilePic} alt="profile pic" slot="start" className="MarketplaceSell-profilePic__style" />
          <div>
            <IonLabel>
              {mockupUser.name}
            </IonLabel>
            <IonText color="medium" style={{ fontSize: "12px", alignItems: "center" }}>Publicación en Marketplace  </IonText>
            <IonIcon style={{ position: "absolute", top: "30px", left: "150px" }} color="medium" icon={storefront} />
          </div>  
        </IonItem>
        <form onSubmit={submitHandler}>
          <IonList>
            <IonItem className="MarketplaceSell-Image__style ion-padding" lines="none"  button >
              <IonIcon slot="start" icon={images} />
              <IonLabel>Agregar fotos</IonLabel>
            </IonItem>
            <IonItem lines="inset" className="ion-margin-horizontal" >
              <IonLabel position="floating">Título</IonLabel>
              <IonInput value={itemTitle} debounce={500} onIonChange={(e) => setItemTitle(e.detail.value!)}  type="text" required  autofocus />
            </IonItem>
            <IonItem lines="inset" className="ion-margin-horizontal">
              <IonLabel position="floating">Precio</IonLabel>
              <IonInput value={itemPrice} debounce={500} onIonChange={(e) => setItemPrice(parseInt(e.detail.value!))}  type="number" required />
            </IonItem>
            <IonItem lines="inset" className="ion-margin-horizontal">
              <IonLabel>Categoría</IonLabel>
              <IonSelect cancelText="Cancelar" interface="action-sheet"  value={itemCategory} onIonChange={e => setItemCategory(e.detail.value!)}>
                {itemCategories.map((category, i) => (
                  <IonSelectOption key={i} value={category.val}>{category.name}</IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
            <IonItem lines="inset" className="ion-margin-horizontal">
              <IonLabel position="floating">Estado</IonLabel>
              <IonSelect cancelText="Cancelar" interface="action-sheet" value={itemState} onIonChange={(e) => setItemState(e.detail.value!)}>
                  {itemStates.map((state, i) => (
                    <IonSelectOption key={i} value={state.val}>{state.name}</IonSelectOption>
                  ))}
              </IonSelect>
            </IonItem>
            <IonItem lines="inset" className="ion-margin-horizontal">
              <IonLabel position="floating">Descripción</IonLabel>
              <IonTextarea required value={itemDescription} onIonChange={(e) => setItemDescription(e.detail.value!)}></IonTextarea>
            </IonItem>
            <IonItem lines="inset" className="ion-margin-horizontal">
                <IonLabel position="floating">Ubicación</IonLabel>
                <IonInput autocomplete="address-level1" value={itemLocation} debounce={500} onIonChange={(e) => setItemLocation(e.detail.value!)} type="text" required/>
            </IonItem>
            <IonItem lines="inset" className="ion-margin-horizontal">
              <IonLabel position="floating">Disponibilidad</IonLabel>
              <IonSelect cancelText="Cancelar" interface="action-sheet" value={itemAvailable} onIonChange={(e) => setItemAvailable(e.detail.value!)}>
                <IonSelectOption value="unique">Publicar como artículo único</IonSelectOption>
                <IonSelectOption value="available">Publicar como disponible</IonSelectOption>              
              </IonSelect>
            </IonItem>
            <IonItem lines="none" className="ion-margin-horizontal">
              <IonLabel slot="start">Ofrecer envío</IonLabel>
              <IonToggle slot="end"  color="secondary"   onIonChange={() => setOfferShipping(!offerShipping)} />
            </IonItem>
            <IonButton expand="full" type="submit" >Publicar</IonButton>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default MarketPlaceSell;

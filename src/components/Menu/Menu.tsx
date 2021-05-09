import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonImg,
} from "@ionic/react";
import Logo from '../../assets/logotipo.png';

import './Menu.css';

const Menu = () => {
  return (
    <IonMenu side="start" contentId="main">
      <IonHeader>
        <IonToolbar className="logo-menu_side" >
          <IonImg src={Logo} />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Publicaciones</IonItem>
          <IonItem>MarketPlace</IonItem>
          <IonItem>Carrito</IonItem>
          <IonItem>Perfil</IonItem>
          <IonItem>Salir</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

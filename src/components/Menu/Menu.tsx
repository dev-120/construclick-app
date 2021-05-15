import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonContent,
  IonList,
  IonItem,
  IonImg,
} from "@ionic/react";
import { newspaperOutline, pricetagOutline, cartOutline, peopleOutline, closeOutline } from 'ionicons/icons';

import './Menu.css';
import Logo from '../../assets/logotipo.png';

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
          <IonItem routerLink="/posts" >
            <IonIcon icon={newspaperOutline} slot="start" />
            Publicaciones
          </IonItem>
          <IonItem routerLink="/marketplace" >
            <IonIcon icon={pricetagOutline} slot="start" />
            MarketPlace
          </IonItem>
          <IonItem routerLink="/shopping-cart" >
            <IonIcon icon={cartOutline} slot="start" />
            Carrito
          </IonItem>
          <IonItem routerLink="/profile" >
            <IonIcon icon={peopleOutline} slot="start" />
            Perfil
          </IonItem>
          <IonItem>
            <IonIcon icon={closeOutline} slot="start" />
            Salir
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

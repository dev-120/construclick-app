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
import {
  newspaperOutline,
  pricetagOutline,
  cartOutline,
  peopleOutline,
  closeOutline,
  calculator,
} from "ionicons/icons";

import "./Menu.css";
import Logo from "../../assets/logotipo.png";

const Menu = () => {
  return (
    <IonMenu side="start" contentId="main">
      <IonContent className="content_menu_side">
        <div className="cover_menu_profile">
          <IonImg
            className="cover_menu_profile_img"
            src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          />
          <div className="cover_menu_gradient" />
          <div className="data_profile_menu_side">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="data_text_profile_menu_side">
              <span className="data_text_profile_menu_side-name">
                Johnny Pacheco
              </span>
              <span className="data_text_profile_menu_side-profession">
                Arquitecto
              </span>
            </div>
          </div>
        </div>
        <IonItem className="item_list_menu_side" routerLink="/posts">
          <IonIcon icon={newspaperOutline} slot="start" />
          Publicaciones
        </IonItem>
        <IonItem className="item_list_menu_side" routerLink="/marketplace">
          <IonIcon icon={pricetagOutline} slot="start" />
          MarketPlace
        </IonItem>
        <IonItem className="item_list_menu_side" routerLink="/shopping-cart">
          <IonIcon icon={cartOutline} slot="start" />
          Carrito
        </IonItem>
        <IonItem className="item_list_menu_side" routerLink="/calculator">
          <IonIcon icon={calculator} slot="start" />
          Calculadora
        </IonItem>
        <IonItem className="item_list_menu_side" routerLink="/profile">
          <IonIcon icon={peopleOutline} slot="start" />
          Perfil
        </IonItem>
        <IonItem className="item_list_menu_side">
          <IonIcon icon={closeOutline} slot="start" />
          Salir
        </IonItem>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

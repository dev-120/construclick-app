import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonMenuButton,
  IonItem,
  IonIcon,
} from "@ionic/react";
import React from "react";
import { chevronBack, notifications } from "ionicons/icons";

import SearchButton from "../SearchButton/SearchButton";
import Logo from "../../assets/logo_orange.png";

import "./Header.css";

type Props = {
  title?: string;
  canBack?: boolean;
  href?: string;
};

const Header: React.FC<Props> = ({ title, canBack = true, href = "/" }) => {
  return (
    <IonHeader>
      <IonToolbar>
        {canBack ? (
          <>
            <IonButtons slot="start">
              <IonBackButton
                defaultHref={href}
                icon={chevronBack}
                className="Header-icons__color"
              />
              <SearchButton />
            </IonButtons>
            <IonItem
              lines="none"
              className="ion-text-center Header-logo__style"
            >
              <img src={Logo} alt="" />
            </IonItem>
          </>
        ) : (
          <>
            <IonButtons slot="start">
              <SearchButton />
            </IonButtons>
            <IonItem
              lines="none"
              className="ion-text-center Header-logo__style"
            >
              <img src={Logo} alt="" />
            </IonItem>
          </>
        )}
        <IonButtons slot="end" className="Header-endslot__icons">
          <IonIcon icon={notifications} />
          <IonMenuButton autoHide={true} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

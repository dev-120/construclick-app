import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonMenuButton,
  IonIcon,
} from "@ionic/react";
import { menu } from 'ionicons/icons';

import React from "react";

type Props = {
  title: string,
};

const Header: React.FC<Props> = ({ title }) => (
  <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
      <IonTitle>{title}</IonTitle>
      <IonButtons slot="end">
        <IonMenuButton autoHide={false} />
      </IonButtons>
    </IonToolbar>
  </IonHeader>
);

export default Header;

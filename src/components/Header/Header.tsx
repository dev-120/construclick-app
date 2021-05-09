import {
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonMenuButton,
} from "@ionic/react";
import React from "react";
import { useHistory } from 'react-router';

type Props = {
  title?: string,
};

const Header: React.FC<Props> = ({ title }) => {
  const { location } = useHistory();

  return (
    <IonHeader>
      <IonToolbar>
        {location.pathname !== "/posts" && (
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        )}
        <IonTitle>{title || "Construclick"}</IonTitle>
        <IonButtons slot="end">
          <IonMenuButton autoHide={false} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

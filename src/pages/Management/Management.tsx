import {
  IonPage,
  IonIcon,
  IonContent,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import React from "react";
import { add } from "ionicons/icons";

import "./Management.css";
import Header from "../../components/Header/Header";

type Props = {
  history: {
    push: Function;
  };
};

const ManagementPage: React.FC<Props> = () => {
  return (
    <IonPage>
      <Header canBack={false} title="Gestion de obra" />
      <IonContent>
        <div className="container-management">
          <span className="empty_project_message">
            No tienes aun ningun proyecto creado
          </span>
        </div>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
export default ManagementPage;

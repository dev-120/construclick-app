import {
  IonPage,
  IonIcon,
  IonContent,
  IonFab,
  IonFabButton,
  IonList,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/react";
import React from "react";
import { add } from "ionicons/icons";

import "./Management.css";
import Header from "../../components/Header/Header";
import useConstructions from "../../hooks/useConstructions";

type Props = {
  history: {
    push: Function;
  };
};

const ManagementPage: React.FC<Props> = ({ history }) => {
  const { constructions } = useConstructions();
  return (
    <IonPage>
      <Header canBack={false} title="Gestion de obra" />
      <IonContent>
        <div className="container-management">
          {constructions?.length === 0 ? (
            <span className="empty_project_message">
              No tienes aun ningun proyecto creado
            </span>
          ) : (
            <IonContent>
              <IonList>
                {constructions?.map((c: any) => (
                  <IonItem>
                  <IonLabel className="ion-text-wrap">
                    <IonText color="primary">
                      <h2>{c.name}</h2>
                    </IonText>
                    <p>{c.description}</p>
                    <IonText>
                      <p>{c.ubication}</p>
                    </IonText>
                  </IonLabel>
                </IonItem>
                ))}
                
              </IonList>
            </IonContent>
          )}
        </div>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon
              onClick={() => {
                history.push("/gestion/create");
              }}
              icon={add}
            />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
export default ManagementPage;

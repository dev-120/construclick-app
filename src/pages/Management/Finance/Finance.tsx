import {
  IonPage,
  IonContent,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonText,
  IonToggle,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { useState } from "react";
import { cashOutline } from "ionicons/icons";

import "./Finance.css";
import Header from "../../../components/Header/Header";
import QuestionTogle from "../../../components/QuestionTogle/QuestionTogle";

const Finance = () => {
  const [hasFond, setHasFond] = useState<boolean>(false);
  const [Fonds, setFonds] = useState<number>(0);

  return (
    <IonPage>
      <Header canBack href="/gestion" />
      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle className="ion-text-center">Financiación</IonTitle>
        </IonToolbar>
        <IonList style={{ padding: 20 }}>
          <IonItem className="ion-text-center" lines="none">
            Información sobre las finanzas
          </IonItem>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">
              1.¿Tienes el dinero completa para ejecutar todo el presupuesto?
            </IonLabel>
            <IonToggle
              checked={hasFond}
              className="Finance-Fonds__toggle"
              onIonChange={() => setHasFond(!hasFond)}
            />
          </IonItem>

          {!hasFond && (
            <IonItem className="ion-margin-vertical">
              <IonText slot="start">2. ¿Cuanto te hace falta?</IonText>
              <IonInput
                value={Fonds}
                type="number"
                onIonChange={(e) => setFonds(Number(e.detail.value!))}
              />
            </IonItem>
          )}
          <IonItem lines="none">
            <IonText className="ion-text-wrap" style={{ fontSize: "12px" }}>
              Podemos ayudarle a conseguir la financiacion que necesitas con
              nuestras alidas entidades financieras
            </IonText>
          </IonItem>
          <IonItem lines="none" button className="ion-margin-vertical">
            <IonIcon slot="start" icon={cashOutline} />
            <IonText className="ion-text-wrap ion-text-center">Solicitar financiación para mi obra</IonText>
          </IonItem>
          <IonButton size="large" expand="full">
            Guardar
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Finance;

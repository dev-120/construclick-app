import {
  IonLabel,
  IonPage,
  IonCardContent,
  IonItem,
  IonToolbar,
  IonContent,
  IonButton,
  IonIcon,
  IonTitle,
  IonList,
  IonText,
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonTextarea,
  IonDatetime,
} from "@ionic/react";
import { close } from "ionicons/icons";
import { useState } from "react";
import Header from "../../../components/Header/Header";

const HandingReports = () => {
  const [date, SetDate] = useState("06/01/2021");
  return (
    <IonPage>
      <Header canBack href="/gestion/dashboard" />
      <IonContent>
        <IonToolbar className="ion-text-center">
          <IonTitle>Acta de Entrega</IonTitle>
        </IonToolbar>
        <IonList>
          <IonItem lines="none">
            <IonLabel slot="start">Contrato de obra: </IonLabel>
            <IonText color="danger">N° - 0000000001</IonText>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Fecha: </IonLabel>
            <IonDatetime
              value={date}
              onIonChange={(e) => SetDate(e.detail.value!)}
              pickerFormat="MM/DD/YYYY"
              displayFormat="MM/DD/YYYY"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Descripción general: </IonLabel>
            <IonTextarea placeholder="Inserte Texto aqui" />
          </IonItem>
          <IonItem>
            <IonLabel slot="start">Valor inicial: </IonLabel>
            <IonText slot="end" color="danger">
              <strong>$ 37'800.000</strong>
            </IonText>
          </IonItem>
          <IonItem>
            <IonLabel>Fecha programada de INICIO:</IonLabel>
            <IonText color="danger">Lun.31 / May</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>Fecha programada de FINAL:</IonLabel>
            <IonText color="danger">Mir.15 / Jul</IonText>
          </IonItem>
          <IonItem>
            <IonLabel className="ion-text-wrap">
              Funcionarios autorizados para trabajar en obra:{" "}
            </IonLabel>
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <p style={{ fontSize: "10px" }}>
              En la culminación del proyecto, de acuerdo al presupuesto aceptado, las partes interesadas revisan la obra confirmando que:
              1. El proyecto fue concluido en su totalidad.
              2. Los materiales y garantías de calidad cumplen con lo ofrecido.
              3. Los tiempos de ejecución no fueron superados.
              4. Se han respetado las instalaciones e inmuebles, así como la limpieza y el cuidado de los enseres.
              Dado que la obra fue concluida en su totalidad y el contratante se encuentra satisfecho con el trabajo realizado, se da por concluido este proyecto y se terminar
              los trabajos de obra en la fecha de firma de este documento
            </p>
          </IonItem>
        </IonList>
        <IonCard disabled>
          <IonCardContent>
            <IonItem className="ion-text-center">
              <IonLabel>
                <strong>FIRMA DEL CONTRATANTE</strong>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <strong>Nombre: </strong>
              </IonLabel>
              <IonText>Luis Alfredo Castillo Duran</IonText>
            </IonItem>
            <IonItem>
              <IonLabel>
                <strong>Correo: </strong>
              </IonLabel>
              <IonText>Personal@correo.com</IonText>
            </IonItem>
            <IonItem>
              <IonLabel>Firmar por correo</IonLabel>
              <IonButton slot="end">Firmar</IonButton>
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonItem className="ion-text-center">
              <IonLabel>
                <strong>FIRMA DEL INTERVENTOR</strong>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <strong>Nombre: </strong>
              </IonLabel>
              <IonText>Hassem Escobar Coquies</IonText>
            </IonItem>
            <IonItem>
              <IonLabel>
                <strong>Correo: </strong>
              </IonLabel>
              <IonText>Personal@correo.com</IonText>
            </IonItem>
            <IonItem>
              <IonLabel>Firmar por correo</IonLabel>
              <IonButton slot="end" routerLink="/gestion/dashboard">Firmar</IonButton>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HandingReports;

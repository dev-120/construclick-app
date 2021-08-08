import {
  IonImg,
  IonPage,
  IonIcon,
  IonButton,
  IonContent,
  IonToolbar,
  IonSegment,
  IonFab,
  IonFabButton,
  IonFabList,
  IonTitle,
  IonSegmentButton,
  IonLabel,
  IonList,
  IonItem,
  IonInput,
} from "@ionic/react";
import React from "react";

import './DataGeneral.css';
import Header from "../../../components/Header/Header";

const DataGeneralPage = () => {
  return (
    <IonPage>
      <Header canBack />
      <IonContent>
        <IonToolbar>
          <IonTitle>Datos generales</IonTitle>
        </IonToolbar>
        <IonList style={{ padding: 20 }}>
          <IonItem>
            <IonLabel position="floating">Nombre de la obra</IonLabel>
            <IonInput size={350} type="text" placeholder="Ingrese nombre" />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Descripción</IonLabel>
            <IonInput type="text" placeholder="Ingrese descripcion" />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Ubicacion</IonLabel>
            <IonInput
              type="text"
              placeholder="Ingrese la ubicacion de la obra en el mapa"
            />
          </IonItem>
          <IonImg className="image_map" src="https://d500.epimg.net/cincodias/imagenes/2015/10/29/lifestyle/1446136907_063470_1446137018_noticia_normal.jpg" />
          <IonItem>
            <IonLabel position="floating">Contacto</IonLabel>
            <IonInput type="text" placeholder="Ingrese numero de contacto" />
          </IonItem>
          <IonButton size="large" expand="full">
            Guardar
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default DataGeneralPage;

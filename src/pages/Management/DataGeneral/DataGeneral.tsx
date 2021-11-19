import { useState, useEffect } from "react";
import {
  IonImg,
  IonPage,
  IonButton,
  IonContent,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonList,
  IonItem,
  IonInput,
} from "@ionic/react";
import React from "react";

import "./DataGeneral.css";
import Header from "../../../components/Header/Header";
import useConstructions from "../../../hooks/useConstructions";

const DataGeneralPage = () => {
  const { constructionSelected, updateConstruction } = useConstructions();
  const [constructionName, setConstructionName] = useState<string>("");
  const [constructionDescription, setConstructionDescription] =
    useState<string>("");
  const [constructionLocation, setConstructionLocation] = useState<string>("");
  const [constructionContact, setContructionContact] = useState<string>("");

  useEffect(() => {
    setConstructionName(constructionSelected?.name || "");
    setConstructionDescription(constructionSelected?.description || "");
    setConstructionLocation(constructionSelected?.ubication || "");
    setContructionContact(constructionSelected?.phoneContact || "");
  }, [constructionSelected]);

  const submitGeneralData = (e: any) => {
    e.preventDefault();
    updateConstruction({
      ...constructionSelected,
      name: constructionName,
      ubication: constructionLocation,
      description: constructionDescription,
      phoneContact: constructionContact,
    });
  };

  return (
    <IonPage>
      <Header canBack />
      <IonContent>
        <IonToolbar>
          <IonTitle>Datos generales</IonTitle>
        </IonToolbar>
        <IonList style={{ padding: 20 }}>
          <form onSubmit={submitGeneralData}>
            <IonItem>
              <IonLabel position="floating">Nombre de la obra</IonLabel>
              <IonInput
                size={350}
                type="text"
                value={constructionName}
                onIonChange={(e) => setConstructionName(e.detail.value!)}
                placeholder="Ingrese nombre"
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Descripción</IonLabel>
              <IonInput
                type="text"
                placeholder="Ingrese descripcion"
                value={constructionDescription}
                onIonChange={(e) => setConstructionDescription(e.detail.value!)}
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Ubicacion</IonLabel>
              <IonInput
                type="text"
                placeholder="Ingrese la ubicacion de la obra en el mapa"
                required
                value={constructionLocation}
                onIonChange={(e) => setConstructionLocation(e?.detail?.value!)}
              />
            </IonItem>
            <IonImg
              className="image_map"
              src="https://d500.epimg.net/cincodias/imagenes/2015/10/29/lifestyle/1446136907_063470_1446137018_noticia_normal.jpg"
            />
            <IonItem>
              <IonLabel position="floating">Contacto</IonLabel>
              <IonInput
                type="text"
                placeholder="Ingrese numero de contacto"
                required
                value={constructionContact}
                onIonChange={(e) => setContructionContact(e.detail.value!)}
              />
            </IonItem>
            <IonButton size="large" expand="full" type="submit">
              Guardar
            </IonButton>
          </form>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default DataGeneralPage;

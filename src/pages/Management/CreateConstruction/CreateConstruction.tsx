import {
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

import './CreateConstruction.css';
import useConstructions from "../../../hooks/useConstructions";
import Header from "../../../components/Header/Header";
import { useState } from "react";

type Props = {
  history: {
    push: Function;
    replace: Function;
  };
};

const DataGeneralPage: React.FC<Props> = ({ history }) => {
  const { createConstruction } = useConstructions();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ubication, setUbication] = useState('');
  const [phoneContact, setPhoneContact] = useState('');

  const onSubmit = async () => {
    await createConstruction({
      name, description, ubication, phoneContact,
    });
    history.replace('/gestion')
  }

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
            <IonInput
              onIonChange={(v) => {setName(v.detail.value!)}}
              size={350}
              value={name}
              type="text" placeholder="Ingrese nombre"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Descripción</IonLabel>
            <IonInput
              onIonChange={(v) => {setDescription(v.detail.value!)}}
              type="text"
              value={description}
              placeholder="Ingrese descripcion"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Ubicacion</IonLabel>
            <IonInput
              onIonChange={(v) => {setUbication(v.detail.value!)}}
              type="text"
              value={ubication}
              placeholder="Ingrese la ubicacion de la obra en el mapa"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Contacto</IonLabel>
            <IonInput
              onIonChange={(v) => {setPhoneContact(v.detail.value!)}}
              type="text"
              value={phoneContact}
              placeholder="Ingrese numero de contacto"
            />
          </IonItem>
          <IonButton onClick={onSubmit} size="large" expand="full">
            Guardar
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default DataGeneralPage;

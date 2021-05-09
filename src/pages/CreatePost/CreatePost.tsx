import { 
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonSelect,
  IonTextarea,
  IonFab,
  IonFabButton,
  IonIcon,
  IonSelectOption,
  IonImg,
} from "@ionic/react";
import React, { useState } from 'react';
import { imageOutline, saveOutline } from 'ionicons/icons';
import { Plugins, CameraResultType } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { typePosts } from '../../config/constants';
import Header from '../../components/Header/Header';

const { Camera } = Plugins;

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState(typePosts[0].singular);
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState<any>();
  const [date, setDate] = useState('');
  
  defineCustomElements(window);

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
      });
    setPhoto(image);
  }

  return (
    <IonPage>
      <Header title="Crear publicacion"  />
      <IonContent fullscreen >
        <IonItem>
          <IonLabel position="floating" >Titulo</IonLabel>
          <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)}  />
        </IonItem>
        <IonItem>
          <IonLabel>Tipo</IonLabel>
          <IonSelect value={type} placeholder="Selecciona uno" onIonChange={e => setType(e.detail.value)}>
            {typePosts.map((item) => item.singular).map((opt) => (
              <IonSelectOption key={opt+"option_type_post"} value={opt}>{opt}</IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
        {type === 'Evento' && (
          <IonItem>
            <IonLabel>Fecha del evento</IonLabel>
            <IonInput
              value={date} onIonChange={e => setDate(e.detail.value!)}
              type="date"
            />
          </IonItem>
        )}
        <IonItem>
          <IonLabel position="floating">Descripción</IonLabel>
          <IonTextarea
            rows={4}
            value={description}
            onIonChange={e => setDescription(e.detail.value!)} />
        </IonItem>
        <IonContent className="ion-padding">
          {photo && <IonImg style={{ 'border': '1px solid black', 'minHeight': '100px' }} src={photo.webPath} ></IonImg>}
        </IonContent>
        <IonFab color="primary" vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton color="primary" onClick={async () => await takePicture()}>
            <IonIcon icon={imageOutline} />
          </IonFabButton>
        </IonFab>
        <IonFab color="secondary" vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="secondary" onClick={() => {}}>
            <IonIcon icon={saveOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
};

export default CreatePost;

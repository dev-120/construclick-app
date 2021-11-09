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
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import { imageOutline, saveOutline } from "ionicons/icons";
import {
  Plugins,
  CameraResultType,
  CameraSource,
} from "@capacitor/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

import { typePosts } from "../../config/constants";
import Header from "../../components/Header/Header";

import "./CreatePost.css";
import { uploadImage } from "../../services/image.service";
import { dataURLtoFile } from "../../utils/image";
import { publishPostService } from "../../services/posts.service";
import useUser from "../../hooks/useUser";

const { Camera } = Plugins;

interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

const CreatePost: React.FC = () => {
  const { profileUser } = useUser();
  const [title, setTitle] = useState("");
  const [type, setType] = useState(typePosts[0].singular);
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const [date, setDate] = useState("");

  defineCustomElements(window);

  const takePicture = async () => {
    let image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    const fileName = new Date().getTime() + "." + image.format;
    const newPhotos = [
      { filepath: fileName, webviewPath: image.dataUrl },
      ...photos,
    ];
    setPhotos(newPhotos);
  };

  const clearFormData  = () => {
    setTitle("");
    setType(typePosts[0].singular);
    setDescription("");
    setPhotos([]);
    setDate("");
  }

  const handlePublishPost = async () => {
    const imagesUrl = [];
    if (photos) {
      for (let photo of photos) {
        try {
          const response = await uploadImage(
            dataURLtoFile(photo.webviewPath, photo.filepath)
          );
          if (response.status === 200) {
            imagesUrl.push(response.data.data);
          }
        } catch (e) {
          console.error(e);
        }
      }

      if (type === "Evento") {
        try{
          const publishPost = await publishPostService({
            userId: profileUser.id,
            title,
            type,
            imagesUrl,
            attributes: {
              postDescription: description,
              postDate: date,
            },
          });

          if(publishPost.status === 200){
            clearFormData();
            console.log("Post Subido")
          }
        }catch(e){
          console.error(e)
        }
      }else{
        try{
          const publishPost = await publishPostService({
            userId: profileUser.id,
            title,
            type,
            imagesUrl,
            attributes: {
              postDescription: description,
            },
          });

          if(publishPost.status === 200){
            clearFormData();
            console.log("Post Subido")
          }
        }catch(e){
          console.error(e)
        }
      }
      
    }
  };

  return (
    <IonPage>
      <Header title="Crear publicacion" />
      <IonContent fullscreen className="ion-overflow-auto">
        <IonItem>
          <IonLabel position="floating">Titulo</IonLabel>
          <IonInput
            value={title}
            onIonChange={(e) => setTitle(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Tipo</IonLabel>
          <IonSelect
            value={type}
            placeholder="Selecciona uno"
            onIonChange={(e) => setType(e.detail.value)}
          >
            {typePosts
              .map((item) => item.singular)
              .map((opt) => (
                <IonSelectOption key={opt + "option_type_post"} value={opt}>
                  {opt}
                </IonSelectOption>
              ))}
          </IonSelect>
        </IonItem>
        {type === "Evento" && (
          <IonItem>
            <IonLabel>Fecha del evento</IonLabel>
            <IonInput
              value={date}
              onIonChange={(e) => setDate(e.detail.value!)}
              type="date"
            />
          </IonItem>
        )}
        <IonItem>
          <IonLabel position="floating">Descripción</IonLabel>
          <IonTextarea
            rows={4}
            value={description}
            onIonChange={(e) => setDescription(e.detail.value!)}
          />
        </IonItem>
        <div>
          <IonGrid>
            <IonRow className="ion-justify-content-center ion-align-items-stretch">
              {photos.map((photo, index) => (
                <IonCol size="6" key={index} className="post-image__col">
                  <IonImg src={photo.webviewPath} alt="" />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
        <IonFab
          color="primary"
          vertical="bottom"
          horizontal="start"
          slot="fixed"
        >
          <IonFabButton
            color="primary"
            onClick={async () => await takePicture()}
          >
            <IonIcon icon={imageOutline} />
          </IonFabButton>
        </IonFab>
        <IonFab
          color="secondary"
          vertical="bottom"
          horizontal="end"
          slot="fixed"
        >
          <IonFabButton color="secondary" onClick={handlePublishPost}>
            <IonIcon icon={saveOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default CreatePost;

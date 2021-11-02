import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonTextarea,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import { imageOutline, saveOutline } from "ionicons/icons";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

import Header from "../../components/Header/Header";

import "./CreateProject.css";
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
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

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

      try {
        const publishPost = await publishPostService({
          userId: profileUser.id,
          title,
          type: "Project",
          imagesUrl,
          attributes: {
            postDescription: description,
          },
        });

        if (publishPost.status === 200) {
          console.log("Post Subido");
        }
      } catch (e) {
        console.error(e);
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

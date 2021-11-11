import React from "react";
import {
  IonImg,
  IonPage,
  IonIcon,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardSubtitle,
  IonChip,
  IonAvatar,
  IonBadge,
  IonLabel,
  IonContent,
  IonSlides,
  IonSlide,
} from "@ionic/react";
import { heartOutline, timeOutline } from "ionicons/icons";

import "./ViewPost.css";
import Header from "../../components/Header/Header";
import { AVATAR_IMAGE } from "../../config/constants";
import { dateFormatter } from "../../utils/dateFormatter";
import {  useLocation } from "react-router";

interface postInterface {
  _id: string | undefined;
  attributes: {
    postDescription?: string | undefined;
    postDate?: string | undefined;
  }[];
  createdAt: string | undefined;
  imagesUrl: string[] | undefined;
  title: string | undefined;
  userId: string | undefined;
  userImage: string | undefined;
  userLastname: string | undefined;
  userName: string | undefined;
}

interface viewPostInterface {
  location: {
    state: postInterface | [];
  };
}

const ViewPost: React.FC<viewPostInterface> = () => {
  const { state } = useLocation<postInterface>();
  const getDate = (date: string) => {
    let currentDate = new Date(date);
    return `${currentDate.getDay()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
  };
  return (
    <IonPage>
      <Header canBack={false} />
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>
              <IonChip>
                <IonAvatar>
                  <img
                    src={state?.userImage ? state?.userImage : AVATAR_IMAGE}
                    alt="profile"
                  />
                </IonAvatar>
                <IonLabel>{`${state?.userName} ${state?.userLastname}`}</IonLabel>
              </IonChip>
            </IonCardSubtitle>
            <IonCardTitle>{state?.title}</IonCardTitle>
            <IonBadge color="primary">{state?.createdAt && getDate(state?.createdAt)}</IonBadge>
          </IonCardHeader>
          <IonSlides>
            {state?.imagesUrl?.map((image: string) => (
              <IonSlide key={image}>
                <IonImg src={image} alt="" />
              </IonSlide>
            ))}
          </IonSlides>
          {state?.attributes[0] ? (
            <IonCardContent>
              {state?.attributes[0]?.postDescription}
            </IonCardContent>
          ) : (
            <IonCardContent>Sin Descripción</IonCardContent>
          )}
          <IonFooter>
            <IonGrid>
              <IonRow>
                <IonCol size="4" className="btn_footer_card">
                  <IonIcon icon={heartOutline} />
                  <IonLabel>54 Likes</IonLabel>
                </IonCol>
                <IonCol size="4" className="btn_footer_card">
                  <IonIcon icon={timeOutline} />
                  <IonLabel className="ion-text-center">{state?.createdAt && dateFormatter(state.createdAt)}</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonFooter>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ViewPost;

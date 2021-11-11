import React from "react";
import {
  IonImg,
  IonCol,
  IonCard,
  IonIcon,
  IonLabel,
  IonFooter,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonChip,
  IonAvatar,
  IonBadge,
} from "@ionic/react";
import { heartOutline, timeOutline } from "ionicons/icons";
import { useHistory } from "react-router";

import "./PostCard.css";
import { AVATAR_IMAGE } from "../../config/constants";
import { dateFormatter } from "../../utils/dateFormatter";

type Props = {
  post: postInterface;
};

interface postInterface {
  _id: string;
  attributes: {
    postDescription?: string;
    postDate?: string;
  }[];
  type: string;
  createdAt: string;
  imagesUrl: string[];
  title: string;
  userId: string;
  userImage: string;
  userLastname: string;
  userName: string;
}

const PostCard: React.FC<Props> = ({ post }) => {

  const history = useHistory();

  const getDate = (date: string) => {
    let currentDate = new Date(date);
    return `${currentDate.getDay()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
  };

  return (
    <IonCard
      onClick={() => {
        history.push({ pathname: `/view-post/`, state: { ...post } })
      }}
    >
      <IonCardHeader>
        <IonCardSubtitle>
          <IonChip>
            <IonAvatar>
              <img
                src={post.userImage ? post.userImage : AVATAR_IMAGE}
                alt="profile"
              />
            </IonAvatar>
            <IonLabel>{`${post.userName} ${post.userLastname}`}</IonLabel>
          </IonChip>
        </IonCardSubtitle>
        <IonCardTitle>{post.title}</IonCardTitle>
        <IonBadge color="primary">{getDate(post.createdAt)}</IonBadge>
      </IonCardHeader>
      <IonImg src={post.imagesUrl[0]} alt="post" />
      {"postDescription" in post.attributes[0] ? (
        <IonCardContent>{post.attributes[0]?.postDescription}</IonCardContent>
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
              <IonLabel className="ion-text-center">{dateFormatter(post.createdAt)}</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonCard>
  );
};

export default PostCard;
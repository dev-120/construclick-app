import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonChip,
  IonContent,
  IonItem,
  IonLabel,
  IonSlide,
  IonSlides,
  IonFooter,
  IonGrid,
  IonBadge,
  IonRow,
  IonCol,
  IonIcon,
  IonCardTitle,
} from "@ionic/react";
import { closeCircle, timeOutline } from "ionicons/icons";
import { AVATAR_IMAGE } from "../../config/constants";
import { dateFormatter } from "../../utils/dateFormatter";

const ViewPostCard: React.FC<{
  post: any;
  onDismiss: () => void;
  profileFullName: string;
  profileImage: string;
}> = ({ post, onDismiss, profileFullName, profileImage }) => {
  const getDate = (date: string) => {
    let currentDate = new Date(date);
    return `${currentDate.getDay()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
  };

  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>
            <IonItem lines="none" className="ion-no-margin ion-no-padding">
              <IonChip slot="start">
                <IonAvatar>
                  <img
                    src={profileImage ? profileImage : AVATAR_IMAGE}
                    alt="profile"
                  />
                </IonAvatar>
                <IonLabel>{profileFullName}</IonLabel>
              </IonChip>
              <IonButton
                slot="end"
                onClick={() => onDismiss()}
                color="primary"
                fill="clear"
                size="large"
              >
                <IonIcon slot="icon-only" icon={closeCircle} />
              </IonButton>
            </IonItem>
          </IonCardSubtitle>
          <IonCardTitle>{post?.title}</IonCardTitle>
          <IonBadge color="primary">
            {post?.createdAt && getDate(post?.createdAt)}
          </IonBadge>
        </IonCardHeader>
        {post && (
          <IonSlides>
            {post?.imagesUrl?.map((image: string) => (
              <IonSlide key={image}>
                <img src={image} alt="" />
              </IonSlide>
            ))}
          </IonSlides>
        )}
        {post?.attributes[0] ? (
          <IonCardContent>
            {post?.attributes[0]?.postDescription}
          </IonCardContent>
        ) : (
          <IonCardContent>Sin Descripción</IonCardContent>
        )}
        <IonFooter>
          <IonGrid>
            <IonRow>
              <IonCol size="4" className="btn_footer_card">
                <IonIcon icon={timeOutline} />
                <IonLabel className="ion-text-center">
                  {post?.createdAt && dateFormatter(post?.createdAt)}
                </IonLabel>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
      </IonCard>
    </IonContent>
  );
};

export default ViewPostCard;

import React from "react";
import {
  IonImg,
  IonCol,
  IonCard,
  IonIcon,
  IonLabel,
  IonButton,
  IonFooter,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonChip,
  IonAvatar,
  IonBadge
} from "@ionic/react";
import { heart, heartOutline, timeOutline } from 'ionicons/icons';

import './EventCard.css';

type Props = {
  onClick: Function,
}

const EventCard: React.FC<Props> = ({ onClick }) => {
  return (
    <IonCard onClick={() => {
      onClick();
    }} >
      <IonCardHeader>
        <IonCardSubtitle>
          <IonChip>
            <IonAvatar>
              <img src="https://lh3.googleusercontent.com/a-/AOh14GhNZuKyu0lhC53Zf2pHWEkb7uP6F9YGMOaZunjR_A=s96-c"/>
            </IonAvatar>
            <IonLabel>Johnny Pacheco</IonLabel>
          </IonChip>
        </IonCardSubtitle>
        <IonCardTitle>DogeCoing no llego a la luna</IonCardTitle>
        <IonBadge color="primary">Ayer</IonBadge>
      </IonCardHeader>
      <IonImg src="https://i.ytimg.com/vi/s3NWyh8a5t0/maxresdefault.jpg" />
      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile, and
        climb a mountain or spend a week in the woods.
      </IonCardContent>
      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonCol size="4" className="btn_footer_card" >
              <IonIcon icon={heartOutline} />
              <IonLabel>54 Likes</IonLabel>
            </IonCol>
            <IonCol size="4" className="btn_footer_card" >
              <IonIcon icon={timeOutline} />
              <IonLabel>Hace 10 min</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonCard>
  );
}

export default EventCard;

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
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import React from 'react';
import { add } from 'ionicons/icons';

import Header from '../../components/Header/Header';
import EventCard from '../../components/EventCard/EventCard';

type Props = {
  history: {
    push: Function
  }
}

const Posts: React.FC<Props> = ({ history }) => {
  
  const onClickCard = () => {
    history.push('/view-post');
  };

  const RenderSegmentsSelect = (
    <IonToolbar>
      <IonSegment mode="md" value="all">
        <IonSegmentButton value="all">
          Eventos
        </IonSegmentButton>
        <IonSegmentButton value="favorites">
          Noticias
        </IonSegmentButton>
        <IonSegmentButton value="oportunities">
          Oportunidades
        </IonSegmentButton>
      </IonSegment>
    </IonToolbar>
  );

  const RenderFabButton = (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton onClick={() => {
        history.push('/create-post');
      }}>
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab>
  );

  return (
    <IonPage>
      <Header canBack={false} title="Publicaciones" />
      {RenderFabButton}
      <IonContent>
        {RenderSegmentsSelect}
        <EventCard onClick={onClickCard} />
        <EventCard onClick={onClickCard} />
      </IonContent>
    </IonPage>
  )
}
export default Posts;

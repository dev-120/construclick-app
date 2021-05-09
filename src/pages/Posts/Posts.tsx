import {
  IonImg,
  IonPage,
  IonIcon,
  IonButton,
  IonContent,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import React from 'react';

import Header from '../../components/Header/Header';
import EventCard from '../../components/EventCard/EventCard';

const Posts: React.FC = () => {
  const RenderSegmentsSelect = (
    <IonToolbar>
      <IonSegment value="all">
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

  return (
    <IonPage>
      <Header title="Publicaciones" />
      <IonContent>
        {RenderSegmentsSelect}
        <EventCard />
        <EventCard />
      </IonContent>
    </IonPage>
  )
}
export default Posts;

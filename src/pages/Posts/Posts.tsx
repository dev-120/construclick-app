import {
  IonPage,
  IonIcon,
  IonContent,
  IonToolbar,
  IonSegment,
  IonFab,
  IonFabButton,
  IonSegmentButton,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { add } from "ionicons/icons";

import Header from "../../components/Header/Header";
import EventSegment from "../../components/EventSegment/EventSegment";
import NewsSegment from "../../components/NewsSegment/NewsSegment";
import OpportunitySegment from "../../components/OpportunitySegment/OpportunitySegment";
import usePosts from "../../hooks/usePosts";

type Props = {
  history: {
    push: Function;
  };
};

const Posts: React.FC<Props> = ({ history }) => {
  const { fetchPost, postsEvent, postsNews, postsOpportunities } = usePosts(); 
  const [currentSegment, setCurrentSegment] = useState("Evento");

  useEffect(() => {
    fetchPost(currentSegment)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSegment])

  const RenderSegmentsSelect = (
    <IonToolbar>
      <IonSegment
        mode="md"
        value={currentSegment}
        onIonChange={(e) => setCurrentSegment(e.detail.value!)}
      >
        <IonSegmentButton value="Evento">Eventos</IonSegmentButton>
        <IonSegmentButton value="Noticia">Noticias</IonSegmentButton>
        <IonSegmentButton value="Oportunidad">Oportunidades</IonSegmentButton>
      </IonSegment>
    </IonToolbar>
  );

  const RenderFabButton = (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton
        onClick={() => {
          history.push("/create-post");
        }}
      >
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
        {currentSegment === "Evento" && <EventSegment posts={postsEvent}/>}

        {currentSegment === "Noticia" && <NewsSegment posts={postsNews} />}

        {currentSegment === "Oportunidad" && <OpportunitySegment posts={postsOpportunities} />}
        {/* <EventCard onClick={onClickCard} /> */}
      </IonContent>
    </IonPage>
  );
};
export default Posts;

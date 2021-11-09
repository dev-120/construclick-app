import {
  IonPage,
  IonIcon,
  IonContent,
  IonFab,
  IonFabButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
} from "@ionic/react";
import React, { useEffect } from "react";
import { add } from "ionicons/icons";

import "./Management.css";
import Header from "../../components/Header/Header";
import usePosts from "../../hooks/usePosts";

type Props = {
  history: {
    push: Function;
  };
};

const ManagementPage: React.FC<Props> = ({ history }) => {
  const { projectsPosts, fetchProjects } = usePosts();
  useEffect(() => {
    fetchProjects();
  }, [])
  return (
    <IonPage>
      <Header canBack={false} title="Gestion de obra" />
      <IonContent>
        {projectsPosts ? (
          <div className="container-management">
            {projectsPosts.map((project: any) => (
              <IonCard key={project._id}>
                <IonCardHeader>{project.title}</IonCardHeader>
                <IonCardContent>
                    <IonImg src={project.imagesUrl[0]} />
                </IonCardContent>
              </IonCard>
            ))}
          </div>
        ) : (
          <div className="container-management">
          <span className="empty_project_message">
            No tienes aun ningun proyecto creado
          </span>
        </div>
        )}
        
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon  onClick={() => {
              history.push('/create-project')
            }} icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
export default ManagementPage;

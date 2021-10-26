import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import { useHistory } from "react-router";

import "./Drywall.css";
import Header from "../../components/Header/Header";
import DrywallCeilingImg from "../../assets/drywall_ceiling.png"

interface DrywallProps {
  match: {
    url: string;
  };
}


const Drywall: React.FC<DrywallProps> = ({ match }) => {
  const history = useHistory();

  const onClickCardHandler = (path: string, state: string) => {
    history.push({ pathname: `${match.url}/${path}`, state: { name: state } })
  }

  return (
    <IonPage>
      <IonPage>
        <IonContent fullscreen className="Drywall-content__style">
          <Header canBack href="/calculator" />
          <IonCard>
            <IonCardHeader className="Drywall-menu__style">
              <IonCardTitle className="ion-text-center">
                Drywall
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem
                lines="none"
                className="ion-margin-vertical"
                button
                onClick={() => onClickCardHandler("drywall-ceiling", "drywall-ceiling")}
              >
                <img src={DrywallCeilingImg} slot="start" className="Drywall-image__style" alt="" />
                <IonGrid>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>Cielo raso en drywall</IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default Drywall;
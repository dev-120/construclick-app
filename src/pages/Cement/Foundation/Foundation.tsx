import {
  IonPage,
  IonContent,
  IonText,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonItem,
} from "@ionic/react";
import { useHistory } from "react-router";

import "./Foundation.css";
import Header from "../../../components/Header/Header";
import Beam from "../../../assets/viga.png";
import FoundationImg from "../../../assets/zapata.png";

interface FoundationProps {
  match: {
    url: string;
  };
}


const Foundation: React.FC<FoundationProps> = ({ match }) => {
  const history = useHistory()
  const onClickCardHandler = (path: string) => {
    history.push({ pathname: `${match.url}/${path}`, state: { name: path } })
  }
  return (
    <IonPage>
      <IonContent fullscreen className="Foundation-content__style">
        <Header canBack href="/calculator/concrete" />
        <IonCard>
          <IonCardHeader className="Foundation-menu__style">
            <IonCardTitle className="ion-text-center">Cimentación</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem
              lines="none"
              className="ion-margin-vertical"
              button
              onClick={() => onClickCardHandler('beam')}
            >
              <img
                src={Beam}
                slot="start"
                className="Foundation-image__style"
                alt=""
              />
              <IonText>Viga cimentación</IonText>
            </IonItem>
            <IonItem
              lines="none"
              className="ion-margin-vertical"
              button
              onClick={() => onClickCardHandler('zapata')}
            >
              <img
                src={FoundationImg}
                slot="start"
                className="Foundation-image__style"
                alt=""
              />
              <IonText>Zapata</IonText>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};


export default Foundation;

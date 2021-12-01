import {
  IonPage,
  IonContent,
  IonText,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

import "./SolidBrick.css";
import Header from "../../../components/Header/Header";
import SolidBrickImg from "../../../assets/solid_brick.png";

interface SolidBrickProps {
  match: {
    url: string;
  };
  location: any;
}

const menuSolidBrick = [
  {brickType: "Ladrilo macizo", size: "(6 x 10 x 25)", linkTo: "/solid", name: "solid"},
  {brickType: "Perforado", size: "(6 x 10 x 25)", linkTo: "/perforated", name: "perforated"},
  {brickType: "Prensado", size: "(6 x 10 x 25)", linkTo: "/pressing", name: "pressing"},
  {brickType: "Ladrillo macizo", size: "(Selección dimensiones)", linkTo: "/personalized", name: "personalized"},
]


interface menuSolidBrickProps{
  brickType: string;
  size: string;
  linkTo: string;
  name: string;
}

const SolidBrick: React.FC<SolidBrickProps> = ({ match, location }) => {
  const history = useHistory();
  const onClickCardHandler = (path: string, state: string) =>{
    history.push({ pathname: `${match.url}${path}`, state: {...location.state, name: state} })
    localStorage.removeItem("brick-size");
    localStorage.setItem("brick-size", state);
  }
  return (
    <IonPage>
      <IonContent fullscreen className="SolidBrick-content__style">
        <Header canBack href="/calculator/walls" />
        <IonCard>
          <IonCardHeader className="SolidBrick-menu__style">
            <IonCardTitle className="ion-text-center">
              Ladrillo macizo
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {menuSolidBrick.map(({brickType, size, linkTo, name}: menuSolidBrickProps) => (
              <IonItem
              lines="none"
              className="ion-margin-vertical"
              button
              onClick={() => onClickCardHandler(linkTo, name)}
              key={linkTo}
            >
              <img
                src={SolidBrickImg}
                slot="start"
                className="SolidBrick-image__style"
                alt=""
              />
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <IonText>{brickType}</IonText>
                  </IonCol>
                  <IonCol size="12">
                    <IonText>{size}</IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            ))}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SolidBrick;

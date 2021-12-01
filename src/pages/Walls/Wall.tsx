import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonItem,
} from "@ionic/react";
import { useHistory } from 'react-router-dom'

import "./Walls.css";
import Brick from "../../assets/brick.png";
import CeramicBrick from "../../assets/ceramic_brick.png";
import SolidBrick from "../../assets/solid_brick.png";

import Header from '../../components/Header/Header'

const submenuWalls= [
  {
    submenuTitle: "Bloque Cemento",
    imgSrc: Brick,
    linkTo: "/brick",
    pathState: { mainMenu: "brick" }
  },
  {
    submenuTitle: "Ladrillo ceramico",
    imgSrc: CeramicBrick,
    linkTo: "/ceramic-brick",
    pathState: { mainMenu: "ceramic-brick" }
  },
  {
    submenuTitle: "Ladrillo macizo",
    imgSrc: SolidBrick,
    linkTo: "/solid-brick",
    pathState: { mainMenu: "solid-brick" }
  },
];

interface submenuProps {
  submenuTitle: string;
  imgSrc: string;
  linkTo: string;
  pathState: { mainMenu: string };
}

interface wallsProps{
  match: {
    url: string;
  }
}

const Walls:React.FC<wallsProps> = ({ match }) => {
  const history = useHistory();

  const onClickCardHandler = (path: string, state: { mainMenu: string }) => {
    history.push({ pathname: `${match.url}${path}`, state})
    localStorage.removeItem("brick-name");
    localStorage.setItem("brick-name", state.mainMenu);
  }
  return (
    <IonPage>
      <Header canBack href="/calculator" />
      <IonContent className="Walls-menu__page">
        {submenuWalls.map(
          ({ submenuTitle, imgSrc, linkTo, pathState }: submenuProps, index) => (
            <IonItem key={index} lines="none">
              <IonCard color="light" button onClick={() => onClickCardHandler(linkTo, pathState)} mode="md">
                <IonCardHeader className="Walls-card__style">
                  <IonCardTitle className="ion-text-center">{submenuTitle}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <img  src={imgSrc} alt="menu"/>
                </IonCardContent>
              </IonCard>
            </IonItem>
          )
        )}
      </IonContent>
    </IonPage>
  );
};

export default Walls;
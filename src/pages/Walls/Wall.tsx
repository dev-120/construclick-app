import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
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
  },
  {
    submenuTitle: "Ladrillo ceramico",
    imgSrc: CeramicBrick,
    linkTo: "/ceramic-brick",
  },
  {
    submenuTitle: "Ladrillo macizo",
    imgSrc: SolidBrick,
    linkTo: "/solid-brick",
  },
];

interface submenuProps {
  submenuTitle: string;
  imgSrc: string;
  linkTo: string;
}

interface wallsProps{
  match: {
    url: string;
  }
}

const Walls:React.FC<wallsProps> = ({ match }) => {
  const history = useHistory();
  return (
    <IonPage>
      <Header canBack href="/calculator" />
      <IonContent className="Walls-menu__page">
        {submenuWalls.map(
          ({ submenuTitle, imgSrc, linkTo }: submenuProps, index) => (
            <IonItem key={index} lines="none">
              <IonCard color="light" button routerLink={`${match.url}${linkTo}`} mode="md">
                <IonCardHeader className="Walls-card__style">
                  <IonCardTitle className="ion-text-center">{submenuTitle}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <img  src={imgSrc}/>
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
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

import "./Cement.css";
import Beam from "../../assets/viga.png";
import Slabs from "../../assets/losas.png";
import Foundation from "../../assets/cimentacion.png";
import Column from "../../assets/columna.png";
import Stairs from "../../assets/escalera.png";

import Header from '../../components/Header/Header'

const submenuConcrete = [
  {
    submenuTitle: "Cimentación",
    imgSrc: Foundation,
    linkTo: "/foundation",
  },
  {
    submenuTitle: "Columna",
    imgSrc: Column,
    linkTo: "/column",
  },
  {
    submenuTitle: "Vigas",
    imgSrc: Beam,
    linkTo: "/beam",
  },
  {
    submenuTitle: "Losas",
    imgSrc: Slabs,
    linkTo: "/slabs",
  },
  {
    submenuTitle: "Escaleras",
    imgSrc: Stairs,
    linkTo: "/stairs",
  },
];

interface submenuProps {
  submenuTitle: string;
  imgSrc: string;
  linkTo: string;
}

interface cementProps{
  match: {
    url: string;
  }
}

const Cement:React.FC<cementProps> = ({ match }) => {
  const history = useHistory();
  return (
    <IonPage>
      <Header canBack href="/calculator" />
      <IonContent className="Concrete-menu__page">
        {submenuConcrete.map(
          ({ submenuTitle, imgSrc, linkTo }: submenuProps, index) => (
            <IonItem key={index} lines="none">
              <IonCard color="light" button routerLink={`${match.url}${linkTo}`} mode="md">
                <IonCardHeader className="Concrete-card__style">
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

export default Cement;

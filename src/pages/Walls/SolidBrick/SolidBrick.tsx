import {
  IonPage,
  IonContent,
  IonSlide,
  IonSlides,
  IonText,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCardHeader,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  IonRouterOutlet,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { RouteComponentProps, Switch } from "react-router";

import "./SolidBrick.css";
import Header from "../../../components/Header/Header";
import SolidBrickImg from "../../../assets/solid_brick.png";
import WhatsappIcon from "../../../assets/whatsapp_icon.png";
import EmailIcon from "../../../assets/email_icon.png";
import TelegramIcon from "../../../assets/telegram_icon.png";

interface SolidBrickProps {
  match: {
    url: string;
  };
}

interface CheckedOption {
  title: string;
  isChecked: boolean;
  imageSrc: string;
}

const menuSolidBrick = [
  {brickType: "Ladrilo macizo", size: "(6 x 10 x 25)", linkTo: "/solid"},
  {brickType: "Perforado", size: "(6 x 10 x 25)", linkTo: "/perforated"},
  {brickType: "Prensado", size: "(6 x 10 x 25)", linkTo: "/pressing"},
  {brickType: "Ladrillo macizo", size: "(Selección dimensiones)", linkTo: "/personalized"},
]

// const SolidBrickPage: React.FC = () => {
//   return (
//     <>
//       <Route
//         path="/calculator/walls/solid-brick"
//         component={SolidBrick}
//       />
//     </>
//   );
// };

interface menuSolidBrickProps{
  brickType: string;
  size: string;
  linkTo: string;
}

const SolidBrick: React.FC<SolidBrickProps> = ({ match }) => {
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
            {menuSolidBrick.map(({brickType, size, linkTo}: menuSolidBrickProps) => (
              <IonItem
              lines="none"
              className="ion-margin-vertical"
              button
              routerLink={`${match.url}${linkTo}`}
              key={linkTo}
            >
              <img
                src={SolidBrickImg}
                slot="start"
                className="SolidBrick-image__style"
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

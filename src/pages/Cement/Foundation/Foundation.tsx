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

import "./Foundation.css";
import Header from "../../../components/Header/Header";
import Beam from "../../../assets/viga.png";
import Pile from "../../../assets/pilote.png";
import FoundationImg from "../../../assets/zapata.png";
import FoundationDimesions from "../../../assets/dimensiones_zapata.png";
import WhatsappIcon from "../../../assets/whatsapp_icon.png";
import EmailIcon from "../../../assets/email_icon.png";
import TelegramIcon from "../../../assets/telegram_icon.png";
import Cement from "../Cement";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

interface FoundationProps {
  match: {
    url: string;
  };
}

const FoundationOptions = [
  { title: "Viga cimentación", isChecked: false, imageSrc: Beam },
  { title: "Zapata", isChecked: false, imageSrc: FoundationImg },
  { title: "Pilote", isChecked: false, imageSrc: Pile },
];

interface CheckedOption {
  title: string;
  isChecked: boolean;
  imageSrc: string;
}

// const FoundationPage: React.FC<RouteComponentProps> = ({ match }) => {
//   return (
//     <Switch>
//       <Route exact path={`${match.url}`} component={Foundation} />
//       <Route path={`${match.url}/zapata`} component={OptionFoundation} />
//       <Route path={`${match.url}/zapata`} component={OptionFoundation} />
//     </Switch>
//   );
// };


// const FoundationPage: React.FC = () => {
//   return (
//     <>
//       <Route exact path="/calculator/concrete/foundation/zapata" component={OptionFoundation} />
//       <Route path="/calculator/concrete/foundation" component={Foundation}/>
//     </>
//   )
// }

const Foundation: React.FC<FoundationProps> = ({ match }) => {
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
              routerLink={`${match.url}/beam`}
            >
              <img
                src={Beam}
                slot="start"
                className="Foundation-image__style"
              />
              <IonText>Viga cimentación</IonText>
            </IonItem>
            <IonItem
              lines="none"
              className="ion-margin-vertical"
              button
              routerLink={`${match.url}/zapata`}
            >
              <img
                src={FoundationImg}
                slot="start"
                className="Foundation-image__style"
              />
              <IonText>Zapata</IonText>
            </IonItem>
            <IonItem
              lines="none"
              className="ion-margin-vertical"
              button
              routerLink={`${match.url}/pile`}
            >
              <img
                src={Pile}
                slot="start"
                className="Foundation-image__style"
              />
              <IonText>Pilote</IonText>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};


export default Foundation;

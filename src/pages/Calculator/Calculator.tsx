import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonAvatar,
  IonItem,
  IonIcon
} from "@ionic/react";
import {
  newspaperOutline,
  pricetagOutline,
  cartOutline,
  peopleOutline,
  closeOutline,
  calculator,
  business,
} from "ionicons/icons";
import React from "react";
import { useHistory } from 'react-router-dom'
import { chevronBack, notifications } from "ionicons/icons";

import Header from "../../components/Header/Header";
import "./Calculator.css";

const menuCalculator = [
  [
    {
      id: 0,
      imgsrc: business,
      buttonTitle: "Hormigón",
      linkTo: "/concrete",
    },
    {
      id: 1,
      imgsrc: "",
      buttonTitle: "Muros",
      linkTo: "/walls",
    },
  ],
  [
    {
      id: 2,
      imgsrc: "",
      buttonTitle: "Revoque",
      linkTo: "/revoke",
    },
    {
      id: 3,
      imgsrc: "",
      buttonTitle: "Pisos/enchape",
      linkTo: "/tiles",
    },
  ],
  [
    {
      id: 4,
      imgsrc: "",
      buttonTitle: "Estuco",
      linkTo: "/stucco",
    },
    {
      id: 5,
      imgsrc: "",
      buttonTitle: "Pintura",
      linkTo: "/paint",
    },
  ],
  [
    {
      id: 6,
      imgsrc: "",
      buttonTitle: "Drywall",
      linkTo: "/drywall",
    },
    {
      id: 7,
      imgsrc: "",
      buttonTitle: "Cubierta",
      linkTo: "/cover",
    },
  ],
];

interface calculatorProps{
  match: {
    url: string;
  }
}

const Calculator: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent fullscreen className="Calculator-content__style">
        <Header canBack={true} />
        <IonGrid>
          {menuCalculator.map((optionMenus, index) => (
            <IonRow key={index} className="ion-align-items-center">
              {optionMenus.map((option) => (
                <IonCol
                  key={option.id}
                  className="ion-align-self-center Calculator-menu__column"
                >
                  <IonButton
                    fill="clear"
                    className="Calculator-menu__buttonIcon"
                    expand="block"
                  >
                    <IonIcon
                      slot="icon-only"
                      icon={business}
                      className="Calculator-menu__icon"
                    />
                  </IonButton>
                  <IonButton fill="outline" className="outline-menu__options" routerLink={`/calculator${option.linkTo}`}>
                    {option.buttonTitle}
                  </IonButton>
                </IonCol>
              ))}
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Calculator;

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
import { Redirect, Route } from "react-router-dom";
import Header from "../../../components/Header/Header";

import CeramicBrickImg from '../../../assets/ceramic_brick.png'

// const BrickPage: React.FC = () => {
//   return (
//     <>
//       <Route path="/calculator/walls/brick" component={Brick} />
//       <Route exact path="calculator/walls/brick/:size" />
//     </>
//   );
// };

const menuBrick = [
  { brickType: "3 Agujeros", size: "(10 x 20 x 40)", linkTo: "3" },
  { brickType: "6 Agujeros", size: "(10 x 20 x 40)", linkTo: "6" },
  { brickType: "9 Agujeros", size: "(10 x 20 x 40)", linkTo: "9" },
  { brickType: "12 Agujeros", size: "(10 x 20 x 40)", linkTo: "12" },
  {
    brickType: "N° Agujeros",
    size: "(Selección dimensiones)",
    linkTo: "personalized",
  },
];

interface CeramicBrickProps {
  match: {
    url: string;
  };
}


interface menuCeramicBrickProps {
  brickType: string;
  size: string;
  linkTo: string;
}

const CeramicBrick: React.FC<CeramicBrickProps> = ({ match }) => {
  return (
    <IonPage>
      <IonPage>
        <IonContent fullscreen className="SolidBrick-content__style">
          <Header canBack href="/calculator/walls" />
          <IonCard>
            <IonCardHeader className="SolidBrick-menu__style">
              <IonCardTitle className="ion-text-center">
                Ladrillo Ceramico
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {menuBrick.map(
                ({ brickType, size, linkTo }: menuCeramicBrickProps) => (
                  <IonItem
                    lines="none"
                    className="ion-margin-vertical"
                    button
                    routerLink={`${match.url}/${linkTo}`}
                    key={linkTo}
                  >
                    <img
                      src={CeramicBrickImg}
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
                )
              )}
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default CeramicBrick;

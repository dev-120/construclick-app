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
import { useHistory } from "react-router-dom";
import Header from "../../../components/Header/Header";

import "./Brick.css";
import BrickImg from '../../../assets/brick.png'

// const BrickPage: React.FC = () => {
//   return (
//     <>
//       <Route path="/calculator/walls/brick" component={Brick} />
//       <Route exact path="calculator/walls/brick/:size" />
//     </>
//   );
// };

const menuBrick = [
  { brickType: "Bloque N°10", size: "(10 x 20 x 40)", linkTo: "/10", subMenu: "block10" },
  { brickType: "Bloque N°15", size: "(15 x 20 x 40)", linkTo: "/15", subMenu: "block15" },
  { brickType: "Bloque N°20", size: "(20 x 20 x 40)", linkTo: "/20", subMenu: "block20" },
  { brickType: "Bloque N°25", size: "(25 x 20 x 40)", linkTo: "/25", subMenu: "block25" },
  {
    brickType: "Ladrillo macizo",
    size: "(Selección dimensiones)",
    linkTo: "/personalized",
    subMenu: "personalized",
  },
];

interface BrickProps {
  match: {
    url: string;
  };
  location: any;
}


interface menuBrickProps {
  brickType: string;
  size: string;
  linkTo: string;
  subMenu: string;
}

const Brick: React.FC<BrickProps> = ({ match, location }) => {
  const history = useHistory();
  const onClickCardHandler = (path: string, state: string) =>{
    history.push({ pathname: `${match.url}${path}`, state: {...location.state, subMenu: state} })
  }

  return (
    <IonPage>
      <IonPage>
        <IonContent fullscreen className="SolidBrick-content__style">
          <Header canBack href="/calculator/walls" />
          <IonCard>
            <IonCardHeader className="SolidBrick-menu__style">
              <IonCardTitle className="ion-text-center">
                Bloque Cemento
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {menuBrick.map(
                ({ brickType, size, linkTo, subMenu}: menuBrickProps) => (
                  <IonItem
                    lines="none"
                    className="ion-margin-vertical"
                    button
                    onClick={() => onClickCardHandler(linkTo, subMenu)}
                    key={linkTo}
                  >
                    <img
                      src={BrickImg}
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
                )
              )}
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default Brick;

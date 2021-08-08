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

import "./Column.css";
import Header from "../../../components/Header/Header";
import RoundColumnImg from "../../../assets/round_column.png";
import SquareColumnImg from "../../../assets/square_column.png";

interface ColumnProps {
  match: {
    url: string;
  };
}

const ColumnOptions = [
  { title: "Columna rectangular", imgSrc: SquareColumnImg, linkTo: "square-column" },
  { title: "Columna circular", imgSrc: RoundColumnImg,  linkTo: "round-column" },
];

const Column: React.FC<ColumnProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent fullscreen className="Foundation-content__style">
        <Header canBack href="/calculator/concrete" />
        <IonCard>
          <IonCardHeader className="Foundation-menu__style">
            <IonCardTitle className="ion-text-center">Columna</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {ColumnOptions.map(({ title, imgSrc, linkTo }) => (
              <IonItem
                key={title}
                lines="none"
                className="ion-margin-vertical"
                button
                routerLink={`${match.url}/${linkTo}`}
              >
                <img
                  src={imgSrc}
                  slot="start"
                  className="Foundation-image__style"
                />
                <IonText>{title}</IonText>
              </IonItem>
            ))}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Column;

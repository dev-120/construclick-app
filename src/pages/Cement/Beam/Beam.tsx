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

import "./Beam.css";
import Header from "../../../components/Header/Header";
import StructuralBeamImg from "../../../assets/structural_beam.png";
import ConfinementBeamImg from "../../../assets/confinement_beam.png"

interface BeamProps {
  match: {
    url: string;
  };
}

const BeamOptions = [
  { title: "Viga estructural", imgSrc: StructuralBeamImg, linkTo: "structural-beam" },
  { title: "Vigueta de confinamiento", imgSrc: ConfinementBeamImg,  linkTo: "confinement-beam" },
];

const Beam: React.FC<BeamProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent fullscreen className="Foundation-content__style">
        <Header canBack href="/calculator/concrete" />
        <IonCard>
          <IonCardHeader className="Foundation-menu__style">
            <IonCardTitle className="ion-text-center">Viga</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {BeamOptions.map(({ title, imgSrc, linkTo }) => (
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
                  alt=""
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

export default Beam;

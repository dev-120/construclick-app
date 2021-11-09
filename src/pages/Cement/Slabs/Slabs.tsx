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

import "./Slabs.css";
import Header from "../../../components/Header/Header";
import MetaldeckSlabImg from "../../../assets/metaldeck_slab.png";
import SolidSlabImg from "../../../assets/solid_slab.png";
import BlockSlabImg from "../../../assets/block_slab.png";
import LightenedSlabImg from "../../../assets/lightened_slab.png";

interface BeamProps {
  match: {
    url: string;
  };
}

const SlabOptions = [
  { title: "Losa aligerada\nplaca facil", imgSrc: BlockSlabImg, linkTo: "block-slab" },
  { title: "Losa aligerada\ncon icopor", imgSrc: LightenedSlabImg,  linkTo: "lightened-slab" },
  { title: "Losa maciza", imgSrc: SolidSlabImg , linkTo: "solid-slab"},
  { title: "Losa metaldeck", imgSrc: MetaldeckSlabImg, linkTo: "metaldeck-slab"}
];

const Slabs: React.FC<BeamProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent fullscreen className="Foundation-content__style">
        <Header canBack href="/calculator/concrete" />
        <IonCard>
          <IonCardHeader className="Foundation-menu__style">
            <IonCardTitle className="ion-text-center">Losas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {SlabOptions.map(({ title, imgSrc, linkTo }) => (
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

export default Slabs;

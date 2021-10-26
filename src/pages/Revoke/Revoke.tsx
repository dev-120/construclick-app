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

import "./Revoke.css";
import Header from "../../components/Header/Header";
import CoatingImg from "../../assets/coating.png";
import WaterproofCoatingImg from "../../assets/waterproof_coating.png";
import FloorTemplateImg from "../../assets/floor_template.png";
import WaterproofFloorTemplateImg from "../../assets/waterproof_floor_template.png";

const menuRevoke = [
  { type: "Pañete allanado", linkTo: "coating", imgSrc: CoatingImg },
  {
    type: "Pañete allanado impermeable",
    linkTo: "waterprofing-coating",
    imgSrc: WaterproofCoatingImg,
  },
  {
    type: "Plantilla de piso",
    linkTo: "floor-template",
    imgSrc: FloorTemplateImg,
  },
  {
    type: "Plantilla de piso impermeable",
    linkTo: "waterproof-floor-template",
    imgSrc: WaterproofFloorTemplateImg,
  },
];

interface RevokeProps {
  match: {
    url: string;
  };
}

interface menuRevokeProps {
  type: string;
  linkTo: string;
  imgSrc: any;
}

const Revoke: React.FC<RevokeProps> = ({ match }) => {
  const history = useHistory();

  const onClickCardHandler = (path: string) => {
    history.push({
      pathname: `${match.url}/${path}`,
      state: {
        name: path,
      },
    });
  };

  return (
    <IonPage>
      <IonPage>
        <IonContent fullscreen className="Revoke-content__style">
          <Header canBack href="/calculator" />
          <IonCard>
            <IonCardHeader className="Revoke-menu__style">
              <IonCardTitle className="ion-text-center">Revoque</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {menuRevoke.map(({ type, linkTo, imgSrc }: menuRevokeProps) => (
                <IonItem
                  lines="none"
                  className="ion-margin-vertical"
                  button
                  key={linkTo}
                  onClick={() => onClickCardHandler(linkTo)}
                >
                  <img
                    src={imgSrc}
                    slot="start"
                    className="Revoke-image__style"
                    alt=""
                  />
                  <IonGrid>
                    <IonRow>
                      <IonCol size="12">
                        <IonText>{type}</IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              ))}
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default Revoke;

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import CoatingImg from "../../assets/coating.png";
import WaterproofCoatingImg from "../../assets/waterproof_coating.png";
import FloorTemplateImg from "../../assets/floor_template.png";
import WaterproofFloorTemplateImg from "../../assets/waterproof_floor_template.png";
import WhatsappIcon from "../../assets/whatsapp_icon.png";
import TelegramIcon from "../../assets/telegram_icon.png";
import EmailIcon from "../../assets/email_icon.png"

interface RevokeCalculatorProps {
  match: {
    params: {
      type: string;
    };
  };
}

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

const RevokeCalculator: React.FC<RevokeCalculatorProps> = ({ match }) => {
  const [calculate, setCalculte] = useState<boolean>(false);
  const [menuOption, setMenuOption] = useState(Object || null);
  const [wallArea, setWallArea] = useState<number>(0)
  const [wallOpenings, setWallOpening] = useState<number>(0)
  const [coatingThickness, setCoatingThickness] = useState<number>(0)

  useEffect(() => {
    setMenuOption(
      menuRevoke.filter((option) => option.linkTo === match.params.type)[0]
    );
  }, [match]);

  const clickHandler = () => {
    setCalculte(true)
  }

  return (
    <IonPage>
      <Header canBack href="/calculator/revoke" />
      <IonContent className="Foundation-content__style">
        {!calculate ? (
          <>
            <IonItem
              className="ion-margin-top ion-margin-horizontal"
              color="primary"
            >
              <img
                slot="start"
                src={menuOption.imgSrc}
                className="Foundation-sidepanel__img"
              />
              <IonGrid>
                <IonRow>
                  <IonCol size="12" className="ion-text-center">
                    <IonText>
                      <h4>{menuOption.type}</h4>
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <IonGrid>
                <IonRow>
                  <p>Área del Muro:</p>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                  <IonCol size="6">
                    <h5>Ingrese Área (m2): </h5>
                  </IonCol>
                  <IonCol size="6" className="ion-text-center">
                    <IonInput
                      value={wallArea}
                      onIonChange={(e) => setWallArea(parseInt(e.detail.value!))}
                      type="number"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <IonGrid>
                <IonRow>
                  <p>Área aperturas:</p>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                  <IonCol size="6">
                    <h5>Área descontada por (Puertas, Ventanas) (m2): </h5>
                  </IonCol>
                  <IonCol size="6" className="ion-text-center">
                    <IonInput
                      value={wallOpenings}
                      onIonChange={(e) => setWallOpening(parseInt(e.detail.value!))}
                      type="number"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <IonGrid>
                <IonRow>
                  <p>Espesor del pañete:</p>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                  <IonCol size="6">
                    <h5>Ingrese Espesor (cm) </h5>
                  </IonCol>
                  <IonCol size="6" className="ion-text-center">
                    <IonInput
                      value={coatingThickness}
                      onIonChange={e => setCoatingThickness(parseInt(e.detail.value!))}
                      type="number"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonButton
              expand="full"
              size="large"
              className="ion-margin-horizontal"
              onClick={clickHandler}
            >
              Calcular
            </IonButton>
          </>
        ) : (
          <RevokeResult {...menuOption} />
        )}
      </IonContent>
    </IonPage>
  );
};



interface menuRevokeProps {
  type: string;
  linkTo: string;
  imgSrc: any;
}



const RevokeResult: React.FC<menuRevokeProps> = ({
  type,
  linkTo,
  imgSrc,
}) => {
  return (
    <>
      <IonItem className="ion-margin-top ion-margin-horizontal" color="primary">
        <img
          slot="start"
          src={imgSrc}
          className="Foundation-sidepanel__img"
        />
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonText>
                <h4>{type}</h4>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem className="ion-margin-horizontal">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem className="ion-text-center" color="primary">
                <h4>TOTAL MATERIALES</h4>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Descripción</IonCol>
            <IonCol className="ion-text-center">Cantidad</IonCol>
            <IonCol className="ion-text-center">Unidad</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Cemento</IonCol>
            <IonCol className="ion-text-center">24</IonCol>
            <IonCol className="ion-text-center">Bulto 50Kg</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Sika 1</IonCol>
            <IonCol className="ion-text-center">34,3</IonCol>
            <IonCol className="ion-text-center">Kilos</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center" size="4">
              Arena
            </IonCol>
            <IonCol className="ion-text-center" size="4">
              3,085 171,4
            </IonCol>
            <IonCol className="ion-text-center" size="4">
              m3 Latas 18L
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Agua</IonCol>
            <IonCol className="ion-text-center">1249,6</IonCol>
            <IonCol className="ion-text-center">Litros</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <img src={WhatsappIcon} className="Foundation-Result__icon" />
            </IonCol>
            <IonCol className="ion-text-center">
              <img src={TelegramIcon} className="Foundation-Result__icon" />
            </IonCol>
            <IonCol className="ion-text-center">
              <img src={EmailIcon} className="Foundation-Result__icon" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    </>
  );
};

export default RevokeCalculator;

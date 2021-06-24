import {
  IonCol,
  IonButton,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import { useState, useEffect } from "react";

import "./PaintCalculator.css";
import Header from "../../components/Header/Header";
import InteriorPaintImg from "../../assets/interior_paint.png";
import ExteriorPaintImg from "../../assets/exterior_paint.png";
import WhatsappIcon from "../../assets/whatsapp_icon.png";
import TelegramIcon from "../../assets/telegram_icon.png";
import EmailIcon from "../../assets/email_icon.png";

const menuPaint= [
  { type: "Pintura interior", linkTo: "interior-painting", imgSrc: InteriorPaintImg },
  { type: "Pintura exterior", linkTo: "exterior-painting", imgSrc: ExteriorPaintImg }
]

interface PaintProps {
  match: {
    params: {
      type: string;
    };
  };
}

const StuccoCalculator: React.FC<PaintProps> = ({ match }) => {
  const [calculate, setCalculte] = useState<boolean>(false);
  const [menuOption, setMenuOption] = useState(Object || null);
  const [wallArea, setWallArea] = useState<number>(0);
  const [wallOpenings, setWallOpening] = useState<number>(0);
  const [paintCoating, setPaintCoating] = useState<number>(2);

  useEffect(() => {
    setMenuOption(
      menuPaint.filter((option) => option.linkTo === match.params.type)[0]
    );
  }, [match]);

  const clickHandler = () => {
    setCalculte(true);
  };

  return (
    <IonPage>
      <Header canBack href="/calculator/paint" />
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
                  <p>Área a estucar:</p>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                  <IonCol size="6">
                    <h5>Ingrese Área (m2): </h5>
                  </IonCol>
                  <IonCol size="6" className="ion-text-center">
                    <IonInput
                      value={wallArea}
                      onIonChange={(e) =>
                        setWallArea(parseInt(e.detail.value!))
                      }
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
                      onIonChange={(e) =>
                        setWallOpening(parseInt(e.detail.value!))
                      }
                      type="number"
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <IonGrid>
                <IonRow>
                  <p>Capas de pintura:</p>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                  <IonCol size="6">
                    <h5>Capas de pintura (manos) </h5>
                  </IonCol>
                  <IonCol size="6" className="ion-text-center">
                    <IonInput
                      value={paintCoating}
                      onIonChange={e => setPaintCoating(parseInt(e.detail.value!))}
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
          <PaintResult {...menuOption} />
        )}
      </IonContent>
    </IonPage>
  );
};

interface menuPaintProps {
  type: string;
  linkTo: string;
  imgSrc: any;
}

const PaintResult: React.FC<menuPaintProps> = ({ type, linkTo, imgSrc }) => {
  return (
    <>
      <IonItem className="ion-margin-top ion-margin-horizontal" color="primary">
        <img slot="start" src={imgSrc} className="Foundation-sidepanel__img" />
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
          {linkTo === "interior-painting" ? (
            <IonRow>
              <IonCol className="ion-text-center">Pintura Interior</IonCol>
              <IonCol className="ion-text-center">6,2</IonCol>
              <IonCol className="ion-text-center">Cuñete</IonCol>
            </IonRow>
          ) : (
            <IonRow>
              <IonCol className="ion-text-center">Pintura Exterior</IonCol>
              <IonCol className="ion-text-center">6,2</IonCol>
              <IonCol className="ion-text-center">Cuñete</IonCol>
            </IonRow>
          )}
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

export default StuccoCalculator;

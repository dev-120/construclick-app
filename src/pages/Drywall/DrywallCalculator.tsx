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

import "./DrywallCalculator.css";
import Header from "../../components/Header/Header";
import DrywallCeilingImg from "../../assets/drywall_ceiling.png";
import WhatsappIcon from "../../assets/whatsapp_icon.png";
import TelegramIcon from "../../assets/telegram_icon.png";
import EmailIcon from "../../assets/email_icon.png";

const DrywallCalculator: React.FC = () => {
  const [calculate, setCalculte] = useState<boolean>(false);
  const [wallArea, setWallArea] = useState<number>(0);
  const [wallOpenings, setWallOpening] = useState<number>(0);
  const [coatingThickness, setCoatingThickness] = useState<number>(2);

  const clickHandler = () => {
    setCalculte(true);
  };

  return (
    <IonPage>
      <Header canBack href="/calculator/tiles" />
      <IonContent className="Foundation-content__style">
        {!calculate ? (
          <>
            <IonItem
              className="ion-margin-top ion-margin-horizontal"
              color="primary"
            >
              <img
                slot="start"
                src={DrywallCeilingImg}
                className="Foundation-sidepanel__img"
              />
              <IonGrid>
                <IonRow>
                  <IonCol size="12" className="ion-text-center">
                    <IonText>
                      <h4>Cielo raso en drywall</h4>
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <IonGrid>
                <IonRow>
                  <p>Área cielo raso:</p>
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
                      value={coatingThickness}
                      onIonChange={(e) =>
                        setCoatingThickness(parseInt(e.detail.value!))
                      }
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
          <DrywallResult />
        )}
      </IonContent>
    </IonPage>
  );
};

const DrywallResult: React.FC = () => {
  return (
    <>
      <IonItem className="ion-margin-top ion-margin-horizontal" color="primary">
        <img
          slot="start"
          src={DrywallCeilingImg}
          className="Foundation-sidepanel__img"
        />
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonText>
                <h4>Cielo raso en drywall</h4>
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
            <IonCol className="ion-text-center">
              {"Placa drywall\n(1,22m x 2,44m)"}
            </IonCol>
            <IonCol className="ion-text-center">12,2</IonCol>
            <IonCol className="ion-text-center">Unidad</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Pintura Tipo 2</IonCol>
            <IonCol className="ion-text-center">1</IonCol>
            <IonCol className="ion-text-center">Galon</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Estuco plastico</IonCol>
            <IonCol className="ion-text-center">1,6</IonCol>
            <IonCol className="ion-text-center">Cuñete</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Angulo 2 x 2</IonCol>
            <IonCol className="ion-text-center">14,7</IonCol>
            <IonCol className="ion-text-center">Unidad</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Vigueta Cal.26</IonCol>
            <IonCol className="ion-text-center">9,6</IonCol>
            <IonCol className="ion-text-center">Unidad</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Perfil Z</IonCol>
            <IonCol className="ion-text-center">5,9</IonCol>
            <IonCol className="ion-text-center">Unidad</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">{"Cinta papel\nx 50m"}</IonCol>
            <IonCol className="ion-text-center">1,6</IonCol>
            <IonCol className="ion-text-center">Unidad</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Tornillo de placa</IonCol>
            <IonCol className="ion-text-center">640</IonCol>
            <IonCol className="ion-text-center">Unidad</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              {"Cinta Malla\nx 30m"}
            </IonCol>
            <IonCol className="ion-text-center">3,2</IonCol>
            <IonCol className="ion-text-center">Unidad</IonCol>
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

export default DrywallCalculator;

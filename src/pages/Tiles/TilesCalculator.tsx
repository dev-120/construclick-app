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

import "./TilesCalculator.css"
import Header from "../../components/Header/Header";
import CeramicFloorImg from "../../assets/ceramic_floor.png";
import PorcelainFloorImg from "../../assets/porcelain_floor.png";
import VeneerImg from "../../assets/veneer.png";
import WhatsappIcon from "../../assets/whatsapp_icon.png";
import TelegramIcon from "../../assets/telegram_icon.png";
import EmailIcon from "../../assets/email_icon.png";

const menuTiles = [
  { type: "Piso ceramico", linkTo: "ceramic-floor", imgSrc: CeramicFloorImg },
  {
    type: "Piso porcelanato",
    linkTo: "porcelain-floor",
    imgSrc: PorcelainFloorImg,
  },
  { type: "Enchape", linkTo: "veneer", imgSrc: VeneerImg },
];

interface TilesProps {
  match: {
    params: {
      type: string;
    };
  };
}

const StuccoCalculator: React.FC<TilesProps> = ({ match }) => {
  const [calculate, setCalculte] = useState<boolean>(false);
  const [menuOption, setMenuOption] = useState(Object || null);
  const [wallArea, setWallArea] = useState<number>(0);
  const [floorLongitude, setFloorLongitude] = useState<number>(0);
  const [floorWidth, setFloorWidth] = useState<number>(0);
  const [wallOpenings, setWallOpening] = useState<number>(0);
  const [coatingThickness, setCoatingThickness] = useState<number>(2);

  useEffect(() => {
    setMenuOption(
      menuTiles.filter((option) => option.linkTo === match.params.type)[0]
    );
  }, [match]);

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
              {menuOption.type === "Enchape" ? (
                <IonGrid>
                  <IonRow>
                    <p>Área de Enchape:</p>
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
              ) : (
                <IonGrid>
                  <IonRow>
                    <p>Medidas de área:</p>
                  </IonRow>
                  <IonRow className="ion-justify-content-center ion-align-items-center">
                    <IonCol size="6">
                      <h5>Ingrese Longitud (m): </h5>
                    </IonCol>
                    <IonCol size="6" className="ion-text-center">
                      <IonInput
                        value={floorLongitude}
                        onIonChange={(e) =>
                          setFloorLongitude(parseInt(e.detail.value!))
                        }
                        type="number"
                      />
                    </IonCol>
                  </IonRow>
                  <IonRow className="ion-justify-content-center ion-align-items-center">
                    <IonCol size="6">
                      <h5>Ingrese Anchura (m): </h5>
                    </IonCol>
                    <IonCol size="6" className="ion-text-center">
                      <IonInput
                        value={floorWidth}
                        onIonChange={(e) =>
                          setFloorWidth(parseInt(e.detail.value!))
                        }
                        type="number"
                      />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              )}
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
                  <p>Espesor de estuco:</p>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                  <IonCol size="6">
                    <h5>Ingrese Espesor (cm) </h5>
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
          <TilesResult {...menuOption} />
        )}
      </IonContent>
    </IonPage>
  );
};

interface menuTilesProps {
  type: string;
  linkTo: string;
  imgSrc: any;
}

const TilesResult: React.FC<menuTilesProps> = ({ type, linkTo, imgSrc }) => {
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
          <IonRow>
            <IonCol className="ion-text-center">
              {type === "Piso ceramico" && "Piso ceramico"}
              {type === "Piso porcelanato" && "Piso porcelanato"}
              {type === "Enchape" && "Enchape\nceramico/porcelanato"}
            </IonCol>
            <IonCol className="ion-text-center">35</IonCol>
            <IonCol className="ion-text-center">m2</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              {type === "Piso ceramico" && "Pegante para\npiso ceramico"}
              {type === "Piso porcelanato" && "Pegante para\npiso porcelanato"}
              {type === "Enchape" && "Pegante para\nceramico/porcelanato"}
            </IonCol>
            <IonCol className="ion-text-center">7,7</IonCol>
            <IonCol className="ion-text-center">Kilos</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Boquilla</IonCol>
            <IonCol className="ion-text-center">1,4</IonCol>
            <IonCol className="ion-text-center">Kilos</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Estopa</IonCol>
            <IonCol className="ion-text-center">11,6</IonCol>
            <IonCol className="ion-text-center">Kilos</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">{"Bolsa separadores\nde 5mm x 30Und"}</IonCol>
            <IonCol className="ion-text-center">3,5</IonCol>
            <IonCol className="ion-text-center">Unidades</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center" size="12">
              La cantidad total incluye los zocalos/rodapié
            </IonCol>
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

export default StuccoCalculator;

import {
  IonContent,
  IonItem,
  IonPage,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonButton,
  IonSkeletonText,
} from "@ionic/react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CALCULATOR_RESULT_FETCH, SET_CALCULATOR_INFORMATION } from "../../../store/actions/calculator.actions";

import CeramicBrickImg from "../../../assets/ceramic_brick.png"
import MortarJoint from "../../../assets/mortar_joint.png";
import Header from "../../../components/Header/Header";
import WhatsappIcon from "../../../assets/whatsapp_icon.png";
import EmailIcon from "../../../assets/email_icon.png";
import TelegramIcon from "../../../assets/telegram_icon.png";
import { dataFormatter } from "../../../utils/dataFormatter";
import useCommons from "../../../hooks/useCommons";

interface SolidBrickCalculatorProps {
  match: {
    params: {
      holes: string;
    };
  };
  location: any;
}

const menuCeramicBrick = [
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

const CeramicBrickCalculator: React.FC<SolidBrickCalculatorProps> = ({
  match,
  location,
}) => {
  const dispatch = useDispatch();
  const [Brick, setBrick] = useState(Object || null);
  const { loading } = useCommons();
  const { result } = useSelector((state: any) => state.calculator)
  const [calculate, setCalculate] = useState<boolean>(false);
  const [wallArea, setWallArea] = useState<number>(0);
  const [wallOpenings, setWallOpenings] = useState<number>(0);
  const [wallThickness, setWallThickness] = useState<number>(0);
  let calculatorName = localStorage.getItem("brick-name") as string;
  let calculatorSize = localStorage.getItem("brick-size") as string;

  useEffect(() => {
    setBrick(
      menuCeramicBrick.filter((item) => item.linkTo === match.params.holes)[0]
    );
  }, [match]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch({
      type: SET_CALCULATOR_INFORMATION,
      payload: {
        name: `${calculatorName}-${calculatorSize}`,
        data: {
          wallArea,
          wallOpenings,
          wallThickness,
        },
      },
    });
    dispatch({
      type: GET_CALCULATOR_RESULT_FETCH,
      payload: {
        name: `${calculatorName}-${calculatorSize}`,
        data: {
          wallArea,
          wallOpenings,
          wallThickness,
        },
      },
    });
    setCalculate(true);
  };

  return (
    <IonPage>
      <Header canBack href="/calculator/walls/brick" />
      <IonContent className="Foundation-content__style">
        <form onSubmit={submitHandler}>
          {!calculate ? (
            <>
              <IonItem
                className="ion-margin-top ion-margin-horizontal"
                color="primary"
              >
                <img
                  slot="start"
                  src={CeramicBrickImg}
                  className="Foundation-sidepanel__img"
                  alt=""
                />
                <IonGrid>
                  <IonRow>
                    <IonCol size="12" className="ion-text-center">
                      <IonText>
                        <h4>{Brick.brickType}</h4>
                      </IonText>
                    </IonCol>
                    <IonCol className="ion-text-center">
                      <IonText>
                        <h6>{Brick.size}</h6>
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
                        type="number"
                        required
                        min="0.01"step="any"
                        onIonChange={(e) =>
                          setWallArea(parseInt(e.detail.value!))
                        }
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
                        type="number"
                        required
                        min="0.01"step="any"
                        onIonChange={(e) =>
                          setWallOpenings(parseInt(e.detail.value!))
                        }
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
                      <img src={MortarJoint} alt="" />
                    </IonCol>
                    <IonCol size="6" className="ion-text-center">
                      <IonLabel position="floating">Espesor (cm)</IonLabel>
                      <IonInput
                        type="number"
                        value={wallThickness}
                        required
                        min="0.01"step="any"
                        onIonChange={(e) =>
                          setWallThickness(parseInt(e.detail.value!))
                        }
                      />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
              <IonButton
                expand="full"
                size="large"
                className="ion-margin-horizontal"
                type="submit"
              >
                Calcular
              </IonButton>
            </>
          ) : (
            <CeramicBrickResult {...Brick} loading={loading} result={result} />
          )}
        </form>
      </IonContent>
    </IonPage>
  );
};

interface CeramicBrickResultProps {
  brickType: string;
  size: string;
  sizeBrick: string;
  loading: boolean;
  result: any;
}

const CeramicBrickResult: React.FC<CeramicBrickResultProps> = ({
  brickType,
  size,
  sizeBrick,
  loading,
  result,
}) => {
  return (
    <>
      <IonItem className="ion-margin-top ion-margin-horizontal" color="primary">
        <img
          slot="start"
          src={CeramicBrickImg}
          className="Foundation-sidepanel__img"
          alt=""
        />
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonText>
                <h4>{brickType}</h4>
              </IonText>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonText>
                <h6>{size}</h6>
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
          {loading ? (
            <>
              <IonRow>
                <IonSkeletonText animated style={{ width: "100%" }} />
              </IonRow>
              <IonRow>
                <IonSkeletonText animated style={{ width: "100%" }} />
              </IonRow>
              <IonRow>
                <IonSkeletonText animated style={{ width: "100%" }} />
              </IonRow>
              <IonRow>
                <IonSkeletonText animated style={{ width: "100%" }} />
              </IonRow>
              <IonRow>
                <IonSkeletonText animated style={{ width: "100%" }} />
              </IonRow>
              <IonRow>
                <IonSkeletonText animated style={{ width: "100%" }} />
              </IonRow>
            </>
          ) : (
            <>
              {result.map(
                ({
                  name,
                  cuantity,
                  unit,
                }: {
                  name: string;
                  cuantity: string;
                  unit: string;
                }) => (
                  <IonRow key={name} className="ion-padding-vertical">
                    <IonCol className="ion-text-center">
                      {dataFormatter[name]}
                    </IonCol>
                    <IonCol className="ion-text-center">{cuantity}</IonCol>
                    <IonCol className="ion-text-center">{unit}</IonCol>
                  </IonRow>
                )
              )}
            </>
          )}
          <IonRow>
            <IonCol className="ion-text-center">
              <img
                src={WhatsappIcon}
                className="Foundation-Result__icon"
                alt="whatsapp"
              />
            </IonCol>
            <IonCol className="ion-text-center">
              <img
                src={TelegramIcon}
                className="Foundation-Result__icon"
                alt="telegram"
              />
            </IonCol>
            <IonCol className="ion-text-center">
              <img
                src={EmailIcon}
                className="Foundation-Result__icon"
                alt="email"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    </>
  );
};

export default CeramicBrickCalculator;

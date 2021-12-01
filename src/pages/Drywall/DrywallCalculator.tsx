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
  IonSkeletonText,
} from "@ionic/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./DrywallCalculator.css";
import Header from "../../components/Header/Header";
import DrywallCeilingImg from "../../assets/drywall_ceiling.png";
import WhatsappIcon from "../../assets/whatsapp_icon.png";
import TelegramIcon from "../../assets/telegram_icon.png";
import EmailIcon from "../../assets/email_icon.png";
import { GET_CALCULATOR_RESULT_FETCH, SET_CALCULATOR_INFORMATION } from "../../store/actions/calculator.actions";
import useCommons from "../../hooks/useCommons";
import { dataFormatter } from "../../utils/dataFormatter";

interface DrywallCalculatorProps {
  match: {
    params: {
      type: string;
    };
  };
  location: any;
}

const DrywallCalculator: React.FC<DrywallCalculatorProps> = ({ match }) => {
  const dispatch = useDispatch();
  const { loading } = useCommons();
  const { result } = useSelector((state: any) => state.calculator);
  const [calculate, setCalculate] = useState<boolean>(false);
  const [wallArea, setWallArea] = useState<number>(0);
  const [wallOpenings, setWallOpening] = useState<number>(0);
  const [coatingThickness, setCoatingThickness] = useState<number>(2);

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch({
      type: SET_CALCULATOR_INFORMATION,
      payload: {
        name: match.params.type,
        data: {
          wallArea,
          wallOpenings,
          coatingThickness,
        },
      },
    });
    dispatch({
      type: GET_CALCULATOR_RESULT_FETCH,
      payload: {
        name: match.params.type,
        data: {
          wallArea,
          wallOpenings,
          coatingThickness,
        },
      },
    })
    setCalculate(true);
  };

  return (
    <IonPage>
      <Header canBack href="/calculator/tiles" />
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
                  src={DrywallCeilingImg}
                  className="Foundation-sidepanel__img"
                  alt=""
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
                        required
                        min="1"
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
                        required
                        min="1"
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
                        required
                        min="1"
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
            <DrywallResult loading={loading} result={result} />
          )}
        </form>
      </IonContent>
    </IonPage>
  );
};

interface resultProps{
  loading: boolean;
  result: any;
}

const DrywallResult: React.FC<resultProps> = ({ loading, result }) => {
  return (
    <>
      <IonItem className="ion-margin-top ion-margin-horizontal" color="primary">
        <img
          slot="start"
          src={DrywallCeilingImg}
          className="Foundation-sidepanel__img"
          alt=""
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
          {/* <IonRow>
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
            <IonCol className="ion-text-center">{"Cinta Malla\nx 30m"}</IonCol>
            <IonCol className="ion-text-center">3,2</IonCol>
            <IonCol className="ion-text-center">Unidad</IonCol>
          </IonRow> */}
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

export default DrywallCalculator;

import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonSkeletonText,
  IonText,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { GET_CALCULATOR_RESULT_FETCH, SET_CALCULATOR_INFORMATION } from "../../store/actions/calculator.actions";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import CoatingImg from "../../assets/coating.png";
import WaterproofCoatingImg from "../../assets/waterproof_coating.png";
import FloorTemplateImg from "../../assets/floor_template.png";
import WaterproofFloorTemplateImg from "../../assets/waterproof_floor_template.png";
import WhatsappIcon from "../../assets/whatsapp_icon.png";
import TelegramIcon from "../../assets/telegram_icon.png";
import EmailIcon from "../../assets/email_icon.png";
import { dataFormatter } from "../../utils/dataFormatter";
import useCommons from "../../hooks/useCommons";

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
  const dispatch = useDispatch();
  const { loading } = useCommons();
  const { result } = useSelector((state: any) => state.calculator)
  const [calculate, setCalculate] = useState<boolean>(false);
  const [menuOption, setMenuOption] = useState(Object || null);
  const [wallArea, setWallArea] = useState<number>(0);
  const [wallOpenings, setWallOpening] = useState<number>(0);
  const [coatingThickness, setCoatingThickness] = useState<number>(0);

  useEffect(() => {
    setMenuOption(
      menuRevoke.filter((option) => option.linkTo === match.params.type)[0]
    );
  }, [match]);

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
      <Header canBack href="/calculator/revoke" />
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
                  src={menuOption.imgSrc}
                  className="Foundation-sidepanel__img"
                  alt=""
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
                    <p>Espesor del pañete:</p>
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
            <RevokeResult {...menuOption} loading={loading} result={result} />
          )}
        </form>
      </IonContent>
    </IonPage>
  );
};

interface menuRevokeProps {
  type: string;
  linkTo: string;
  imgSrc: any;
  loading: boolean;
  result: any;
}

const RevokeResult: React.FC<menuRevokeProps> = ({ type, linkTo, imgSrc, loading, result }) => {
  return (
    <>
      <IonItem className="ion-margin-top ion-margin-horizontal" color="primary">
        <img
          slot="start"
          src={imgSrc}
          className="Foundation-sidepanel__img"
          alt=""
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

export default RevokeCalculator;

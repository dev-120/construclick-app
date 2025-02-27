import {
  IonPage,
  IonContent,
  IonText,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  IonSkeletonText,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_CALCULATOR_RESULT_FETCH,
  SET_CALCULATOR_INFORMATION,
} from "../../../store/actions/calculator.actions";

import "./Foundation.css";
import Header from "../../../components/Header/Header";
import FoundationImg from "../../../assets/zapata.png";
import FoundationDimesions from "../../../assets/dimensiones_zapata.png";
import WhatsappIcon from "../../../assets/whatsapp_icon.png";
import EmailIcon from "../../../assets/email_icon.png";
import TelegramIcon from "../../../assets/telegram_icon.png";
import useCommons from "../../../hooks/useCommons";
import { dataFormatter } from "../../../utils/dataFormatter";
import BeamDimensionImg from "../../../assets/beam_dimensions.png";
import StructuralBeamImg from "../../../assets/structural_beam.png";

const FoundationOption = {
  EC: [
    { value: 3600, title: "3600PSI - 25MPa" },
    { value: 3300, title: "3300PSI - 23MPa" },
    { value: 3000, title: "3000PSI - 21MPa" },
    { value: 2750, title: "2750PSI - 19MPa" },
  ],
  ER: [
    { value: 5000, title: "5000PSI - 35MPa" },
    { value: 4350, title: "4350PSI - 30MPa" },
  ],
  ORGP: [{ value: 5800, title: "5800PSI - 40MPa" }],
  CCMR: [
    { value: 2600, title: "2600PSI - 18MPa" },
    { value: 2750, title: "2750PSI - 15MPa" },
  ],
  EBPEC: [{ value: 1750, title: "1750PSI - 12MPa" }],
};

const FoundationOptions = [
  {
    title: "Viga Cimentacion",
    imgSrc: StructuralBeamImg,
    linkTo: "beam",
    calculatorImage: BeamDimensionImg,
  },
  {
    title: "Zapata",
    imgSrc: FoundationImg,
    linkTo: "zapata",
    calculatorImage: FoundationDimesions,
  },
];

type structureType = "EC" | "CCMR" | "ORGP" | "ER" | "EBPEC";

interface optionFoundationProps {
  location: {
    state: Object;
  };
  match: any;
}

const OptionFoundation: React.FC<optionFoundationProps> = ({
  location,
  match,
}) => {
  const dispatch = useDispatch();
  const { loading } = useCommons();
  const { result } = useSelector((state: any) => state.calculator);
  const [typeFoundation, setTypeFoundation] = useState(Object);
  const [typeStructure, setTypeStructure] = useState<structureType>("EC");
  const [concreteResistance, setConcreteResistance] = useState<any>(
    FoundationOption[typeStructure]
  );
  const [valueConcreteResistance, setValueConcreteResistance] =
    useState<Number>(3600);
  const [zapataDimensions, setZapataDimensions] = useState({
    A: 0,
    B: 0,
    H: 0,
  });
  const [columnDimensions, setColumnDimensions] = useState({
    A: 0,
    B: 0,
    H: 0,
    rodNumber: 4,
  });
  const [inputCoating, setInputCoating] = useState(5);
  const [inputDiameterRods, setInputDiameterRods] = useState<string>("1/2");

  const [calculate, setCalculate] = useState<boolean>(false);

  useEffect(() => {
    console.log(match);
    setTypeFoundation(
      FoundationOptions.filter(
        (option) => option.linkTo === match.params.type
      )[0]
    );
    setConcreteResistance(FoundationOption[typeStructure]);
  }, [typeStructure, match]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (location.state) {
      if(typeFoundation.title === "Zapata"){
        dispatch({
          type: SET_CALCULATOR_INFORMATION,
          payload: {
            ...location.state,
            data: {
              typeStructure,
              concreteResistance: valueConcreteResistance,
              zapataDimensionsA: zapataDimensions.A,
              zapataDimensionsB: zapataDimensions.B,
              zapataDimensionsH: zapataDimensions.H,
              columnDimensionsA: columnDimensions.A,
              columnDimensionsB: columnDimensions.B,
              columnDimensionsH: columnDimensions.H,
              columnRodNumber: columnDimensions.rodNumber,
              coating: inputCoating,
              rodDiameter: inputDiameterRods,
            },
          },
        });
        dispatch({
          type: GET_CALCULATOR_RESULT_FETCH,
          payload: {
            ...location.state,
            data: {
              typeStructure,
              concreteResistance: valueConcreteResistance,
              zapataDimensionsA: zapataDimensions.A,
              zapataDimensionsB: zapataDimensions.B,
              zapataDimensinsH: zapataDimensions.H,
              columnDimensionsA: columnDimensions.A,
              columnDimensionsB: columnDimensions.B,
              columnDimensionsH: columnDimensions.H,
              columnRodNumber: columnDimensions.rodNumber,
              coating: inputCoating,
              rodDiameter: inputDiameterRods,
            },
          },
        });
      }else{
        dispatch({
          type: SET_CALCULATOR_INFORMATION,
          payload: {
            ...location.state,
            data: {
              typeStructure,
              concreteResistance: valueConcreteResistance,
              columnDimensionsA: columnDimensions.A,
              columnDimensionsB: columnDimensions.B,
              columnDimensionsH: columnDimensions.H,
              columnRodNumber: columnDimensions.rodNumber,
              coating: inputCoating,
              rodDiameter: inputDiameterRods,
            },
          },
        });
        dispatch({
          type: GET_CALCULATOR_RESULT_FETCH,
          payload: {
            ...location.state,
            data: {
              typeStructure,
              concreteResistance: valueConcreteResistance,
              columnDimensionsA: columnDimensions.A,
              columnDimensionsB: columnDimensions.B,
              columnDimensionsH: columnDimensions.H,
              columnRodNumber: columnDimensions.rodNumber,
              coating: inputCoating,
              rodDiameter: inputDiameterRods,
            },
          },
        });
      }
      
      setCalculate(true);
    }
  };

  return (
    <IonPage>
      <Header canBack href="/calculator/concrete/foundation" />
      <IonContent className="Foundation-content__style">
        {!calculate ? (
          <form onSubmit={submitHandler}>
            <IonItem
              className="ion-margin-top ion-margin-horizontal"
              color="primary"
            >
              <img
                slot="start"
                src={typeFoundation.imgSrc}
                className="Foundation-sidepanel__img"
                alt=""
              />
              <IonText>
                <h4>{typeFoundation.title}</h4>
              </IonText>
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <p>Diseño de mezcla de Concreto</p>
              <IonLabel position="floating">Tipo de estructura</IonLabel>
              <IonSelect
                value={typeStructure}
                onIonChange={(e) => setTypeStructure(e.detail.value!)}
                className="Optionbeam-select__style"
                placeholder="Selecciona Uno"
              >
                <IonSelectOption value="EC">Estructural común</IonSelectOption>
                <IonSelectOption value="ER">
                  Estructural de responsabilidad
                </IonSelectOption>
                <IonSelectOption value="ORGP">
                  Obra de responsabilidad de gran porte
                </IonSelectOption>
                <IonSelectOption value="CCMR">
                  Concreto común de menos responsabilidad
                </IonSelectOption>
                <IonSelectOption value="EBPEC">
                  Estructura de bajo porte y elementos de confinamiento
                </IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <IonLabel position="floating">
                Seleccione la resistencia del concreto
              </IonLabel>
              <IonSelect
                value={valueConcreteResistance}
                onIonChange={(e) => setValueConcreteResistance(e.detail.value!)}
                className="Optionbeam-select__style"
              >
                {concreteResistance.map((resistance: any, index: any) => (
                  <IonSelectOption value={resistance.value} key={index}>
                    {resistance.title}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
            {match.params.type === "zapata" && (
              <IonItem className="ion-margin-horizontal">
                <IonGrid>
                  <IonRow>
                    <p>Diseño de dimensiones:</p>
                  </IonRow>
                  <IonRow className="ion-justify-content-center ion-align-items-center">
                    <IonCol>
                      <img src={typeFoundation.calculatorImage} alt="" />
                    </IonCol>
                    <IonCol>
                      <h5>Dimensiones de zapata</h5>
                      <IonItem>
                        <IonLabel position="floating">A(m)</IonLabel>
                        <IonInput
                          type="number"
                          required
                          min="0.1"
                          step="any"
                          value={zapataDimensions.A}
                          onIonChange={(e) =>
                            setZapataDimensions((data) => ({
                              ...data,
                              A: Number(e.detail.value),
                            }))
                          }
                        />
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">B(m)</IonLabel>
                        <IonInput
                          type="number"
                          required
                          min="0.1"
                          step="any"
                          value={zapataDimensions.B}
                          onIonChange={(e) =>
                            setZapataDimensions((data) => ({
                              ...data,
                              B: Number(e.detail.value),
                            }))
                          }
                        />
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">H(m)</IonLabel>
                        <IonInput
                          type="number"
                          required
                          min="0.1"
                          step="any"
                          value={zapataDimensions.H}
                          onIonChange={(e) =>
                            setZapataDimensions((data) => ({
                              ...data,
                              H: Number(e.detail.value),
                            }))
                          }
                        />
                      </IonItem>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            )}

            <IonItem className="ion-margin-horizontal">
              <IonGrid>
                <IonRow>
                  <p>Diseño de dimensiones:</p>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                  <IonCol>
                    <img src={typeFoundation.calculatorImage} alt="" />
                  </IonCol>
                  <IonCol>
                    <h5>Dimensiones de la columna</h5>
                    <IonItem>
                      <IonLabel position="floating">A(m)</IonLabel>
                      <IonInput
                        type="number"
                        required
                        min="0.1"
                        step="any"
                        value={columnDimensions.A}
                        onIonChange={(e) =>
                          setColumnDimensions((data) => ({
                            ...data,
                            A: Number(e.detail.value),
                          }))
                        }
                      />
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">B(m)</IonLabel>
                      <IonInput
                        type="number"
                        required
                        min="0.1"
                        step="any"
                        value={columnDimensions.B}
                        onIonChange={(e) =>
                          setColumnDimensions((data) => ({
                            ...data,
                            B: Number(e.detail.value),
                          }))
                        }
                      />
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">H(m)</IonLabel>
                      <IonInput
                        type="number"
                        required
                        min="0.1"
                        step="any"
                        value={columnDimensions.H}
                        onIonChange={(e) =>
                          setColumnDimensions((data) => ({
                            ...data,
                            H: Number(e.detail.value),
                          }))
                        }
                      />
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">N° varillas </IonLabel>
                      <IonInput
                        type="number"
                        required
                        min="0.1"
                        step="any"
                        value={columnDimensions.rodNumber}
                        onIonChange={(e) =>
                          setColumnDimensions((data) => ({
                            ...data,
                            rodNumber: Number(e.detail.value),
                          }))
                        }
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <h5>Recubrimiento (cm)</h5>
              <IonInput
                slot="end"
                value={inputCoating}
                type="number"
                required
                min="0.1"
                step="any"
                onIonChange={(e) => setInputCoating(Number(e.detail.value!))}
              />
            </IonItem>
            <IonItem className="ion-margin-horizontal" lines="none">
              <h4>Diseño del acero:</h4>
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <IonLabel>Diametro de varilla</IonLabel>
              <IonSelect
                value={inputDiameterRods}
                onIonChange={(e) => setInputDiameterRods(e.detail.value!)}
                placeholder="Selecciona Uno"
              >
                <IonSelectOption value="1/4">N°2 - Ø 1/4"</IonSelectOption>
                <IonSelectOption value="3/8">N°3 - Ø 3/8"</IonSelectOption>
                <IonSelectOption value="1/2">N°4 - Ø 1/2"</IonSelectOption>
                <IonSelectOption value="5/8">N°5 - Ø 5/8"</IonSelectOption>
                <IonSelectOption value="3/4">N°6 - Ø 3/4"</IonSelectOption>
                <IonSelectOption value="7/8">N°7 - Ø 7/8"</IonSelectOption>
                <IonSelectOption value="1">N°8 - Ø 1"</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonButton
              expand="full"
              size="large"
              className="ion-margin-horizontal"
              type="submit"
            >
              Calcular
            </IonButton>
          </form>
        ) : (
          <OptionFoundationResult {...typeFoundation} result={result} loading={loading} />
        )}
      </IonContent>
    </IonPage>
  );
};

interface CalculatorResultProps {
  title: string;
  imgSrc: string;
  loading: boolean;
  result: any;
}

const OptionFoundationResult: React.FC<CalculatorResultProps> = ({
  loading,
  result,
  imgSrc,
  title
}) => {

  return (
    <IonContent className="Foundation-content__style">
      <IonItem className="ion-margin-top ion-margin-horizontal" color="primary">
        <img
          slot="start"
          src={imgSrc}
          className="Foundation-sidepanel__img"
          alt=""
        />
        <IonText>
          <h4>{title}</h4>
        </IonText>
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
    </IonContent>
  );
};

export default OptionFoundation;

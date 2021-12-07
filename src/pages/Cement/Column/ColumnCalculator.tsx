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

import "./ColumnCalculator.css";
import Header from "../../../components/Header/Header";
import WhatsappIcon from "../../../assets/whatsapp_icon.png";
import EmailIcon from "../../../assets/email_icon.png";
import TelegramIcon from "../../../assets/telegram_icon.png";
import RoundColumnImg from "../../../assets/round_column.png";
import SquareColumnImg from "../../../assets/square_column.png";
import SquareColumnCalculatorImg from "../../../assets/calculator_column.png";
import RoundColumnCalculatorImg from "../../../assets/calculator_column_round.png";
import useCommons from "../../../hooks/useCommons";
import { dataFormatter } from "../../../utils/dataFormatter";

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

type structureType = "EC" | "CCMR" | "ORGP" | "ER" | "EBPEC";
interface OptionFoundationProps {
  match: {
    params: {
      title: string;
    };
  };
}

const ColumnOptions = [
  {
    title: "Columna rectangular",
    imgSrc: SquareColumnImg,
    linkTo: "square-column",
    calculatorImage: SquareColumnCalculatorImg,
  },
  {
    title: "Columna circular",
    imgSrc: RoundColumnImg,
    linkTo: "round-column",
    calculatorImage: RoundColumnCalculatorImg,
  },
];

const ColumnCalculator: React.FC<OptionFoundationProps> = ({ match }) => {
  const dispatch = useDispatch();
  const { loading } = useCommons();
  const { result } = useSelector((state: any) => state.calculator)
  const [typeColumn, setTypeColumn] = useState(Object);
  const [typeStructure, setTypeStructure] = useState<structureType>("EC");
  const [concreteResistance, setConcreteResistance] = useState<any>(
    FoundationOption[typeStructure]
  );
  const [valueConcreteResistance, setValueConcreteResistance] =
    useState<number>(3600);
  const [inputCoating, setInputCoating] = useState<number>(5);
  const [inputDiameterRods, setInputDiameterRods] = useState<string>("1/2");

  const [columnDimensions, setColumnDimensions] = useState({
    A: 0,
    B: 0,
    H: 0,
    rodNumber: 4,
  });

  const [calculate, setCalculate] = useState<boolean>(false);

  useEffect(() => {
    setTypeColumn(
      ColumnOptions.filter((option) => option.linkTo === match.params.title)[0]
    );
    setConcreteResistance(FoundationOption[typeStructure]);
  }, [typeStructure, match]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch({
      type: SET_CALCULATOR_INFORMATION,
      payload: {
        name: match.params.title,
        data: {
          typeStructure,
          concreteResistance: valueConcreteResistance,
          columnDimensionsA: columnDimensions.A,
          columnDimensionsB: columnDimensions.B,
          columnDimensionsH: columnDimensions.H,
          columnDimensionsRodNumber: columnDimensions.rodNumber,
          coating: inputCoating,
          rodDiameter: inputDiameterRods,
        },
      },
    });
    dispatch({
      type: GET_CALCULATOR_RESULT_FETCH,
      payload: {
        name: match.params.title,
        data: {
          typeStructure,
          concreteResistance: valueConcreteResistance,
          columnDimensionsA: columnDimensions.A,
          columnDimensionsB: columnDimensions.B,
          columnDimensionsH: columnDimensions.H,
          columnDimensionsRodNumber: columnDimensions.rodNumber,
          coating: inputCoating,
          rodDiameter: inputDiameterRods,
        },
      },
    });
    setCalculate(true);
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
                src={typeColumn.imgSrc}
                className="Foundation-sidepanel__img"
                alt=""
              />
              <IonText>
                <h4>{typeColumn.title}</h4>
              </IonText>
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <p>Diseño de mezcla de Concreto</p>
              <IonLabel>Tipo de estructura</IonLabel>
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
              <IonLabel>Seleccione la resistencia del concreto</IonLabel>
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
            <IonItem className="ion-margin-horizontal">
              <IonGrid>
                <IonRow>
                  <p>Diseño de dimensiones:</p>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                  <IonCol>
                    <img src={typeColumn.calculatorImage} alt="" />
                  </IonCol>
                  <IonCol>
                    <h5>Dimensiones de la columna</h5>
                    <IonItem>
                      <IonLabel slot="start" position="floating">
                        A(m)
                      </IonLabel>
                      <IonInput
                        slot="end"
                        type="number"
                        value={columnDimensions.A}
                        required
                        min="0.1"
                        onIonChange={(e) =>
                          setColumnDimensions((data) => ({
                            ...data,
                            A: Number(e.detail.value),
                          }))
                        }
                      />
                    </IonItem>
                    <IonItem>
                      <IonLabel slot="start" position="floating">
                        B(m)
                      </IonLabel>
                      <IonInput
                        slot="end"
                        type="number"
                        value={columnDimensions.B}
                        required
                        min="0.1"
                        onIonChange={(e) =>
                          setColumnDimensions((data) => ({
                            ...data,
                            B: Number(e.detail.value),
                          }))
                        }
                      />
                    </IonItem>
                    <IonItem>
                      <IonLabel slot="start" position="floating">
                        H(m)
                      </IonLabel>
                      <IonInput
                        slot="end"
                        type="number"
                        value={columnDimensions.H}
                        required
                        min="0.1"
                        onIonChange={(e) =>
                          setColumnDimensions((data) => ({
                            ...data,
                            H: Number(e.detail.value),
                          }))
                        }
                      />
                    </IonItem>
                    <IonItem>
                      <IonLabel slot="start" position="floating">
                        N° varillas{" "}
                      </IonLabel>
                      <IonInput
                        value={columnDimensions.rodNumber}
                        type="number"
                        required
                        min="0.1"
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
                onIonChange={(e) => setInputCoating(Number(e.detail.value!))}
              />
            </IonItem>
            <IonItem className="ion-margin-horizontal" lines="none">
              <h4>Diseño del acero:</h4>
            </IonItem>
            <IonItem className="ion-margin-horizontal" lines="none">
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
          <ColumnCalculatorResult {...typeColumn} loading={loading} result={result} />
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

const ColumnCalculatorResult: React.FC<CalculatorResultProps> = ({
  title,
  imgSrc,
  loading,
  result
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

export default ColumnCalculator;
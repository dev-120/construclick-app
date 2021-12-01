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

import "./SlabsCalculator.css";
import Header from "../../../components/Header/Header";
import MetaldeckSlabImg from "../../../assets/metaldeck_slab.png";
import SolidSlabImg from "../../../assets/solid_slab.png";
import BlockSlabImg from "../../../assets/block_slab.png";
import LightenedSlabImg from "../../../assets/lightened_slab.png";
import WhatsappIcon from "../../../assets/whatsapp_icon.png";
import EmailIcon from "../../../assets/email_icon.png";
import TelegramIcon from "../../../assets/telegram_icon.png";
import BlocklonImg from "../../../assets/blocklon.png";
import StyrofoamImg from "../../../assets/styrofoam.png";
import { GET_CALCULATOR_RESULT_FETCH, SET_CALCULATOR_INFORMATION } from "../../../store/actions/calculator.actions";
import { useDispatch, useSelector } from "react-redux";
import { dataFormatter } from "../../../utils/dataFormatter";
import useCommons from "../../../hooks/useCommons";

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
      type: string;
    };
  };
}

const SlabOptions = [
  {
    title: "Losa aligerada\nplaca facil",
    imgSrc: BlockSlabImg,
    linkTo: "block-slab",
    calculatorImage: BlocklonImg,
  },
  {
    title: "Losa aligerada\ncon icopor",
    imgSrc: LightenedSlabImg,
    linkTo: "lightened-slab",
    calculatorImage: StyrofoamImg,
  },
  {
    title: "Losa maciza",
    imgSrc: SolidSlabImg,
    linkTo: "solid-slab",
    calculatorImage: SolidSlabImg,
  },
  {
    title: "Losa metaldeck",
    imgSrc: MetaldeckSlabImg,
    linkTo: "metaldeck-slab",
    calculatorImage: MetaldeckSlabImg,
  },
];

const SlabsCalculator: React.FC<OptionFoundationProps> = ({ match }) => {
  const dispatch = useDispatch();
  const { loading } = useCommons();
  const { result } = useSelector((state: any) => state.calculator);
  const [typeSlab, setTypeSlab] = useState(Object);
  const [typeStructure, setTypeStructure] = useState<structureType>("EC");
  const [concreteResistance, setConcreteResistance] = useState<any>(
    FoundationOption[typeStructure]
  );
  const [valueConcreteResistance, setValueConcreteResistance] =
    useState<number>(3600);
  const [inputCoating, setInputCoating] = useState<number>(5);
  const [inputDiameterMesh, setInputDiameterMesh] = useState<string>("4,5");
  const [caliberSheetMetaldeck, setCaliberSheetMetaldeck] =
    useState<string>("0,7");
  const [columnDimensions, setColumnDimensions] = useState({
    A: 0,
    B: 0,
    thickness: 0,
  });
  const [blockSlabZapataDimensions, setBlockSlabZapataDimensions] = useState({
    A: 0,
    B: 0,
    C: 0,
  });
  const [polystyreneDimensions, setPolystyreneDimensions] = useState({
    A: 0,
    B: 0,
  });
  const [areaOpenings, setAreaOpenings] = useState(0);

  const [calculate, setCalculate] = useState<boolean>(false);

  useEffect(() => {
    setTypeSlab(
      SlabOptions.filter((option) => option.linkTo === match.params.type)[0]
    );
    setConcreteResistance(FoundationOption[typeStructure]);
  }, [typeStructure, match]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    switch (typeSlab.linkTo) {
      case "block-slab":
        dispatch({
          type: SET_CALCULATOR_INFORMATION,
          payload: {
            name: match.params.type,
            data: {
              typeStructure,
              concreteResistance: valueConcreteResistance,
              columnDimensionsA: columnDimensions.A,
              columnDimensionsB: columnDimensions.B,
              columnDimensionsThickness: columnDimensions.thickness,
              coating: inputCoating,
              areaOpenings,
              blockSlabZapataDimensionsA: blockSlabZapataDimensions.A,
              blockSlabZapataDimensionsB: blockSlabZapataDimensions.B,
              blockSlabZapataDimensionsC: blockSlabZapataDimensions.C,
              diameterMesh: inputDiameterMesh,
            },
          },
        });
        dispatch({
          type: GET_CALCULATOR_RESULT_FETCH,
          payload:  {
            name: match.params.type,
            data: {
              typeStructure,
              concreteResistance: valueConcreteResistance,
              columnDimensionsA: columnDimensions.A,
              columnDimensionsB: columnDimensions.B,
              columnDimensionsThickness: columnDimensions.thickness,
              coating: inputCoating,
              areaOpenings,
              blockSlabZapataDimensionsA: blockSlabZapataDimensions.A,
              blockSlabZapataDimensionsB: blockSlabZapataDimensions.B,
              blockSlabZapataDimensionsC: blockSlabZapataDimensions.C,
              diameterMesh: inputDiameterMesh,
            },
          },
        })
        break;
      case "lightened-slab":
        dispatch({
          type: SET_CALCULATOR_INFORMATION,
          payload: {
            name: match.params.type,
            data: {
              typeStructure,
              concreteResistance: valueConcreteResistance,
              columnDimensionsA: columnDimensions.A,
              columnDimensionsB: columnDimensions.B,
              columnDimensionsThickness: columnDimensions.thickness,
              coating: inputCoating,
              areaOpenings,
              polystyreneDimensionsA: polystyreneDimensions.A,
              polystyreneDimensionsB: polystyreneDimensions.B,
              diameterMesh: inputDiameterMesh,
            },
          },
        });
        dispatch({
          type: GET_CALCULATOR_RESULT_FETCH,
          payload:  {
            name: match.params.type,
            data: {
              typeStructure,
              concreteResistance: valueConcreteResistance,
              columnDimensionsA: columnDimensions.A,
              columnDimensionsB: columnDimensions.B,
              columnDimensionsThickness: columnDimensions.thickness,
              coating: inputCoating,
              areaOpenings,
              polystyreneDimensionsA: polystyreneDimensions.A,
              polystyreneDimensionsB: polystyreneDimensions.B,
              diameterMesh: inputDiameterMesh,
            },
          },
        })
        break;
      case "solid-slab":
        dispatch({
          type: SET_CALCULATOR_INFORMATION,
          payload: {
            name: match.params.type,
            data: {
              typeStructure,
              concreteResistance: valueConcreteResistance,
              columnDimensionsA: columnDimensions.A,
              columnDimensionsB: columnDimensions.B,
              columnDimensionsThickness: columnDimensions.thickness,
              coating: inputCoating,
              areaOpenings,
              diameterMesh: inputDiameterMesh,
            },
          },
        });
        dispatch({
          type: GET_CALCULATOR_RESULT_FETCH,
          payload:  {
            name: match.params.type,
            data: {
              typeStructure,
              concreteResistance: valueConcreteResistance,
              columnDimensionsA: columnDimensions.A,
              columnDimensionsB: columnDimensions.B,
              columnDimensionsThickness: columnDimensions.thickness,
              coating: inputCoating,
              areaOpenings,
              diameterMesh: inputDiameterMesh,
            },
          },
        })
        break;
      case "metaldeck-slab":
        dispatch({
          type: SET_CALCULATOR_INFORMATION,
          payload: {
            name: match.params.type,
            typeStructure,
            concreteResistance: valueConcreteResistance,
            columnDimensionsA: columnDimensions.A,
            columnDimensionsB: columnDimensions.B,
            columnDimensionsThickness: columnDimensions.thickness,
            coating: inputCoating,
            areaOpenings,
            diameterMesh: inputDiameterMesh,
            caliberSheetMetaldeck,
          },
        });
        dispatch({
          type: GET_CALCULATOR_RESULT_FETCH,
          payload: {
            name: match.params.type,
            typeStructure,
            concreteResistance: valueConcreteResistance,
            columnDimensionsA: columnDimensions.A,
            columnDimensionsB: columnDimensions.B,
            columnDimensionsThickness: columnDimensions.thickness,
            coating: inputCoating,
            areaOpenings,
            diameterMesh: inputDiameterMesh,
            caliberSheetMetaldeck,
          },
        })
        break;
    }
    
    setCalculate(true);
  };

  return (
    <IonPage>
      <Header canBack href="/calculator/concrete/slabs" />
      <IonContent className="Foundation-content__style">
        {!calculate ? (
          <form onSubmit={submitHandler}>
            <IonItem
              className="ion-margin-top ion-margin-horizontal"
              color="primary"
            >
              <img
                slot="start"
                src={typeSlab.imgSrc}
                className="Foundation-sidepanel__img"
                alt=""
              />
              <IonText>
                <h4>{typeSlab.title}</h4>
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
            <IonItem className="ion-margin-horizontal">
              <IonGrid>
                <IonRow>
                  <p>Diseño de dimensiones:</p>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center">
                  <IonCol>
                    <img src={typeSlab.imgSrc} alt="" />
                  </IonCol>
                  <IonCol>
                    <h5>Dimensiones de la columna</h5>
                    <IonItem>
                      <IonLabel position="floating">A(m)</IonLabel>
                      <IonInput
                        type="number"
                        required
                        min="1"
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
                        min="1"
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
                      <IonLabel position="floating">Espesor(m)</IonLabel>
                      <IonInput
                        type="number"
                        required
                        min="1"
                        value={columnDimensions.thickness}
                        onIonChange={(e) =>
                          setColumnDimensions((data) => ({
                            ...data,
                            thickness: Number(e.detail.value),
                          }))
                        }
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem className="ion-margin-horizontal ion-text-center">
              <h5>Recubrimiento (cm)</h5>
              <IonInput
                slot="end"
                value={inputCoating}
                type="number"
                required
                min="1"
                onIonChange={(e) => setInputCoating(Number(e.detail.value!))}
              />
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <h5>Área aperturas: </h5>
              <IonGrid>
                <IonRow>
                  <IonCol size="12" className="ion-text-left">
                    <IonLabel position="floating">
                      {"Área descontada\n(m2)"}
                    </IonLabel>
                    <IonInput
                      type="number"
                      required
                      min="1"
                      value={areaOpenings}
                      onIonChange={(e) =>
                        setAreaOpenings(Number(e.detail.value))
                      }
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            {typeSlab.linkTo === "block-slab" && (
              <>
                <IonItem className="ion-margin-horizontal">
                  <IonGrid>
                    <IonRow>
                      <p>Diseño de dimensiones:</p>
                    </IonRow>
                    <IonRow className="ion-justify-content-center ion-align-items-center">
                      <IonCol>
                        <img src={typeSlab.calculatorImage} alt="" />
                      </IonCol>
                      <IonCol>
                        <h5>Dimensiones de zapata</h5>
                        <IonItem>
                          <IonLabel position="floating">A(m)</IonLabel>
                          <IonInput
                            type="number"
                            required
                            min="1"
                            value={blockSlabZapataDimensions.A}
                            onIonChange={(e) =>
                              setBlockSlabZapataDimensions((data) => ({
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
                            min="1"
                            value={blockSlabZapataDimensions.B}
                            onIonChange={(e) =>
                              setBlockSlabZapataDimensions((data) => ({
                                ...data,
                                B: Number(e.detail.value),
                              }))
                            }
                          />
                        </IonItem>
                        <IonItem>
                          <IonLabel position="floating">C(m)</IonLabel>
                          <IonInput
                            type="number"
                            required
                            min="1"
                            value={blockSlabZapataDimensions.C}
                            onIonChange={(e) =>
                              setBlockSlabZapataDimensions((data) => ({
                                ...data,
                                C: Number(e.detail.value),
                              }))
                            }
                          />
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
                <IonItem className="ion-margin-horizontal" lines="none">
                  <h4>Diseño del acero:</h4>
                </IonItem>
                <IonItem className="ion-margin-horizontal" lines="none">
                  <IonLabel position="floating">
                    Diametro de la malla electrosoldada
                  </IonLabel>
                  <IonSelect
                    value={inputDiameterMesh}
                    onIonChange={(e) => setInputDiameterMesh(e.detail.value!)}
                    placeholder="Selecciona Uno"
                  >
                    <IonSelectOption value="4">Ø 4mm</IonSelectOption>
                    <IonSelectOption value="4,5">Ø 4,5mm</IonSelectOption>
                    <IonSelectOption value="5,0">Ø 5,0mm</IonSelectOption>
                    <IonSelectOption value="5,5">Ø 5,5mm</IonSelectOption>
                    <IonSelectOption value="6,0">Ø 6,0mm</IonSelectOption>
                    <IonSelectOption value="6,5">Ø 6,5mm</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </>
            )}
            {typeSlab.linkTo === "lightened-slab" && (
              <>
                <IonItem className="ion-margin-horizontal">
                  <IonGrid>
                    <IonRow>
                      <p>Diseño de Icopor:</p>
                    </IonRow>
                    <IonRow className="ion-justify-content-center ion-align-items-center">
                      <IonCol>
                        <img src={typeSlab.calculatorImage} alt="" />
                      </IonCol>
                      <IonCol>
                        <h5>Ingrese dimensiones</h5>
                        <IonItem>
                          <IonLabel position="floating">A(m)</IonLabel>
                          <IonInput
                            type="number"
                            value={polystyreneDimensions.A}
                            required
                            min="1"
                            onIonChange={(e) =>
                              setPolystyreneDimensions((data) => ({
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
                            min="1"
                            value={polystyreneDimensions.B}
                            onIonChange={(e) =>
                              setPolystyreneDimensions((data) => ({
                                ...data,
                                B: Number(e.detail.value),
                              }))
                            }
                          />
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
                <IonItem className="ion-margin-horizontal" lines="none">
                  <h4>Diseño del acero:</h4>
                </IonItem>
                <IonItem className="ion-margin-horizontal" lines="none">
                  <IonLabel position="floating">
                    Diametro de la malla electrosoldada
                  </IonLabel>
                  <IonSelect
                    value={inputDiameterMesh}
                    onIonChange={(e) => setInputDiameterMesh(e.detail.value!)}
                    placeholder="Selecciona Uno"
                  >
                    <IonSelectOption value="4">Ø 4mm</IonSelectOption>
                    <IonSelectOption value="4,5">Ø 4,5mm</IonSelectOption>
                    <IonSelectOption value="5,0">Ø 5,0mm</IonSelectOption>
                    <IonSelectOption value="5,5">Ø 5,5mm</IonSelectOption>
                    <IonSelectOption value="6,0">Ø 6,0mm</IonSelectOption>
                    <IonSelectOption value="6,5">Ø 6,5mm</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </>
            )}
            {typeSlab.linkTo === "solid-slab" && (
              <>
                <IonItem className="ion-margin-horizontal" lines="none">
                  <h4>Diseño del acero:</h4>
                </IonItem>
                <IonItem className="ion-margin-horizontal" lines="none">
                  <IonLabel position="floating">
                    Diametro de la malla electrosoldada
                  </IonLabel>
                  <IonSelect
                    value={inputDiameterMesh}
                    onIonChange={(e) => setInputDiameterMesh(e.detail.value!)}
                    placeholder="Selecciona Uno"
                  >
                    <IonSelectOption value="4">Ø 4mm</IonSelectOption>
                    <IonSelectOption value="4,5">Ø 4,5mm</IonSelectOption>
                    <IonSelectOption value="5,0">Ø 5,0mm</IonSelectOption>
                    <IonSelectOption value="5,5">Ø 5,5mm</IonSelectOption>
                    <IonSelectOption value="6,0">Ø 6,0mm</IonSelectOption>
                    <IonSelectOption value="6,5">Ø 6,5mm</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </>
            )}

            {typeSlab.linkTo === "metaldeck-slab" && (
              <>
                <IonItem className="ion-margin-horizontal" lines="none">
                  <h4>Diseño del acero:</h4>
                </IonItem>
                <IonItem className="ion-margin-horizontal" lines="none">
                  <IonLabel position="floating">
                    Diametro de la malla electrosoldada
                  </IonLabel>
                  <IonSelect
                    value={inputDiameterMesh}
                    onIonChange={(e) => setInputDiameterMesh(e.detail.value!)}
                    placeholder="Selecciona Uno"
                  >
                    <IonSelectOption value="4">Ø 4mm</IonSelectOption>
                    <IonSelectOption value="4,5">Ø 4,5mm</IonSelectOption>
                    <IonSelectOption value="5,0">Ø 5,0mm</IonSelectOption>
                    <IonSelectOption value="5,5">Ø 5,5mm</IonSelectOption>
                    <IonSelectOption value="6,0">Ø 6,0mm</IonSelectOption>
                    <IonSelectOption value="6,5">Ø 6,5mm</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem className="ion-margin-horizontal" lines="none">
                  <IonLabel position="floating">
                    Diametro de la malla electrosoldada
                  </IonLabel>
                  <IonSelect
                    value={caliberSheetMetaldeck}
                    onIonChange={(e) =>
                      setCaliberSheetMetaldeck(e.detail.value!)
                    }
                    placeholder="Selecciona Uno"
                  >
                    <IonSelectOption value="0,7">
                      Cal.22 - 0,7mm
                    </IonSelectOption>
                    <IonSelectOption value="0,85">
                      Cal.20 - 0,85mm
                    </IonSelectOption>
                    <IonSelectOption value="1,2">
                      Cal.18 - 1,2mm
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>
              </>
            )}
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
          <BeamCalculatorResult {...typeSlab} loading={loading} result={result} />
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

const BeamCalculatorResult: React.FC<CalculatorResultProps> = ({
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
        <IonText className="ion-text-center">
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
          {/* <IonRow>
            <IonCol className="ion-text-center">Cemento</IonCol>
            <IonCol className="ion-text-center">30,17</IonCol>
            <IonCol className="ion-text-center">Bulto 50Kilos</IonCol>
          </IonRow>
          {linkTo === "block-slab" ? (
            <>
              <IonRow>
                <IonCol className="ion-text-center">
                  {"Bloquelon santa fe\n(7,7 x 22,8 x 80)"}
                </IonCol>
                <IonCol className="ion-text-center">93,1</IonCol>
                <IonCol className="ion-text-center">Unidad</IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-text-center">
                  {"Malla\nelectrosoldada"}
                </IonCol>
                <IonCol className="ion-text-center">13,9</IonCol>
                <IonCol className="ion-text-center">M2</IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-text-center">
                  {"Perfil ipe para\nplaca facil"}
                </IonCol>
                <IonCol className="ion-text-center">13,9</IonCol>
                <IonCol className="ion-text-center">X 6m</IonCol>
              </IonRow>
            </>
          ) : (
            linkTo === "lightened-slab" && (
              <>
                <IonRow>
                  <IonCol className="ion-text-center">
                    {"Caseton de icopor\n(0,4 x  100)"}
                  </IonCol>
                  <IonCol className="ion-text-center">93,1</IonCol>
                  <IonCol className="ion-text-center">Unidad</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="ion-text-center">
                    {"Malla\nelectrosoldada"}
                  </IonCol>
                  <IonCol className="ion-text-center">13,9</IonCol>
                  <IonCol className="ion-text-center">M2</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="ion-text-center">
                    {"Formaleta y\npuntales"}
                  </IonCol>
                  <IonCol className="ion-text-center">8,9</IonCol>
                  <IonCol className="ion-text-center">M2</IonCol>
                </IonRow>
              </>
            )
          )}
          {linkTo === "metaldeck-slab" ? (
            <>
              <IonRow>
                <IonCol className="ion-text-center">
                  {"Malla\nelectrosoldada"}
                </IonCol>
                <IonCol className="ion-text-center">13,9</IonCol>
                <IonCol className="ion-text-center">M2</IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-text-center">
                  {"Lamina metaldeck\nCal.20 - 0.85mm"}
                </IonCol>
                <IonCol className="ion-text-center">8,9</IonCol>
                <IonCol className="ion-text-center">Unidad</IonCol>
              </IonRow>
            </>
          ) : (
            linkTo === "solid-slab" && (
              <>
                <IonRow>
                  <IonCol className="ion-text-center">
                    {"Malla electrosoldada"}
                  </IonCol>
                  <IonCol className="ion-text-center">13,9</IonCol>
                  <IonCol className="ion-text-center">M2</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="ion-text-center">
                    {"Malla\nelectrosoldada"}
                  </IonCol>
                  <IonCol className="ion-text-center">8,9</IonCol>
                  <IonCol className="ion-text-center">M2</IonCol>
                </IonRow>
              </>
            )
          )}
          <IonRow>
            <IonCol className="ion-text-center">Arena</IonCol>
            <IonCol className="ion-text-center">{"3,08\n171,4"}</IonCol>
            <IonCol className="ion-text-center">m3 Latas 18L</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Piedra</IonCol>
            <IonCol className="ion-text-center">{"1,80\n101,4"}</IonCol>
            <IonCol className="ion-text-center">m3 Latas 18L</IonCol>
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
    </IonContent>
  );
};

export default SlabsCalculator;

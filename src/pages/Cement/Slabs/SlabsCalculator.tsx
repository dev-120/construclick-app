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
  const [typeSlab, setTypeSlab] = useState(Object);
  const [typeStructure, setTypeStructure] = useState<structureType>("EC");
  const [concreteResistance, setConcreteResistance] = useState<any>(
    FoundationOption[typeStructure]
  );
  const [valueConcreteResistance, setValueConcreteResistance] =
    useState<number>(0);
  const [inputNumberRods, setInputNumberRods] = useState<number>(4);
  const [inputCoating, setInputCoating] = useState<number>(5);
  const [inputDiameterRods, setInputDiameterRods] = useState<string>("1/2");
  const [inputDiameterMesh, setInputDiameterMesh] = useState<string>("4,5");
  const [caliberSheetMetaldeck, setCaliberSheetMetaldeck] = useState<string>("0,7")

  const [calculate, setCalculate] = useState<boolean>(false);

  useEffect(() => {
    setTypeSlab(
      SlabOptions.filter((option) => option.linkTo === match.params.type)[0]
    );
    setConcreteResistance(FoundationOption[typeStructure]);
  }, [typeStructure, match]);

  const clickHandler = () => {
    setCalculate(true);
  };
  
  return (
    <IonPage>
      <Header canBack href="/calculator/concrete/slabs" />
      <IonContent className="Foundation-content__style">
        {!calculate ? (
          <>
            <IonItem
              className="ion-margin-top ion-margin-horizontal"
              color="primary"
            >
              <img
                slot="start"
                src={typeSlab.imgSrc}
                className="Foundation-sidepanel__img"
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
                    <img src={typeSlab.imgSrc} />
                  </IonCol>
                  <IonCol>
                    <h5>Dimensiones de la columna</h5>
                    <IonItem>
                      <IonLabel position="floating">A(m)</IonLabel>
                      <IonInput type="number" />
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">B(m)</IonLabel>
                      <IonInput type="number" />
                    </IonItem>
                    <IonItem>
                      <IonLabel position="floating">Espesor(m)</IonLabel>
                      <IonInput type="number" />
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
                    <IonInput type="number" />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            {typeSlab.linkTo === "block-slab" ? (
              <>
                <IonItem className="ion-margin-horizontal">
                  <IonGrid>
                    <IonRow>
                      <p>Diseño de dimensiones:</p>
                    </IonRow>
                    <IonRow className="ion-justify-content-center ion-align-items-center">
                      <IonCol>
                        <img src={typeSlab.calculatorImage} />
                      </IonCol>
                      <IonCol>
                        <h5>Dimensiones de zapata</h5>
                        <IonItem>
                          <IonLabel position="floating">A(m)</IonLabel>
                          <IonInput type="number" />
                        </IonItem>
                        <IonItem>
                          <IonLabel position="floating">B(m)</IonLabel>
                          <IonInput type="number" />
                        </IonItem>
                        <IonItem>
                          <IonLabel position="floating">C(m)</IonLabel>
                          <IonInput type="number" />
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
            ) : (
              typeSlab.linkTo === "lightened-slab" && (
                <>
                  <IonItem className="ion-margin-horizontal">
                    <IonGrid>
                      <IonRow>
                        <p>Diseño de dimensiones:</p>
                      </IonRow>
                      <IonRow className="ion-justify-content-center ion-align-items-center">
                        <IonCol>
                          <img src={typeSlab.calculatorImage} />
                        </IonCol>
                        <IonCol>
                          <h5>Ingrese dimensiones</h5>
                          <IonItem>
                            <IonLabel position="floating">A(m)</IonLabel>
                            <IonInput type="number" />
                          </IonItem>
                          <IonItem>
                            <IonLabel position="floating">B(m)</IonLabel>
                            <IonInput type="number" />
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
              )
            )}
            {
              typeSlab.linkTo === "solid-slab" ?
              (
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
              )
              :
              (
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
                      onIonChange={(e) => setCaliberSheetMetaldeck(e.detail.value!)}
                      placeholder="Selecciona Uno"
                    >
                      <IonSelectOption value="0,7">Cal.22 - 0,7mm</IonSelectOption>
                      <IonSelectOption value="0,85">Cal.20 - 0,85mm</IonSelectOption>
                      <IonSelectOption value="1,2">Cal.18 - 1,2mm</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </>
              )
            }
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
          <BeamCalculatorResult {...typeSlab} />
        )}
      </IonContent>
    </IonPage>
  );
};

interface CalculatorResultProps {
  title: string;
  imgSrc: string;
  linkTo: string;
}

const BeamCalculatorResult: React.FC<CalculatorResultProps> = ({
  title,
  imgSrc,
  linkTo,
}) => {
  return (
    <IonContent className="Foundation-content__style">
      <IonItem className="ion-margin-top ion-margin-horizontal" color="primary">
        <img slot="start" src={imgSrc} className="Foundation-sidepanel__img" />
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
          <IonRow>
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
    </IonContent>
  );
};

export default SlabsCalculator;

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

import "./ColumnCalculator.css";
import Header from "../../../components/Header/Header";
import WhatsappIcon from "../../../assets/whatsapp_icon.png";
import EmailIcon from "../../../assets/email_icon.png";
import TelegramIcon from "../../../assets/telegram_icon.png";
import RoundColumnImg from "../../../assets/round_column.png";
import SquareColumnImg from "../../../assets/square_column.png";
import SquareColumnCalculatorImg from "../../../assets/calculator_column.png";
import RoundColumnCalculatorImg from "../../../assets/calculator_column_round.png";

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
    }
  }
}


const ColumnOptions = [
  { title: "Columna rectangular", imgSrc: SquareColumnImg, linkTo: "square-column", calculatorImage: SquareColumnCalculatorImg },
  { title: "Columna circular", imgSrc: RoundColumnImg,  linkTo: "round-column", calculatorImage: RoundColumnCalculatorImg },
];

const ColumnCalculator: React.FC<OptionFoundationProps> = ({
  match
}) => {
  const [typeColumn, setTypeColumn ] = useState(Object)
  const [typeStructure, setTypeStructure] = useState<structureType>("EC");
  const [concreteResistance, setConcreteResistance] = useState<any>(
    FoundationOption[typeStructure]
  );
  const [valueConcreteResistance, setValueConcreteResistance] =
    useState<number>(0);
  const [inputNumberRods, setInputNumberRods] = useState<number>(4);
  const [inputCoating, setInputCoating] = useState<number>(5);
  const [inputDiameterRods, setInputDiameterRods] = useState<string>("1/2");

  const [calculate, setCalculate] = useState<boolean>(false);

  useEffect(() => {
    setTypeColumn(ColumnOptions.filter((option) => option.linkTo === match.params.title)[0])
    setConcreteResistance(FoundationOption[typeStructure]);
  }, [typeStructure, match]);

  const clickHandler=() => {
    setCalculate(true);
  }

  return (
    <IonPage>
      <Header canBack href="/calculator/concrete/foundation" />
      <IonContent className="Foundation-content__style">
        {!calculate ? (
          <>
            <IonItem
              className="ion-margin-top ion-margin-horizontal"
              color="primary"
            >
              <img
                slot="start"
                src={typeColumn.imgSrc}
                className="Foundation-sidepanel__img"
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
                    <img src={typeColumn.calculatorImage} />
                  </IonCol>
                  <IonCol>
                    <h5>Dimensiones de la columna</h5>
                    <IonItem>
                      <IonLabel slot="start" position="floating">A(m)</IonLabel>
                      <IonInput slot="end" type="number" />
                    </IonItem>
                    <IonItem>
                      <IonLabel slot="start" position="floating">B(m)</IonLabel>
                      <IonInput slot="end" type="number" />
                    </IonItem>
                    <IonItem>
                      <IonLabel slot="start" position="floating">H(m)</IonLabel>
                      <IonInput slot="end" type="number" />
                    </IonItem>
                    <IonItem>
                      <IonLabel slot="start" position="floating">N° varillas </IonLabel>
                      <IonInput
                        value={inputNumberRods}
                        type="number"
                        onIonChange={(e) =>
                          setInputNumberRods(Number(e.detail.value!))
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
              onClick={clickHandler}
            >
              Calcular
            </IonButton>
          </>
        ) : (
          <ColumnCalculatorResult {...typeColumn} />
        )}
      </IonContent>
    </IonPage>
  );
};

interface CalculatorResultProps{
  title: string;
  imgSrc: string;
}

const ColumnCalculatorResult: React.FC<CalculatorResultProps> = ({ title, imgSrc }) => {
  return (
    <IonContent className="Foundation-content__style">
      <IonItem className="ion-margin-top ion-margin-horizontal" color="primary">
        <img
          slot="start"
          src={imgSrc}
          className="Foundation-sidepanel__img"
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
          <IonRow>
            <IonCol className="ion-text-center">Cemento</IonCol>
            <IonCol className="ion-text-center">3,17</IonCol>
            <IonCol className="ion-text-center">Bulto 50Kilos</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              Cemento
            </IonCol>
            <IonCol className="ion-text-center">3,17</IonCol>
            <IonCol className="ion-text-center">Bulto 50Kg</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              Acero de refuerzo Ø 1/2"
            </IonCol>
            <IonCol className="ion-text-center">3,1</IonCol>
            <IonCol className="ion-text-center">Varilla/barra X 6mt</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              Acero de estribos Ø 3/8"
            </IonCol>
            <IonCol className="ion-text-center">1,9</IonCol>
            <IonCol className="ion-text-center">Varilla/barra X 6mt</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              Alambre negro para amarrar
            </IonCol>
            <IonCol className="ion-text-center">0,5</IonCol>
            <IonCol className="ion-text-center">Kilos</IonCol>
          </IonRow>
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
            <IonCol className="ion-text-center">Formaleta</IonCol>
            <IonCol className="ion-text-center">1,0</IonCol>
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
    </IonContent>
  );
};

export default ColumnCalculator;
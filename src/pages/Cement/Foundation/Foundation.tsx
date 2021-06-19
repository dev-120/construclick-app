import {
  IonPage,
  IonContent,
  IonSlide,
  IonSlides,
  IonText,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCardHeader,
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
import { useRef, useEffect, useState } from "react";

import "./Foundation.css";
import Header from "../../../components/Header/Header";
import Beam from "../../../assets/viga.png";
import Pile from "../../../assets/pilote.png";
import FoundationImg from "../../../assets/zapata.png";
import FoundationDimesions from "../../../assets/dimensiones_zapata.png";
import WhatsappIcon from "../../../assets/whatsapp_icon.png";
import EmailIcon from "../../../assets/email_icon.png";
import TelegramIcon from "../../../assets/telegram_icon.png";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

interface FoundationProps {
  match: {
    url: string;
  };
}

const FoundationOptions = [
  { title: "Viga cimentación", isChecked: false, imageSrc: Beam },
  { title: "Zapata", isChecked: false, imageSrc: FoundationImg },
  { title: "Pilote", isChecked: false, imageSrc: Pile },
];

interface CheckedOption {
  title: string;
  isChecked: boolean;
  imageSrc: string;
}

const Foundation: React.FC<FoundationProps> = ({ match }) => {
  const [optionBeam, setCheckedOptionBeam] = useState(false);
  const [optionFoundation, setCheckedOptionFoundation] = useState(false);
  const [optionPile, setCheckedOptionPile] = useState(false);

  const slidesRef = useRef<HTMLIonSlidesElement>(null);

  useEffect(() => {
    if (!optionBeam && !optionFoundation && !optionPile) {
      slidesRef.current?.lockSwipes(true);
    }

    slidesRef.current?.lockSwipes(false);
  }, []);

  const clickHandler = (title: string) => {
    if (title === "Viga cimentación") {
      setCheckedOptionBeam(true);
      setCheckedOptionFoundation(false);
      setCheckedOptionPile(false);
      slidesRef.current?.slideNext();
    }

    if (title === "Zapata") {
      setCheckedOptionBeam(false);
      setCheckedOptionFoundation(true);
      setCheckedOptionPile(false);
      slidesRef.current?.slideNext();
    }

    if (title === "Pilote") {
      setCheckedOptionBeam(false);
      setCheckedOptionFoundation(false);
      setCheckedOptionPile(true);
      slidesRef.current?.slideNext();
    }
  };

  const slideHandler = () => {
    console.log("Sliding");
    slidesRef.current?.slideNext();
  };

  return (
    <IonPage>
      <IonContent className="Foundation-content__style" fullscreen>
        <Header canBack href={`${match.url}`} />
        <IonSlides options={slideOpts} ref={slidesRef}>
          <IonSlide>
            <IonCard>
              <IonCardHeader className="Foundation-menu__style">
                <IonCardTitle className="ion-text-center">
                  Cimentación
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {FoundationOptions.map(
                  ({ title, isChecked, imageSrc }: CheckedOption) => (
                    <IonItem
                      key={title}
                      lines="none"
                      className="ion-margin-vertical"
                      button
                      onClick={() => clickHandler(title)}
                    >
                      <img
                        src={imageSrc}
                        slot="start"
                        className="Foundation-image__style"
                      />
                      <IonText>{title}</IonText>
                    </IonItem>
                  )
                )}
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            {optionBeam ? (
              // <OptionBeam />
              <p>Viga</p>
            ) : optionFoundation ? (
              <OptionFoundation slideHandler={slideHandler} />
            ) : (
              optionPile && <IonText color="light">Pila</IonText>
            )}
          </IonSlide>
          <IonSlide>
            {optionBeam ? (
              // <OptionBeam />
              <p>Viga</p>
            ) : optionFoundation ? (
              <OptionFoundationResult />
            ) : (
              optionPile && <IonText color="light">Pila</IonText>
            )}
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

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
  slideHandler: Function;
}

const OptionFoundation: React.FC<OptionFoundationProps> = ({
  slideHandler,
}) => {
  const [typeStructure, setTypeStructure] = useState<structureType>("EC");
  const [concreteResistance, setConcreteResistance] = useState<any>(
    FoundationOption[typeStructure]
  );
  const [valueConcreteResistance, setValueConcreteResistance] =
    useState<number>(0);
  const [inputNumberRods, setInputNumberRods] = useState<number>(4);
  const [inputCoating, setInputCoating] = useState<number>(5);
  const [inputDiameterRods, setInputDiameterRods] = useState<string>("1/2");

  useEffect(() => {
    setConcreteResistance(FoundationOption[typeStructure]);
  }, [typeStructure]);

  return (
    <IonContent className="Foundation-content__style">
      <IonItem className="ion-margin-top ion-margin-horizontal" color="primary">
        <img
          slot="start"
          src={FoundationImg}
          className="Foundation-sidepanel__img"
        />
        <IonText>
          <h4>Zapata</h4>
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
              <img src={FoundationDimesions} />
            </IonCol>
            <IonCol>
              <h5>Dimensiones de zapata</h5>
              <IonItem>
                <IonLabel>A(m)</IonLabel>
                <IonInput slot="end" type="number" />
              </IonItem>
              <IonItem>
                <IonLabel>B(m)</IonLabel>
                <IonInput slot="end" type="number" />
              </IonItem>
              <IonItem>
                <IonLabel>H(m)</IonLabel>
                <IonInput slot="end" type="number" />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonItem className="ion-margin-horizontal">
        <IonGrid>
          <IonRow>
            <p>Diseño de dimensiones:</p>
          </IonRow>
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonCol>
              <img src={FoundationDimesions} />
            </IonCol>
            <IonCol>
              <h5>Dimensiones de la columna</h5>
              <IonItem>
                <IonLabel>A(m)</IonLabel>
                <IonInput slot="end" type="number" />
              </IonItem>
              <IonItem>
                <IonLabel>B(m)</IonLabel>
                <IonInput slot="end" type="number" />
              </IonItem>
              <IonItem>
                <IonLabel>H(m)</IonLabel>
                <IonInput slot="end" type="number" />
              </IonItem>
              <IonItem>
                <IonLabel slot="start">N° varillas </IonLabel>
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
        onClick={() => slideHandler()}
        className="ion-margin-horizontal"
      >
        Calcular
      </IonButton>
    </IonContent>
  );
};

const OptionFoundationResult: React.FC = () => {
  return (
    <IonContent className="Foundation-content__style">
      <IonItem className="ion-margin-top ion-margin-horizontal" color="primary">
        <img
          slot="start"
          src={FoundationImg}
          className="Foundation-sidepanel__img"
        />
        <IonText>
          <h4>Zapata</h4>
        </IonText>
      </IonItem>
      <IonItem className="ion-margin-horizontal" >
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
              Acero de refuerzo Ø 1/2"
            </IonCol>
            <IonCol className="ion-text-center">3,1</IonCol>
            <IonCol className="ion-text-center">Varilla/barra X 6mt</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              Acero de estribos Ø 1/2"
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
            <IonCol className="ion-text-center">3,08 171,4</IonCol>
            <IonCol className="ion-text-center">m3 Latas 18L</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Piedra</IonCol>
            <IonCol className="ion-text-center">1,80 101,4</IonCol>
            <IonCol className="ion-text-center">m3 Latas 18L</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">Formaleta</IonCol>
            <IonCol className="ion-text-center">1,0</IonCol>
            <IonCol className="ion-text-center">Unidad</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <img src={WhatsappIcon} className="Foundation-Result__icon"/>
            </IonCol>
            <IonCol className="ion-text-center">
              <img src={TelegramIcon} className="Foundation-Result__icon" />
            </IonCol>
            <IonCol className="ion-text-center">
              <img src={EmailIcon} className="Foundation-Result__icon"/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    </IonContent>
  );
};

export default Foundation;

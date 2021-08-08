import {
  IonPage,
  IonContent,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonSearchbar,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonIcon,
  IonItemDivider,
  IonItemGroup,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonButton,
} from "@ionic/react";
import {
  personAdd,
  chevronUp,
  chevronDown,
  cartSharp,
  checkmarkCircleSharp,
  menuOutline,
} from "ionicons/icons";
import { useState } from "react";

import Header from "../../../components/Header/Header";
import Map from "../../../assets/map.png";

import "./Warehouse.css";
// import Doughnut from "../../../components/Doughnut/Doughnut";
import { Doughnut } from "react-chartjs-2";

const doughnutChartData = (data: any) => ({
  datasets: [data],
});

const menuWarehouse = [
  {
    title: "Cemento",
    unit: "Bulto x 50Kg",
    estimate: "145",
    labelsFirst: ["Existencias", "Faltantes"],
    data1First: 90,
    data2First: 55,
    labelSecond: ["Usado", "Faltante"],
    data1Second: 62,
    data2Second: 38
  },
  {
    title: 'Varilla/barra de acero (N°3 - Ø 3/8")',
    unit: "Barra x 6m",
    estimate: "145",
    labelsFirst: ["Existencias", "Faltantes"],
    data1First: 90,
    data2First: 55,
    labelSecond: ["Usado", "Faltante"],
    data1Second: 62,
    data2Second: 38
  },
  {
    title: 'Varilla/barra de acero (N°4 - Ø 1/2")',
    unit: "Bulto x 50Kg",
    estimate: "145",
    labelsFirst: ["Existencias", "Faltantes"],
    data1First: 90,
    data2First: 55,
    labelSecond: ["Usado", "Faltante"],
    data1Second: 62,
    data2Second: 38
  },
  {
    title: "Arena",
    unit: "Bulto x 50Kg",
    estimate: "145",
    labelsFirst: ["Existencias", "Faltantes"],
    data1First: 90,
    data2First: 55,
    labelSecond: ["Usado", "Faltante"],
    data1Second: 62,
    data2Second: 38
  },
  {
    title: "Piedra",
    unit: "Bulto x 50Kg",
    estimate: "145",
    labelsFirst: ["Existencias", "Faltantes"],
    data1First: 90,
    data2First: 55,
    labelSecond: ["Usado", "Faltante"],
    data1Second: 62,
    data2Second: 38
  },
  {
    title: "Bloque N°10 - (10 x 20 x 40)",
    unit: "Bulto x 50Kg",
    estimate: "145",
    labelsFirst: ["Existencias", "Faltantes"],
    data1First: 90,
    data2First: 55,
    labelSecond: ["Usado", "Faltante"],
    data1Second: 62,
    data2Second: 38
  },
];

const Warehouse: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCard, setShowCard] = useState(false);
  console.log();
  return (
    <IonPage>
      <Header canBack href="/gestion/dashboard" />
      <IonContent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Almacén</IonTitle>
        </IonToolbar>
        <IonList>
          <h5 className="ion-text-center">Información del almacén: </h5>
          <IonItem lines="none">
            <IonSearchbar
              placeholder="Ingrese dirección"
              animated
              value={searchTerm}
              onIonChange={(e) => setSearchTerm(e.detail.value!)}
            />
          </IonItem>
          <div className="Warehoure-maps__style ion-margin">
            <img src={Map} className="Warehouse-img__style" />
            <IonText>Ingrese en el mapa la ubicación del almacén</IonText>
            <br></br>
            <IonLabel
              position="stacked"
              className="Warehouse-description__style"
            >
              Este sera el lugar donde se acopiara, sera inventariado y
              asegurados los insumos, herramientas y equipos necesarios para
              poder ejecutar la obra
            </IonLabel>
          </div>
          <IonItem disabled className="ion-no-margin">
            <IonLabel position="floating">Responsable del almacen</IonLabel>
            <IonItem className="ion-padding">
              <IonIcon icon={personAdd} slot="start" />
              <IonLabel>
                <strong>Asignar a:</strong> Personal Contratado
              </IonLabel>
            </IonItem>
          </IonItem>
        </IonList>
        <IonItemGroup>
          <IonItemDivider>
            <h3>Almacén</h3>
          </IonItemDivider>
        </IonItemGroup>
        {menuWarehouse.map((menu) => (
          <WarehouseOption {...menu} />
        ))}
      </IonContent>
    </IonPage>
  );
};

const WarehouseOption = ({
  title,
  estimate,
  unit,
  labelsFirst,
  data1First,
  data2First,
  labelSecond,
  data1Second,
  data2Second,
}: {
  title: string;
  estimate: string;
  unit: string;
  labelsFirst: string[];
  data1First: number;
  data2First: number;
  labelSecond: string[];
  data1Second: number;
  data2Second: number;
}) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <IonCard>
      <IonItem className="" lines="none" onClick={() => setShowCard(!showCard)}>
        <IonLabel>{title}</IonLabel>
        <IonIcon slot="start" icon={showCard ? chevronUp : chevronDown} />
      </IonItem>
      {showCard && (
        <IonCardContent>
          <IonList>
            <IonItem>
              <IonLabel>Unidad</IonLabel>
              <strong slot="end">{unit}</strong>
            </IonItem>
            <IonItem>
              <IonLabel>Estimado de toda la obra</IonLabel>
              <strong slot="end">{estimate}</strong>
            </IonItem>
            <IonGrid>
              <IonRow>
                <IonCol size="6" className=" ion-text-center">
                  <WarehouseDougnout
                    labels={labelsFirst}
                    data1={data1First}
                    data2={data2First}
                    colorData1="rgba(39, 60, 44, 1)"
                    colorData2="rgba(98, 195, 112, 0.5)"
                  />
                  <IonLabel className="ion-text-wrap">
                    <strong>Existencias</strong> Faltantes
                  </IonLabel>
                </IonCol>
                <IonCol size="6" className=" ion-text-center">
                  <WarehouseDougnout
                    labels={labelSecond}
                    data1={data1Second}
                    data2={data2Second}
                    colorData1="rgba(125, 91, 166, 1)"
                    colorData2="rgba(125, 91, 166, 0.5)"
                  />
                  <IonLabel className="ion-text-wrap">
                    <strong>% usado</strong> % faltante
                  </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow className="ion-align-items-center">
                <IonCol className="ion-justify-content-center">
                  <IonButtons className="ion-justify-content-center">
                    <IonIcon
                      style={{ fontSize: "20px" }}
                      color="dark"
                      className="ion-margin-horizontal"
                      icon={checkmarkCircleSharp}
                    />
                    <IonButton color="dark" fill="outline">
                      Sacar
                    </IonButton>
                    <IonButton color="dark" fill="outline">
                      Comprar
                    </IonButton>
                    <IonIcon
                      style={{ fontSize: "20px" }}
                      color="dark"
                      className="ion-margin-horizontal"
                      icon={cartSharp}
                    />
                  </IonButtons>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonList>
        </IonCardContent>
      )}
    </IonCard>
  );
};

type WarehouseProps = {
  labels: Array<string>;
  data1: number;
  data2: number;
  colorData1: string;
  colorData2: string;
};

const WarehouseDougnout = ({
  labels,
  data1,
  data2,
  colorData1,
  colorData2,
}: WarehouseProps) => {
  const data = {
    labels: [...labels],
    datasets: [
      {
        data: [data1, data2],
        backgroundColor: [colorData1, colorData2],
      },
    ],
  };
  return <Doughnut type="dougnut" data={data} />;
};

export default Warehouse;

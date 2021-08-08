import {
  IonPage,
  IonContent,
  IonCard,
  IonItem,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonLabel,
  IonButton,
  IonList,
  IonCardContent,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
  useIonModal,
  IonRadioGroup,
  IonTextarea,
  IonRadio,
  IonInput,
} from "@ionic/react";
import {
  book,
  checkmarkCircle,
  checkmarkCircleOutline,
  close,
} from "ionicons/icons";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";

import "./ClientApprobal.css";
import Header from "../../../components/Header/Header";
import InterventorImg from "../../../assets/interventor_img.png";
import Builder1Img from "../../../assets/builder_1.png";
import Builder2Img from "../../../assets/builder_2.png";


const listMockup = [
  {
    title: "Actividades (7/7)",
    name: "Samuel Ricarte",
    profession: "Auxiliar de Obra",
    img: Builder1Img,
    reports: [
      {
        title: "Demolicion de muros",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Demolicion de enchape",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Desmonte de puertas",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Desmonte de ventanas",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Desmonte de cielo raso",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
    ],
  },
  {
    title: "Actividades (5/5)",
    name: "Jorge Charris",
    profession: "Auxiliar de Obra",
    img: Builder2Img,
    reports: [
      {
        title: "Demolicion de muros",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Demolicion de enchape",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Desmonte de puertas",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Desmonte de ventanas",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Desmonte de cielo raso",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
    ],
  },
  {
    title: "Actividades (8/8)",
    name: "Luis Contreras",
    profession: "Albañil (Oficial)",
    img: InterventorImg,
    reports: [
      {
        title: "Demolicion de muros",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Demolicion de enchape",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Desmonte de puertas",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Desmonte de ventanas",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
      {
        title: "Desmonte de cielo raso",
        labels1: ["Presupuesto", "Presupuesto Faltante"],
        data1: [730000, 730000],
        colors1: ["red", "blue"],
        labels2: ["Avance de Obra", "Avance de obra Faltante"],
        data2: [4, 4],
        colors2: ["red", "blue"],
        cuantity: "43 (m2)",
        interventorObservations: "Excelente Projecto",
      },
    ],
  },
];

const ClientApprobal: React.FC = () => {
  const handleDismiss = () => {
    dismiss();
  };

  const [selectedReports, setSelectedReports] = useState(0);
  const [present, dismiss] = useIonModal(ListReports, {
    onDismiss: handleDismiss,
    reports: listMockup[selectedReports].reports,
  });

  return (
    <IonPage>
      <Header canBack href="/gestion/dashboard" />
      <IonContent>
        <IonToolbar>
          <IonItem lines="none" className="ion-text-center">
            <IonIcon slot="start" icon={book} />
            <IonLabel>Lista de actividades</IonLabel>
          </IonItem>
        </IonToolbar>

        <IonList>
          {listMockup.map((item, index) => (
            <IonCard key={index}>
              <IonCardContent>
                <div className="InterventionalReport-Card__style">
                  <div className="InterventionalReport-Flex__style">
                    <IonLabel className="ion-margin" color="dark">
                      {item.title}
                    </IonLabel>
                    <IonItem lines="none">
                      <IonIcon
                        color="dark"
                        slot="start"
                        icon={checkmarkCircleOutline}
                      />
                      <IonButton
                        expand="full"
                        onClick={() => {
                          setSelectedReports(index);
                          present();
                        }}
                      >
                        Reporte
                      </IonButton>
                    </IonItem>
                  </div>
                  <div className="InterventionalReport-Flex__style">
                    <img
                      className="InterventionalReport-Card__img"
                      src={item.img}
                    />
                    <IonLabel color="dark">{item.name}</IonLabel>
                    <IonLabel color="dark">
                      <strong>{item.profession}</strong>
                    </IonLabel>
                  </div>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

type ReportsTypes = {
  title: string;
  labels1: string[];
  data1: number[];
  colors1: string[];
  labels2: string[];
  data2: number[];
  colors2: string[];
  cuantity: string;
  onDismiss: () => void
  interventorObservations: string
};

type ListReportsProps = {
  reports: Array<ReportsTypes>;
  onDismiss: () => void;
};

const ListReports = ({ onDismiss, reports }: ListReportsProps) => {
  return (
    <IonContent>
      <IonToolbar>
        <IonItem lines="none">
          <IonTitle>Reporte Interventoria</IonTitle>
          <IonButton fill="clear" onClick={() => onDismiss()}>
            <IonIcon color="dark" slot="icon-only" icon={close} />
          </IonButton>
        </IonItem>
      </IonToolbar>
      <IonList>
        {reports.map((report, index) => (
          <ReportCard key={index} {...report} onDismiss={onDismiss}  />
        ))}
      </IonList>
    </IonContent>
  );
};

const ReportCard = ({
  title,
  labels1,
  data1,
  colors1,
  labels2,
  data2,
  colors2,
  cuantity,
  onDismiss,
  interventorObservations
}: ReportsTypes) => {
  const [showReport, setShowReport] = useState(false);
  const [radioSelected, setRadioSelected] = useState("fulfill");
  const [otherInput, setOtherInput] = useState("")
  return (
    <IonCard>
      <IonCardHeader>
        <IonItem button onClick={() => setShowReport(!showReport)} lines="none">
          <IonIcon slot="start" icon={checkmarkCircle} />
          <IonLabel style={{ textDecoration: "line-through"}}>{title}</IonLabel>
        </IonItem>
      </IonCardHeader>
      {showReport && (
        <IonCardContent>
          <IonGrid>
            <IonRow>
              <IonCol size="6" className="ion-text-center">
                <ReportDoughnut
                  labels={labels1}
                  dataDoughnut={data1}
                  colors={colors1}
                />
                <IonLabel>
                  ${data1[0]}/<strong>${data1[1]}</strong>
                </IonLabel>
              </IonCol>
              <IonCol size="6" className="ion-text-center">
                <ReportDoughnut
                  labels={labels2}
                  dataDoughnut={data2}
                  colors={colors2}
                />
                <IonLabel>
                  {data2[0]} dia(s)/<strong>{data2[1]} dia(s)</strong>
                </IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem lines="none">
                  <IonIcon slot="start" icon={book} />
                  <IonLabel className="ion-text-wrap ion-text-center">
                    <strong>Cantidad: </strong> {cuantity} - Metro Cuadrado
                  </IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonRadioGroup value={radioSelected} onIonChange={(e) => setRadioSelected(e.detail.value!)}>
                  <IonItem lines="none">
                    <IonRadio value="fulfill" disabled />
                    <IonLabel>Cumple</IonLabel>
                  </IonItem>
                  <IonItem lines="none">
                    <IonRadio value="fails" disabled />
                    <IonLabel>No cumple</IonLabel>
                  </IonItem>
                  <IonItem lines="none">
                    <IonRadio value={otherInput} disabled />
                    <IonInput placeholder="Otro..." value={otherInput} onIonChange={(e) => setOtherInput(e.detail.value!)} />
                  </IonItem>
                </IonRadioGroup>
              </IonCol>
              <IonCol size="6">
                <IonItem >
                  <IonTextarea autoGrow value={interventorObservations}  placeholder="Ingrese Observaciones" />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton expand="full" onClick={() => onDismiss()}>Aprobar</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      )}
    </IonCard>
  );
};

type ReportDoughnoutProps = {
  labels: string[];
  dataDoughnut: number[];
  colors: string[];
};

const ReportDoughnut = ({
  labels,
  dataDoughnut,
  colors,
}: ReportDoughnoutProps) => {
  const data = {
    labels: [...labels],
    datasets: [
      {
        data: [...dataDoughnut],
        backgroundColor: [...colors],
      },
    ],
  };
  return <Doughnut type="dougnut" data={data} />;
};

export default ClientApprobal
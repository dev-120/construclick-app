import {
  IonImg,
  IonPage,
  IonIcon,
  IonButton,
  IonContent,
  IonToolbar,
  IonSegment,
  IonFab,
  IonFabButton,
  IonFabList,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import React from "react";
import { bulbOutline } from "ionicons/icons";


import "./Dashboard.css";
import Header from "../../../components/Header/Header";
import Doughnut from "../../../components/Doughnut/Doughnut";
import Section from "../../../components/SectionManagement/Section";

type Props = {
  history: {
    push: Function;
  };
};

const doughnutChartData = (data: any) => ({
  datasets: [data],
});

const DashboardPage: React.FC<Props> = () => {
  return (
    <IonPage>
      <Header title="Gestion de obra" />
      <IonContent className="dashboard_page" >
        <div className="container-Dashboard">
          <div className="row_dashboard_doughnut">
            <Doughnut
              centerLegend={65 + "%"}
              classStyle="doughnut_dashboard"
              title="Avance de proyecto"
              color="#1de9b6"
              data={doughnutChartData({
                backgroundColor: ["#1de9b6", "#F5F5F6"],
                data: [65, 35],
              })}
            />
            <Doughnut
              centerLegend={65 + "%"}
              classStyle="doughnut_dashboard"
              title="Avance de obra"
              color="#40c4ff"
              data={doughnutChartData({
                backgroundColor: ["#40c4ff", "#F5F5F6"],
                data: [65, 35],
              })}
            />
          </div>
          <div className="row_dashboard_doughnut">
            <Doughnut
              centerLegend={65 + "%"}
              classStyle="doughnut_dashboard"
              title="Presupuesto"
              color="#ff8a80"
              data={doughnutChartData({
                backgroundColor: ["#ff8a80", "#F5F5F6"],
                data: [65, 35],
              })}
            />
            <Doughnut
              centerLegend={65 + "%"}
              classStyle="doughnut_dashboard"
              title="Tiempo de ejecucion"
              color="#ea80fc"
              data={doughnutChartData({
                backgroundColor: ["#ea80fc", "#F5F5F6"],
                data: [65, 35],
              })}
            />
          </div>
        </div>
        <Section title="Fase (0)" icon={bulbOutline} subtitle="Pre-diseño" options={[
          {
            title: "Datos generales",
            link: "/datos-generales"
          },
          {
            title: "Planos / render",
            link: "/planos-render"
          },
          {
            title: "Presupuesto",
            link: "/presupuesto"
          },
          {
            title: "Aspectos legales",
            link: "/legal"
          },
          {
            title: "Financiacion",
            link: "/financiacion"
          }
        ]} />
        <Section title="Fase (1)" icon={bulbOutline} subtitle="Planeación" options={[
          {
            title: "Cronograma",
            link: "/cronograma"
          },
          {
            title: "Materiales, equipo y almacen",
            link: "/materiales-equipo-almacen"
          },
          {
            title: "Seleccion personal y contratos",
            link: "/personal-contratos"
          }
        ]} />
        <Section title="Fase (2)" icon={bulbOutline} subtitle="Ejecución" options={[
          {
            title: "Construcción de obra",
            link: "/construccion-obra"
          },
          {
            title: "Control equipos / herramienta",
            link: "/control-equipos-herramienta"
          },
          {
            title: "Recepcion control materiales",
            link: "/recepcion-control-materiales"
          },
          {
            title: "Adicionales",
            link: "/adicionales"
          }
        ]} />
      </IonContent>
    </IonPage>
  );
};
export default DashboardPage;

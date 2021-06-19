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

import "./Dashboard.css";
import Header from "../../../components/Header/Header";
import Doughnut from "../../../components/Doughnut/Doughnut";

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
              data={doughnutChartData({
                backgroundColor: ["#ef7b03", "#F5F5F6"],
                data: [65, 35],
              })}
            />
            <Doughnut
              centerLegend={65 + "%"}
              classStyle="doughnut_dashboard"
              title="Avance de obra"
              data={doughnutChartData({
                backgroundColor: ["#ef7b03", "#F5F5F6"],
                data: [65, 35],
              })}
            />
          </div>
          <div className="row_dashboard_doughnut">
            <Doughnut
              centerLegend={65 + "%"}
              classStyle="doughnut_dashboard"
              title="Presupuesto"
              data={doughnutChartData({
                backgroundColor: ["#ef7b03", "#F5F5F6"],
                data: [65, 35],
              })}
            />
            <Doughnut
              centerLegend={65 + "%"}
              classStyle="doughnut_dashboard"
              title="Tiempo de ejecucion"
              data={doughnutChartData({
                backgroundColor: ["#ef7b03", "#F5F5F6"],
                data: [65, 35],
              })}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default DashboardPage;

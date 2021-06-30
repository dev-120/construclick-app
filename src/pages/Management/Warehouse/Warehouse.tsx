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
import { personAdd, chevronUp, chevronDown, cartSharp, checkmarkCircleSharp, menuOutline } from "ionicons/icons";
import { useState } from "react";

import Header from "../../../components/Header/Header";
import Map from "../../../assets/map.png";

import "./Warehouse.css";
import Doughnut from "../../../components/Doughnut/Doughnut";

const doughnutChartData = (data: any) => ({
  datasets: [data],
});


const menuWarehouse = [
  { title:"Cemento", unit: "Bulto x 50Kg", estimate: "145"},
  { title:"Varilla/barra de acero (N°3 - Ø 3/8\")", unit: "Barra x 6m", estimate: "145"},
  { title:"Varilla/barra de acero (N°4 - Ø 1/2\")", unit: "Bulto x 50Kg", estimate: "145"},
  { title:"Arena", unit: "Bulto x 50Kg", estimate: "145"},
  { title:"Piedra", unit: "Bulto x 50Kg", estimate: "145"},
  { title:"Cemento", unit: "Bulto x 50Kg", estimate: "145"},
]


const Warehouse: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCard, setShowCard] = useState(false);
  console.log()
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
          <WarehouseOption title={menu.title} estimate={menu.estimate} unit={menu.unit} />
        ))}
      </IonContent>
    </IonPage>
  );
};

const WarehouseOption = ({ title, estimate, unit }: { title: string; estimate: string; unit: string; }) => {
  const [showCard, setShowCard] = useState(false)

  return (
    <IonCard >
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
                      <Doughnut
                        centerLegend="90"
                        classStyle="doughnut_dashboard"
                        title="Presupuesto"
                        color="#ff8a80"
                        data={doughnutChartData({
                          backgroundColor: ["#ff8a80", "#F5F5F6"],
                          data: [65, 35],
                        })}
                      />
                      <IonLabel className="ion-text-wrap">
                        <strong>Existencias</strong>  Faltantes
                      </IonLabel>
                    </IonCol>
                    <IonCol size="6" className=" ion-text-center">
                      <Doughnut
                        centerLegend={"38" + "%"}
                        classStyle="doughnut_dashboard"
                        title="Presupuesto"
                        color="#000080"
                        data={doughnutChartData({
                          backgroundColor: ["#000080", "#F5F5F6"],
                          data: [65, 35],
                        })}
                      />
                      <IonLabel className="ion-text-wrap">
                        <strong>% usado</strong> % faltante
                      </IonLabel>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ion-align-items-center">
                    <IonCol className="ion-justify-content-center">
                      <IonButtons className="ion-justify-content-center">
                        <IonIcon style={{ fontSize: "20px"}} color="dark" className="ion-margin-horizontal" icon={checkmarkCircleSharp} />
                        <IonButton color="dark" fill="outline">Sacar</IonButton>
                        <IonButton color="dark" fill="outline">Comprar</IonButton>
                        <IonIcon style={{ fontSize: "20px"}} color="dark" className="ion-margin-horizontal" icon={cartSharp} />
                      </IonButtons>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonList>
            </IonCardContent>
          )}
        </IonCard>
  )
}

export default Warehouse;

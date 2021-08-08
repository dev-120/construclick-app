import { 
  IonPage,
  IonContent,
  IonButton,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonItem,
  IonText,
} from "@ionic/react"
import Header from "../../../components/Header/Header"
import "./FinalPayment.css"

const FinalPayment: React.FC = () => {
  return (
    <IonPage>
      <Header canBack href="/gestion/dashboard"/>
      <IonContent>
        <IonToolbar className="ion-text-center">
          <IonTitle>ACTA DE ENTREGA</IonTitle>
        </IonToolbar>
        <IonItem lines="none" className="ion-margin">
          <IonLabel><strong>CONTRATO DE OBRA</strong>: </IonLabel>
          <IonText color="danger"><strong>N° - 0000001</strong></IonText>
        </IonItem>
        <IonButton expand="full" routerLink="/gestion/dashboard">pagar saldo final</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default FinalPayment
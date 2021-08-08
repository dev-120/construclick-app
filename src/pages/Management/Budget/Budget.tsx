import {
  IonPage,
  IonButton,
  IonContent,
  IonToolbar,
  IonTitle,
  IonList,
  IonIcon,
} from "@ionic/react";
import { useState } from "react";
import { personAdd, calculatorSharp } from 'ionicons/icons';

import './Budget.css';
import Header from "../../../components/Header/Header";
import QuestionTogle from "../../../components/QuestionTogle/QuestionTogle";
import FieldToogleUpload from "../../../components/FieldToogleUpload/FieldToogleUpload";

const BudgetPage = () => {
  const [existBudget, setExistBudget] = useState(false);

  return (
    <IonPage>
      <Header canBack />
      <IonContent>
        <IonToolbar>
          <IonTitle>Presupuesto</IonTitle>
        </IonToolbar>
        <IonList style={{ padding: 20 }}>
          <QuestionTogle label="1. ¿La obra cuenta con un presupuesto? (Excel)" setChecked={setExistBudget} value={existBudget} />
            {existBudget && (
              <div className="container_sub_questions" >
                <FieldToogleUpload label="Presupuesto (.xlsx)" />
              </div>
            )}
            <br />
            {!existBudget && (
              <>
                <FieldToogleUpload label="2. Carga tu presupuesto en PDF" />
                <br />
                <span className="title_section_pr">
                  3. ¿No tienes presupuesto?
                </span>
                <br/>
                <br/>
                <div className="container_alternative_pr" >
                  <IonIcon icon={personAdd} />
                  <span>Busca la ayuda de uno de nuestros expertos para desarrollar tu presupuesto</span>
                </div>
                <br/>
                <div className="container_alternative_pr" >
                  <IonIcon icon={calculatorSharp} />
                  <span>Usa la calculadora de materiales y desarrolla el presupuesto</span>
                </div>
              </>
            )}
          <IonButton size="large" expand="full">
            Guardar
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default BudgetPage;

import {
  IonImg,
  IonPage,
  IonButton,
  IonContent,
  IonToolbar,
  IonTitle,
  IonToggle,
  IonLabel,
  IonList,
  IonItem,
  IonIcon,
  IonInput,
} from "@ionic/react";
import { useState } from "react";
import { personAdd } from 'ionicons/icons';

import './PlaneRender.css';
import Header from "../../../components/Header/Header";
import QuestionTogle from "../../../components/QuestionTogle/QuestionTogle";
import FieldToogleUpload from "../../../components/FieldToogleUpload/FieldToogleUpload";

const PlaneRenderPage = () => {
  const [existPlane, setExistPlane] = useState(false);
  const [existRender, setExistRender] = useState(false);

  return (
    <IonPage>
      <Header canBack />
      <IonContent>
        <IonToolbar>
          <IonTitle>Planos y render</IonTitle>
        </IonToolbar>
        <IonList style={{ padding: 20 }}>
          <QuestionTogle label="1. ¿La obra cuenta con planos DWG? (Autocad)" setChecked={setExistPlane} value={existPlane} />
          {existPlane ? (
            <>
              <span className="title_section_pr">
                2. ¿Con que planos cuenta tu obra?
              </span>
              <div className="container_sub_questions" >
                <FieldToogleUpload label="Arquitectónico planta(s)" />
                <FieldToogleUpload label="Arquitectónico cortes" />
                <FieldToogleUpload label="Arquitectónico fachadas" />
                <FieldToogleUpload label="Estructural(es)" />
                <FieldToogleUpload label="Electrico(s)" />
                <FieldToogleUpload label="Hidrosanitario(s)" />
                <FieldToogleUpload label="Cubierta" />
                <FieldToogleUpload label="Otro" withButton />
              </div>
            </>
          ) : (
            <>
              <span className="title_section_pr">
                2. Carga tu plano en PDF
              </span>
              <div className="container_sub_questions" >
                <FieldToogleUpload label="Nombre del plano" withButton />
              </div>
              <span className="title_section_pr">
                3. Carga tu plano en PDF
              </span>
              <div className="container_alternative_pr" >
                <IonIcon icon={personAdd} />
                <span>Busca la ayuda de uno de nuestros expertos para desarrollar tus planos</span>
              </div>
            </>
          )}
          <br/>
          <span className="title_section_pr">
            Informacion de render
          </span>
          <br/>
          <br/>
          <QuestionTogle label={`${existPlane ? 3 : 4}. ¿La obra cuenta con render? (Revicad, SketchUp u otro)`} setChecked={setExistRender} value={existRender} />
          {existRender ? (
            <div className="container_sub_questions" >
              <FieldToogleUpload label="Otro" withButton />
            </div>
          ) :
            <>
            <br />
              <span className="title_section_pr">
                {existPlane ? 4 : 5}. Carga tu plano en PDF
              </span>
              <div className="container_sub_questions" >
                <FieldToogleUpload label="Nombre del plano" withButton />
              </div>
              <span className="title_section_pr">
                {existPlane ? 5 : 6}. Carga tu render en PDF
              </span>
              <div className="container_alternative_pr" >
                <IonIcon icon={personAdd} />
                <span>Busca la ayuda de uno de nuestros expertos para desarrollar tus planos</span>
              </div>
            </>
          }
          <IonButton size="large" expand="full">
            Guardar
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PlaneRenderPage;

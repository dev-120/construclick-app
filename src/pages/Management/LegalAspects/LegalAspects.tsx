import {
  IonPage,
  IonContent,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonText,
  IonToggle,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonRadioGroup,
  IonListHeader,
  IonRadio,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState } from "react";
import { createOutline } from "ionicons/icons";
import Header from "../../../components/Header/Header";

import "./LegalAspects.css";

const typeOfProcedure = [
  { val: "Licencia de urbanizacion", isChecked: false },
  { val: "Licencia de parcelacion", isChecked: false },
  { val: "Licencia de subdivision", isChecked: false },
  { val: "Licencia de construccion", isChecked: false },
  { val: "Intervención y ocupacion de espacio publico", isChecked: false },
  {
    val: "Reconocimiento de la existencia de una edificacion",
    isChecked: false,
  },
  { val: "Otras actuaciones", isChecked: false },
];

const mConstructionLicense = [
  { val: "Subdivision rural", isChecked: false },
  { val: "Subdivision urbana", isChecked: false },
  { val: "Reloteo", isChecked: false },
];

const modeUrbanLicenseMenu = [
  { val: "Desarrollo", isChecked: false },
  { val: "Saneamiento", isChecked: false },
  { val: "Reurbanización", isChecked: false },
];

const procedureObjectiveMenu = [
  { val: "Inicial", isChecked: false },
  { val: "Prórroga", isChecked: false },
  { val: "Modificación de licencia vigente", isChecked: false },
  { val: "Revalidación", isChecked: false },
];

const listUseMenu = [
  { val: "Vivivenda", isChecked: false },
  { val: "Comercio y/o servicios", isChecked: false },
  { val: "Institucional", isChecked: false },
  { val: "Industrial", isChecked: false },
];

const typeOfHousingOption = ["VIP", "VIS", "No VIS"];

const LegalAspects: React.FC = () => {
  const [typeProcedure, setTypeProcedure] =
    useState<Array<any>>(typeOfProcedure);
  const [modeConstructionLicense, setModeConstructionLicense] =
    useState<Array<any>>(mConstructionLicense);
  const [procedureObjective, setProcedureObjective] = useState<Array<any>>(
    procedureObjectiveMenu
  );
  const [modeUrbanLicense, setModeUrbanLicense] =
    useState<Array<any>>(modeUrbanLicenseMenu);
  const [useMenu, setUseMenu] = useState<Array<any>>(listUseMenu);
  const [typeOfHousing, setTypeOfHousing] = useState<string>("");
  const [culturalInterest, setCulturalInterest] = useState<boolean>(true);
  const [
    sustainableConstructionRegulations,
    setSustainableConstructionRegulations,
  ] = useState<string>("A");

  const checkedHandlerTypeProcedure = (i: number, val: string) => {
    let index = typeProcedure.findIndex((element) => element.val === val);
    let newTypeProcedure = [...typeProcedure];
    newTypeProcedure[index] = {
      ...newTypeProcedure[index],
      isChecked: !newTypeProcedure[index].isChecked,
    };
    setTypeProcedure(newTypeProcedure);
  };

  const checkedHandlerModeConstruction = (i: number, val: string) => {
    let index = modeConstructionLicense.findIndex(
      (element) => element.val === val
    );
    let newModeConstructionLicense = [...modeConstructionLicense];
    newModeConstructionLicense[index] = {
      ...newModeConstructionLicense[index],
      isChecked: !newModeConstructionLicense[index].isChecked,
    };
    setModeConstructionLicense(newModeConstructionLicense);
  };

  return (
    <IonPage>
      <Header canBack href="/gestion/dashboard" />
      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle className="ion-text-center">Aspectos Legales</IonTitle>
        </IonToolbar>
        <IonList>
          <IonItem>
            <IonText>1) Tipo de tramite</IonText>
          </IonItem>
          {typeProcedure.map(
            (
              { val, isChecked }: { val: string; isChecked: boolean },
              i: number
            ) => (
              <IonItem key={i} lines="none">
                <IonLabel className="ion-text-wrap">{val}</IonLabel>
                <IonCheckbox
                  slot="start"
                  value={val}
                  checked={isChecked}
                  onIonChange={() => checkedHandlerTypeProcedure(i, val)}
                />
              </IonItem>
            )
          )}
        </IonList>
        <IonList>
          <IonItem>2) Objetivo del tramite</IonItem>
          {procedureObjective.map(
            (
              { val, isChecked }: { val: string; isChecked: boolean },
              i: number
            ) => (
              <IonItem key={i} lines="none">
                <IonLabel className="ion-text-wrap">{val}</IonLabel>
                <IonCheckbox slot="start" value={val} checked={isChecked} />
              </IonItem>
            )
          )}
          <IonItem>
            <IonCheckbox slot="start" value="" checked={false} />
            <IonLabel className="ion-text-wrap">Otras actualizaciones</IonLabel>
            <IonInput slot="end" placeholder="¿Cual?" />
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <IonText>3) Modalidad licencia de urbanización</IonText>
          </IonItem>
          {modeUrbanLicense.map(
            (
              { val, isChecked }: { val: string; isChecked: boolean },
              i: number
            ) => (
              <IonItem key={i} lines="none">
                <IonLabel className="ion-text-wrap">{val}</IonLabel>
                <IonCheckbox slot="start" value={val} checked={isChecked} />
              </IonItem>
            )
          )}
        </IonList>
        <IonList>
          <IonItem>
            <IonText>4) Modalidad licencia de subdivision</IonText>
          </IonItem>
          {modeConstructionLicense.map(
            (
              { val, isChecked }: { val: string; isChecked: boolean },
              i: number
            ) => (
              <IonItem key={i} lines="none">
                <IonLabel className="ion-text-wrap">{val}</IonLabel>
                <IonCheckbox
                  slot="start"
                  value={val}
                  checked={isChecked}
                  onIonChange={() => checkedHandlerModeConstruction(i, val)}
                />
              </IonItem>
            )
          )}
        </IonList>
        <IonList>
          <IonItem>5) Modalidad licencia de construccion</IonItem>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">Obra nueva</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">Ampliación</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">Adecuación</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">Modificación</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">Restauración</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">
              Reforzamiento Estructural
            </IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">Demolición</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem lines="none">
                  <IonLabel className="ion-text-wrap">Parcial</IonLabel>
                  <IonCheckbox slot="start" />
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem lines="none">
                  <IonLabel className="ion-text-wrap">Total</IonLabel>
                  <IonCheckbox slot="start" />
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">Reconstrucción</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
          <IonItem lines="none">
            <IonLabel className="ion-text-wrap">Cerramiento</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>6) Usos</IonItem>
          {useMenu.map(
            (
              { val, isChecked }: { val: string; isChecked: boolean },
              i: number
            ) => (
              <IonItem key={i} lines="none">
                <IonLabel className="ion-text-wrap">{val}</IonLabel>
                <IonCheckbox slot="start" value={val} checked={isChecked} />
              </IonItem>
            )
          )}
          <IonItem lines="none">
            <IonCheckbox slot="start" value="" checked={false} />
            <IonLabel className="ion-text-wrap">Otro</IonLabel>
            <IonInput slot="end" placeholder="¿Cual?" />
          </IonItem>
        </IonList>
        <IonItem className="ion-margin-vertical">
          <IonLabel>7) Área construida </IonLabel>
          <IonSelect placeholder="Select">
            <IonSelectOption>1</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonList>
          <IonListHeader>8) Tipo de vivienda</IonListHeader>
          <IonRadioGroup
            value={typeOfHousing}
            onIonChange={(e) => setTypeOfHousing(e.detail.value!)}
          >
            {typeOfHousingOption.map((option, i) => (
              <IonItem key={i}>
                <IonLabel>{option}</IonLabel>
                <IonRadio slot="start" value={option} />
              </IonItem>
            ))}
          </IonRadioGroup>
        </IonList>
        <IonList>
          <IonListHeader>9) Vivienda de interes cultural</IonListHeader>
          <IonRadioGroup
            value={culturalInterest}
            onIonChange={(e) => setCulturalInterest(e.detail.value!)}
          >
            <IonItem>
              <IonLabel>Si</IonLabel>
              <IonRadio slot="start" value={true} />
            </IonItem>
            <IonItem>
              <IonLabel>No</IonLabel>
              <IonRadio slot="start" value={false} />
            </IonItem>
          </IonRadioGroup>
        </IonList>
        <IonList>
          <IonListHeader>
            10) Reglamentación de construcción sostenible
          </IonListHeader>
          <IonItem>
            Declaración sobre medidas de construcción sostenible
          </IonItem>
          <IonRadioGroup
            value={sustainableConstructionRegulations}
            onIonChange={(e) =>
              setSustainableConstructionRegulations(e.detail.value!)
            }
          >
            <IonItem>
              <IonLabel>Medidas pasivas</IonLabel>
              <IonRadio slot="start" value="P" />
            </IonItem>
            <IonItem>
              <IonLabel>Medidas activas</IonLabel>
              <IonRadio slot="start" value="A" />
            </IonItem>
            <IonItem>
              <IonLabel>Medidas activas y pasivas</IonLabel>
              <IonRadio slot="start" value="A&P" />
            </IonItem>
          </IonRadioGroup>
          <IonItem>Zonificación climática</IonItem>
          <IonRadioGroup
            value={sustainableConstructionRegulations}
            onIonChange={(e) =>
              setSustainableConstructionRegulations(e.detail.value!)
            }
          >
            <IonItem>
              <IonLabel>Frío</IonLabel>
              <IonRadio slot="start" value="COLD" />
            </IonItem>
            <IonItem>
              <IonLabel>Templado</IonLabel>
              <IonRadio slot="start" value="MILD" />
            </IonItem>
            <IonItem>
              <IonLabel>Cálido seco</IonLabel>
              <IonRadio slot="start" value="DRYWARM" />
            </IonItem>
            <IonItem>
              <IonLabel>Cálido húmedo</IonLabel>
              <IonRadio slot="start" value="WARMHUMID" />
            </IonItem>
            <IonItem>
              <IonLabel>Otro</IonLabel>
              <IonRadio slot="start" value="OTHER" />
              <IonInput slot="end" value="" placeholder="¿Cual?" />
            </IonItem>
          </IonRadioGroup>
        </IonList>
        <InformationAboutPredio />
        <IonItem>Linderos, dimensiones y áreas</IonItem>
        <IonList>
          <DimesionsComponent title="Norte:" />
          <DimesionsComponent title="Sur:" />
          <DimesionsComponent title="Este:" />
          <DimesionsComponent title="Oeste:" />
        </IonList>
        <IonItem>Titular(es) de la licencia</IonItem>
        <IonList>
          <OwnerOfLicense numberOfOwner={1} />
          <IonItem
            lines="none"
            className="ion-text-center ion-padding-horizontal"
            button
          >
            <IonIcon icon={createOutline} slot="start" />
            <IonText>Agregar más</IonText>
          </IonItem>
        </IonList>
        <ResponsibleProfessionals />
        <IonButton expand="full" size="large">
          Guardar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

const DimesionsComponent = ({ title }: { title: string }) => {
  const [longitude, setLongitude] = useState<string>("");
  const [adjoins, setAdjoining] = useState<string>("");
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonText>{title}</IonText>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="6">
          <IonInput
            value={longitude}
            placeholder="Longitud(m)"
            onIonChange={(e) => setLongitude(e.detail.value!)}
          />
        </IonCol>
        <IonCol size="6">
          <IonInput
            value={adjoins}
            placeholder="Colinda con"
            onIonChange={(e) => setAdjoining(e.detail.value!)}
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

const OwnerOfLicense = ({ numberOfOwner }: { numberOfOwner: number }) => {
  const [ownerName, setOwnerName] = useState("");
  const [ownerFirm, setOwnerFirm] = useState("");
  const [ID, setId] = useState<number>();
  const [ownerCellphone, setOwnerCellphone] = useState<number>();
  const [ownerEmail, setOwnerEmail] = useState<string>("");

  return (
    <IonGrid>
      <IonRow>
        <IonCol>Titular({numberOfOwner})</IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonInput
            value={ownerName}
            placeholder="Nombre completo"
            onIonChange={(e) => setOwnerName(e.detail.value!)}
          />
        </IonCol>
        <IonCol>
          <IonInput
            value={ownerFirm}
            placeholder="Firma"
            onIonChange={(e) => setOwnerFirm(e.detail.value!)}
          />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonInput
            value={ID}
            placeholder="C.C o NIT"
            type="number"
            onIonChange={(e) => setId(Number(e.detail.value!))}
          />
        </IonCol>
        <IonCol>
          <IonInput
            value={ownerCellphone}
            placeholder="Celular/telefono"
            type="number"
            onIonChange={(e) => setOwnerCellphone(Number(e.detail.value!))}
          />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonInput
            type="email"
            placeholder="Correo electronico"
            value={ownerEmail}
            onIonChange={(e) => setOwnerEmail(e.detail.value!)}
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

const InformationAboutPredio = () => {
  return (
    <>
      <IonList>
        <IonListHeader>1) Dirección o nomenclatura</IonListHeader>
        <IonItem>
          <IonInput type="text" placeholder="Actual" />
        </IonItem>
        <IonItem>
          <IonInput type="text" placeholder="Anterior(es)" />
        </IonItem>
      </IonList>
      <IonList>
        <IonListHeader>2) N° Matrícula inmobiliaria</IonListHeader>
        <IonItem>
          <IonInput
            type="number"
            placeholder="Ingrese el numero de la matricula"
          />
        </IonItem>
      </IonList>
      <IonList>
        <IonListHeader>3) N° Identificación catastral</IonListHeader>
        <IonItem>
          <IonInput
            type="text"
            placeholder="Ingrese el numero de identificación catastral"
          />
        </IonItem>
      </IonList>
      <IonList>
        <IonListHeader>4) Clasificación del suelo</IonListHeader>
        <IonRadioGroup>
          <IonItem>
            <IonLabel>Urbano</IonLabel>
            <IonRadio slot="start" value="COLD" />
          </IonItem>
          <IonItem>
            <IonLabel>Rural</IonLabel>
            <IonRadio slot="start" value="MILD" />
          </IonItem>
          <IonItem>
            <IonLabel>De expansion</IonLabel>
            <IonRadio slot="start" value="DRYWARM" />
          </IonItem>
        </IonRadioGroup>
      </IonList>
      <IonList>
        <IonListHeader>5) Planimetría del lote</IonListHeader>
        <IonRadioGroup>
          <IonItem>
            <IonLabel>Plano del loteo</IonLabel>
            <IonRadio slot="start" value="LOOTPLANE" />
          </IonItem>
          <IonItem>
            <IonLabel>Plano topografico</IonLabel>
            <IonRadio slot="start" value="TOPOGRAPHICPLANE" />
          </IonItem>
          <IonItem>
            <IonLabel>Otro</IonLabel>
            <IonRadio slot="start" value="OTHER" />
            <IonInput type="text" slot="end" placeholder="¿Cual?" />
          </IonItem>
        </IonRadioGroup>
      </IonList>
      <IonList>
        <IonListHeader>6) Información general: </IonListHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Barrio o urbanización"
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Vereda"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Comuna"
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Sector"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Estrato"
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Corregimiento"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Manzana N°"
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Lote N°"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText>Vecino (1)</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de predio"
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de correspondencia"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText>Vecino (2)</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de predio"
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de correspondencia"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText>Vecino (3)</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de predio"
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de correspondencia"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText>Vecino (4)</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de predio"
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de correspondencia"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText>Vecino (5)</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de predio"
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de correspondencia"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText>Vecino (6)</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de predio"
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                placeholder="Dirección de correspondencia"
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonList>
    </>
  );
};

const ResponsibleProfessionals = () => {
  return (
    <>
      <IonItem lines="none">
        <IonText>Profesionales responsables</IonText>
      </IonItem>
      <IonItem>
        <IonLabel>Seleccione profesional:</IonLabel>
        <IonSelect className="ion-text-wrap" interface="action-sheet">
          <IonSelectOption>
            Urbanizador o constructor responsable
          </IonSelectOption>
          <IonSelectOption>Arquitecto proyectista</IonSelectOption>
          <IonSelectOption>
            Ingeniero civil diseñador estructural
          </IonSelectOption>
          <IonSelectOption>
            Diseñador de elementos no estructurales
          </IonSelectOption>
          <IonSelectOption>Ingeniero civil geotecnista</IonSelectOption>
          <IonSelectOption>Ingeniero topógrafo y/o topógrafo</IonSelectOption>
          <IonSelectOption>
            Revisor independiente de los diseños estructurales
          </IonSelectOption>
          <IonSelectOption>Otros profesionales especialistas</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonGrid>
        <IonRow>
          <IonCol>Urbanizador o constructor responsable</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput placeholder="Nombre completo" />
          </IonCol>
          <IonCol>
            <IonInput placeholder="Firma" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput placeholder="C.C o NIT" type="number" />
          </IonCol>
          <IonCol>
            <IonInput placeholder="N° Matricula Profesional" type="number" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput placeholder="Fecha expedicion matricula" type="date" />
          </IonCol>
          <IonCol>
            <IonInput placeholder="Correo@mail.com" type="email" />
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCol>Responsable de la solicitud</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput placeholder="Nombre completo" />
          </IonCol>
          <IonCol>
            <IonInput placeholder="Firma" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput placeholder="C.C o NIT" type="number" />
          </IonCol>
          <IonCol>
            <IonInput placeholder="Celular/telefono" type="number" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput placeholder="Correo@mail.com" type="email" />
          </IonCol>
          <IonCol>
            <IonInput type="text" placeholder="Dirección de correspondecia" />
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default LegalAspects;

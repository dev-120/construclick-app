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
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonRadioGroup,
  IonListHeader,
  IonRadio,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState } from "react";
import { createOutline } from "ionicons/icons";
import Header from "../../../components/Header/Header";

import "./LegalAspects.css";
import useConstructions from "../../../hooks/useConstructions";

const typeOfProcedureMenu = [
  "Licencia de urbanizacion",
  "Licencia de parcelacion",
  "Licencia de subdivision",
  "Licencia de construccion",
  "Intervención y ocupacion de espacio publico",
  "Reconocimiento de la existencia de una edificacion",
];

const modeUrbanLicenseMenu = ["Desarrollo", "Saneamiento", "Reurbanización"];

const modeLicenseSubdivisionMenu = [
  "Subdivision rural",
  "Subdivision urbana",
  "Reloteo",
];

const procedureObjectiveMenu = [
  "Inicial",
  "Prórroga",
  "Modificación de licencia vigente",
  "Revalidación",
];

const useMenuData = [
  "Vivivenda",
  "Comercio y/o servicios",
  "Institucional",
  "Industrial",
];

const modeLicenseOfConstructionData = [
  "Obra nueva",
  "Ampliacion",
  "Adecuación",
  "Modificación",
  "Restauración",
  "Reforzamineto Estructural",
  "Demolicion",
  "Reconstrucción",
  "Cerramiento",
];

const typeOfHousingOption = ["VIP", "VIS", "No VIS"];

const LegalAspects: React.FC = () => {
  const { updateConstruction, constructionSelected } = useConstructions();
  //Tipo de tramite
  const [typeProcedure, setTypeProcedure] = useState("");
  //Objetivo del tramite
  const [procedureObjective, setProcedureObjective] = useState("");
  //Modalidad licencia de urbanizacion
  const [modeUrbanLicense, setModeUrbanLicense] = useState("");
  //Modalidad en licencia de subdivision
  const [modeLicenseSubdivision, setModeLicenseSubdivision] = useState("");
  //Modalidad licencia de construction
  const [modeLicenseOfConstruction, setModeLicenseOfConstruction] =
    useState("");
  //Usos
  const [useMenu, setUseMenu] = useState("");
  //Tipo de vivienda
  const [typeOfHousing, setTypeOfHousing] = useState("");
  //Vivienda de interes cultural
  const [culturalInterest, setCulturalInterest] = useState("");
  //Declaracion sobre medidas de construccion sostenible
  const [
    sustainableConstructionRegulations,
    setSustainableConstructionRegulations,
  ] = useState<string>("A");
  //Zonificacion climatica
  const [climateZonification, setClimateZonification] = useState("");


  const [addTypeProcedure, setAddTypeProcedure] = useState("");
  const [addProcedureObjective, setAddProcedureObjective] = useState("");
  const [addUseMenu, setAddUseMenu] = useState("");
  const [addClimateZonification, setAddClimateZonification] = useState("")

  const [actualDirection, setDirection] = useState("");
  const [oldDirection, setOldDirection] = useState("");
  const [realStateRegistration, setRealStateRegistration] = useState("");
  const [cadastralInfo, setCadastalInfo] = useState("");
  const [typeSoil, setTypeSoil] = useState("");
  const [lotPlan, setLotPlan] = useState("");
  const [otherLotPlan, setOtherLotPlan] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [trail, setTrail] = useState("");
  const [township, setTownship] = useState("");
  const [sector, setSector] = useState("");
  const [tier, setTier] = useState("");
  const [corregimiento, setCorregimiento] = useState("");
  const [block, setBlock] = useState("");
  const [batch, setBatch] = useState("");

  const [getNorth, setNorth] = useState({
    l: 0,
    c: 0,
  });
  const [getSouth, setSouth] = useState({
    l: 0,
    c: 0,
  });
  const [getEast, setEast] = useState({
    l: 0,
    c: 0,
  });
  const [getWest, setWest] = useState({
    l: 0,
    c: 0,
  });

  const [getProfesional, setProfesional] = useState("");
  const [getResponsibleC, setResponsibleC] = useState({
    fullName: "",
    signature: "",
    responsibleCId: "",
    registrationN: "",
    date: "",
    email: "",
  });
  const [requestOfficer, setRequestOfficer] = useState({
    fullName: "",
    signature: "",
    requestOfficerId: "",
    cellphone: "",
    email: "",
    address: "",
  });

  const handleNewLicenseOwner = (obj: any) => {
    console.log("HI");
  };

  const submitHandler = (e: any) => {
    let infoAspectosLegales = {};
    if (addTypeProcedure !== "") {
      infoAspectosLegales = {
        ...infoAspectosLegales,
        typeProcedure: addTypeProcedure,
      };
    } else {
      infoAspectosLegales = {
        ...infoAspectosLegales,
        typeProcedure,
      };
    }

    if (addProcedureObjective !== "") {
      infoAspectosLegales = {
        ...infoAspectosLegales,
        procedureObjective: addProcedureObjective,
      };
    } else {
      infoAspectosLegales = {
        ...infoAspectosLegales,
        procedureObjective,
      };
    }

    if(addUseMenu !== ""){
      infoAspectosLegales={
        ...infoAspectosLegales,
        addUseMenu,
      }
    }else{
      infoAspectosLegales = {
        ...infoAspectosLegales,
        useMenu,
      }
    }

    if(addClimateZonification !== ""){
      infoAspectosLegales= {
        ...infoAspectosLegales,
        climateZonification: addClimateZonification,
      }
    }else{
      infoAspectosLegales = {
        ...infoAspectosLegales,
        climateZonification,
      }
    }

    if(otherLotPlan !== ""){
      infoAspectosLegales= {
        ...infoAspectosLegales,
        lotPlan: otherLotPlan
      }
    }else {
      infoAspectosLegales = {
        ...infoAspectosLegales,
        lotPlan
      }
    }

    infoAspectosLegales = {
      ...infoAspectosLegales,
      modeUrbanLicense,
      modeLicenseSubdivision,
      modeLicenseOfConstruction,
      typeOfHousing,
      culturalInterest,
      sustainableConstructionRegulations,
      actualDirection,
      oldDirection,
      realStateRegistration,
      cadastralInfo,
      typeSoil,
      trail,
      township,
      sector,
      tier,
      corregimiento,
      block,
      batch,
      getNorth,
      getSouth,
      getEast,
      getWest,
      getProfesional,
      getResponsibleC,
      requestOfficer,
    };

    e.preventDefault();
    updateConstruction({
      ...constructionSelected,
      infoAspectosLegales,
    });
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
          <IonRadioGroup
            value={typeProcedure}
            onIonChange={(e) => setTypeProcedure(e.detail.value!)}
          >
            {typeOfProcedureMenu.map((value, i) => (
              <IonItem key={i} lines="none">
                <IonLabel className="ion-text-wrap">{value}</IonLabel>
                <IonRadio slot="start" value={value} />
              </IonItem>
            ))}
            <IonItem>
              <IonRadio slot="start" value={addTypeProcedure} />
              <IonInput
                value={addTypeProcedure}
                onIonChange={(e) => setAddTypeProcedure(e.detail.value!)}
                placeholder="¿Cual?"
              />
            </IonItem>
          </IonRadioGroup>
        </IonList>
        <IonList>
          <IonItem>2) Objetivo del tramite</IonItem>
          <IonRadioGroup
            value={procedureObjective}
            onIonChange={(e) => setProcedureObjective(e.detail.value!)}
          >
            {procedureObjectiveMenu.map((value) => (
              <IonItem key={value} lines="none">
                <IonLabel className="ion-text-wrap">{value}</IonLabel>
                <IonRadio slot="start" value={value} />
              </IonItem>
            ))}
            <IonItem>
              <IonRadio slot="start" value={addProcedureObjective} />
              <IonInput
                value={addProcedureObjective}
                placeholder="¿Cual?"
                onIonChange={(e) => setAddProcedureObjective(e.detail.value!)}
              />
            </IonItem>
          </IonRadioGroup>
        </IonList>
        <IonList>
          <IonItem>
            <IonText>3) Modalidad licencia de urbanización</IonText>
          </IonItem>
          <IonRadioGroup
            value={modeUrbanLicense}
            onIonChange={(e) => setModeUrbanLicense(e.detail.value!)}
          >
            {modeUrbanLicenseMenu.map((value) => (
              <IonItem key={value} lines="none">
                <IonLabel className="ion-text-wrap">{value}</IonLabel>
                <IonRadio value={value} />
              </IonItem>
            ))}
          </IonRadioGroup>
        </IonList>
        <IonList>
          <IonItem>
            <IonText>4) Modalidad licencia de subdivision</IonText>
          </IonItem>
          <IonRadioGroup
            value={modeLicenseSubdivision}
            onIonChange={(e) =>  setModeLicenseSubdivision(e.detail.value!)}
          >
            {modeLicenseSubdivisionMenu.map((value) => (
              <IonItem key={value} lines="none">
                <IonLabel className="ion-text-wrap">{value}</IonLabel>
                <IonRadio value={value} />
              </IonItem>
            ))}
          </IonRadioGroup>
        </IonList>
        <IonList>
          <IonItem>5) Modalidad licencia de construccion</IonItem>
          <IonRadioGroup
            value={modeLicenseOfConstruction}
            onIonChange={(e) => setModeLicenseOfConstruction(e.detail.value!)}
          >
            {modeLicenseOfConstructionData.map((value) => (
              <IonItem lines="none" key={value}>
                <IonLabel className="ion-text-wrap">{value}</IonLabel>
                <IonRadio slot="start" value={value} />
              </IonItem>
            ))}
          </IonRadioGroup>
        </IonList>
        <IonList>
          <IonItem>6) Usos</IonItem>
          <IonRadioGroup
            value={useMenu}
            onIonChange={(e) => setUseMenu(e.detail.value!)}
          >
            {useMenuData.map((value) => (
              <IonItem key={value} lines="none">
                <IonLabel className="ion-text-wrap">{value}</IonLabel>
                <IonRadio slot="start" value={value} />
              </IonItem>
            ))}
            <IonItem>
              <IonRadio slot="start" value={addUseMenu} />
              <IonInput
                value={addUseMenu}
                onIonChange={(e) => setAddUseMenu(e.detail.value!)}
                placeholder="¿Cual?"
              />
            </IonItem>
          </IonRadioGroup>
        </IonList>
        <form onSubmit={submitHandler}>
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
                <IonRadio slot="start" value="si" />
              </IonItem>
              <IonItem>
                <IonLabel>No</IonLabel>
                <IonRadio slot="start" value="no" />
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
              value={climateZonification}
              onIonChange={(e) => setClimateZonification(e.detail.value!)}
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
                <IonRadio slot="start" value={addClimateZonification} />
                <IonInput slot="end" value={addClimateZonification} onIonChange={(e) => setAddClimateZonification(e.detail.value!)} placeholder="¿Cual?" />
              </IonItem>
            </IonRadioGroup>
          </IonList>
          <InformationAboutPredio
            actualDirection={actualDirection}
            setDirection={setDirection}
            oldDirection={oldDirection}
            setOldDirection={setOldDirection}
            realStateRegistration={realStateRegistration}
            setRealStateRegistration={setRealStateRegistration}
            cadastralInfo={cadastralInfo}
            setCadastalInfo={setCadastalInfo}
            typeSoil={typeSoil}
            setTypeSoil={setTypeSoil}
            lotPlan={lotPlan}
            setLotPlan={setLotPlan}
            otherLotPlan={otherLotPlan}
            setOtherLotPlan={setOtherLotPlan}
            neighborhood={neighborhood}
            setNeighborhood={setNeighborhood}
            trail={trail}
            setTrail={setTrail}
            township={township}
            setTownship={setTownship}
            sector={sector}
            setSector={setSector}
            tier={tier}
            setTier={setTier}
            corregimiento={corregimiento}
            setCorregimiento={setCorregimiento}
            block={block}
            setBlock={setBlock}
            batch={batch}
            setBatch={setBatch}
          />
          <IonItem>Linderos, dimensiones y áreas</IonItem>
          <IonList>
            <DimesionsComponent title="Norte:" setPlace={setNorth} />
            <DimesionsComponent title="Sur:" setPlace={setSouth} />
            <DimesionsComponent title="Este:" setPlace={setEast} />
            <DimesionsComponent title="Oeste:" setPlace={setWest} />
          </IonList>
          <IonItem>Titular(es) de la licencia</IonItem>
          <IonList>
            <OwnerOfLicense
              numberOfOwner={1}
              saveLicenseOwner={handleNewLicenseOwner}
            />
            <IonItem
              lines="none"
              className="ion-text-center ion-padding-horizontal"
              button
            >
              <IonIcon icon={createOutline} slot="start" />
              <IonText>Agregar más</IonText>
            </IonItem>
          </IonList>
          <ResponsibleProfessionals
            getProfesional={getProfesional}
            setProfesional={setProfesional}
            getResponsibleC={getResponsibleC}
            setResponsibleC={setResponsibleC}
            requestOfficer={requestOfficer}
            setRequestOfficer={setRequestOfficer}
          />
          <IonButton expand="full" size="large" type="submit">
            Guardar
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

const DimesionsComponent = ({
  title,
  setPlace,
}: {
  title: string;
  setPlace: any;
}) => {
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
            onBlur={() => setPlace({ l: longitude, c: adjoins })}
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

const OwnerOfLicense = ({
  numberOfOwner,
  saveLicenseOwner,
}: {
  numberOfOwner: number;
  saveLicenseOwner: (obj: any) => void;
}) => {
  const [ownerName, setOwnerName] = useState("");
  const [ownerFirm, setOwnerFirm] = useState("");
  const [ID, setId] = useState("");
  const [ownerCellphone, setOwnerCellphone] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");

  const handleSaveClick = () => {
    saveLicenseOwner({
      ownerName,
      ownerFirm,
      identification: ID,
      ownerCellphone,
      ownerEmail,
    });
    setOwnerCellphone("");
    setOwnerEmail("");
    setOwnerFirm("");
    setOwnerName("");
    setId("");
  };

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
            type="text"
          />
        </IonCol>
        <IonCol>
          <IonInput
            type="text"
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
            type="text"
            onIonChange={(e) => setId(e.detail.value!)}
          />
        </IonCol>
        <IonCol>
          <IonInput
            value={ownerCellphone}
            placeholder="Celular/telefono"
            type="text"
            onIonChange={(e) => setOwnerCellphone(e.detail.value!)}
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
      <IonRow>
        <IonCol>
          <IonButton expand="block" onClick={handleSaveClick}>
            Guargar
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

const InformationAboutPredio = ({
  actualDirection,
  setDirection,
  oldDirection,
  setOldDirection,
  realStateRegistration,
  setRealStateRegistration,
  cadastralInfo,
  setCadastalInfo,
  typeSoil,
  setTypeSoil,
  lotPlan,
  setLotPlan,
  otherLotPlan,
  setOtherLotPlan,
  neighborhood,
  setNeighborhood,
  trail,
  setTrail,
  township,
  setTownship,
  sector,
  setSector,
  tier,
  setTier,
  corregimiento,
  setCorregimiento,
  block,
  setBlock,
  batch,
  setBatch,
}: any) => {
  return (
    <>
      <IonList>
        <IonListHeader>1) Dirección o nomenclatura</IonListHeader>
        <IonItem>
          <IonInput
            type="text"
            placeholder="Actual"
            value={actualDirection}
            onIonChange={(e) => setDirection(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonInput
            type="text"
            placeholder="Anterior(es)"
            value={oldDirection}
            onIonChange={(e) => setOldDirection(e.detail.value!)}
          />
        </IonItem>
      </IonList>
      <IonList>
        <IonListHeader>2) N° Matrícula inmobiliaria</IonListHeader>
        <IonItem>
          <IonInput
            type="number"
            placeholder="Ingrese el numero de la matricula"
            value={realStateRegistration}
            onIonChange={(e) => setRealStateRegistration(e.detail.value!)}
          />
        </IonItem>
      </IonList>
      <IonList>
        <IonListHeader>3) N° Identificación catastral</IonListHeader>
        <IonItem>
          <IonInput
            type="text"
            placeholder="Ingrese el numero de identificación catastral"
            value={cadastralInfo}
            onIonChange={setCadastalInfo}
          />
        </IonItem>
      </IonList>
      <IonList>
        <IonListHeader>4) Clasificación del suelo</IonListHeader>
        <IonRadioGroup
          value={typeSoil}
          onIonChange={(e) => setTypeSoil(e.detail.value!)}
        >
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
        <IonRadioGroup
          value={lotPlan}
          onIonChange={(e) => setLotPlan(e.detail.value!)}
        >
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
            <IonRadio slot="start" value={otherLotPlan} />
            <IonInput
              type="text"
              slot="end"
              placeholder="¿Cual?"
              value={otherLotPlan}
              onIonChange={(e) => setOtherLotPlan(e.detail.value!)}
            />
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
                value={neighborhood}
                onIonChange={(e) => setNeighborhood(e.detail.value!)}
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Vereda"
                value={trail}
                onIonChange={(e) => setTrail(e.detail.value!)}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Comuna"
                value={township}
                onIonChange={(e) => setTownship(e.detail.value!)}
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Sector"
                value={sector}
                onIonChange={(e) => setSector(e.detail.value!)}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Estrato"
                value={tier}
                onIonChange={(e) => setTier(e.detail.value!)}
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Corregimiento"
                value={corregimiento}
                onIonChange={(e) => setCorregimiento(e.detail.value!)}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Manzana N°"
                value={block}
                onIonChange={(e) => setBlock(e.detail.value!)}
              />
            </IonCol>
            <IonCol size="6">
              <IonInput
                className="ion-text-wrap"
                type="text"
                placeholder="Lote N°"
                value={batch}
                onIonChange={(e) => setBatch(e.detail.value!)}
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

const ResponsibleProfessionals = ({
  getProfesional,
  setProfesional,
  getResponsibleC,
  setResponsibleC,
  requestOfficer,
  setRequestOfficer,
}: any) => {
  return (
    <>
      <IonItem lines="none">
        <IonText>Profesionales responsables</IonText>
      </IonItem>
      <IonItem>
        <IonLabel>Seleccione profesional:</IonLabel>
        <IonSelect
          className="ion-text-wrap"
          interface="action-sheet"
          value={getProfesional}
          onIonChange={(e) => setProfesional(e.detail.value!)}
        >
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
            <IonInput
              placeholder="Nombre completo"
              value={getResponsibleC?.fullName}
              onIonChange={(e) =>
                setResponsibleC((data: any) => ({
                  ...data,
                  fullName: e.detail.value!,
                }))
              }
            />
          </IonCol>
          <IonCol>
            <IonInput
              placeholder="Firma"
              value={getResponsibleC?.signature}
              onIonChange={(e) =>
                setResponsibleC((data: any) => ({
                  ...data,
                  signature: e.detail.value!,
                }))
              }
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput
              placeholder="C.C o NIT"
              type="text"
              value={getResponsibleC?.responsibleCId}
              onIonChange={(e) =>
                setResponsibleC((data: any) => ({
                  ...data,
                  responsibleCId: e.detail.value!,
                }))
              }
            />
          </IonCol>
          <IonCol>
            <IonInput
              placeholder="N° Matricula Profesional"
              type="text"
              value={getResponsibleC?.registrationN}
              onIonChange={(e) =>
                setResponsibleC((data: any) => ({
                  ...data,
                  registrationN: e.detail.value!,
                }))
              }
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput
              placeholder="Fecha expedicion matricula"
              type="date"
              value={getResponsibleC?.date}
              onIonChange={(e) =>
                setResponsibleC((data: any) => ({
                  ...data,
                  date: e.detail.value!,
                }))
              }
            />
          </IonCol>
          <IonCol>
            <IonInput
              placeholder="Correo@mail.com"
              type="email"
              value={getResponsibleC?.email}
              onIonChange={(e) =>
                setResponsibleC((data: any) => ({
                  ...data,
                  email: e.detail.value!,
                }))
              }
            />
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonGrid>
        <IonRow>
          <IonCol>Responsable de la solicitud</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput
              placeholder="Nombre completo"
              value={requestOfficer?.fullName}
              onIonChange={(e) =>
                setRequestOfficer((data: any) => ({
                  ...data,
                  fullName: e.detail.value!,
                }))
              }
            />
          </IonCol>
          <IonCol>
            <IonInput
              placeholder="Firma"
              value={requestOfficer?.signature}
              onIonChange={(e) =>
                setRequestOfficer((data: any) => ({
                  ...data,
                  signature: e.detail.value!,
                }))
              }
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput
              placeholder="C.C o NIT"
              type="text"
              value={requestOfficer?.requestOfficerId}
              onIonChange={(e) =>
                setRequestOfficer((data: any) => ({
                  ...data,
                  requestOfficerId: e.detail.value!,
                }))
              }
            />
          </IonCol>
          <IonCol>
            <IonInput
              placeholder="Celular/telefono"
              type="text"
              value={requestOfficer?.cellphone}
              onIonChange={(e) =>
                setRequestOfficer((data: any) => ({
                  ...data,
                  cellphone: e.detail.value!,
                }))
              }
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput
              placeholder="Correo@mail.com"
              type="email"
              value={requestOfficer?.email}
              onIonChange={(e) =>
                setRequestOfficer((data: any) => ({
                  ...data,
                  email: e.detail.value!,
                }))
              }
            />
          </IonCol>
          <IonCol>
            <IonInput
              type="text"
              placeholder="Dirección de correspondecia"
              value={requestOfficer?.address}
              onIonChange={(e) =>
                setRequestOfficer((data: any) => ({
                  ...data,
                  address: e.detail.value!,
                }))
              }
            />
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default LegalAspects;

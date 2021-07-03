import {
  IonPage,
  IonContent,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonList,
  IonText,
  IonItem,
  IonSearchbar,
  IonIcon,
  IonBadge,
  IonItemDivider,
  IonLabel,
  IonNote,
  useIonModal,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonButton,
  IonCardContent,
  IonDatetime,
  IonModal,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
  IonTextarea,
} from "@ionic/react";
import { useEffect, useState } from "react";
import {
  alarmOutline,
  personCircle,
  checkmarkDoneCircle,
  people,
  list,
  duplicate,
  receipt,
  checkmarkCircleOutline,
  storefront,
  card,
  book,
  personAdd,
  calendar,
  calendarOutline,
  close,
  closeOutline,
  checkmarkCircle,
  chevronBack,
} from "ionicons/icons";

import "./ScheduleExecution.css"
import Header from "../../../components/Header/Header";
import ProfilePic from "../../../assets/profile_pic_personal.jpg";
import ProfilePic2 from "../../../assets/profile_pic_personal2.jpg";
import ProfilePic3 from "../../../assets/profile_pic_personal3.jpg";
import { useHistory } from "react-router";

const activitiesMenu = [
  {
    title: "Para hoy",
    total: 4,
    icon: alarmOutline,
    linkTo: "hoy",
    items: [
      {
        id: 0,
        title: "ACTA DE INICIO",
        since: "Lun. 31 de May",
        to: "Lun. 31 de May",
        assigned: {
          profilePic: ProfilePic,
          name: "Hassam Escobar",
          profession: "Interventor",
        },
        checked: false,
      },
      {
        id: 1,
        title: "DEMOLICIÓN DE MUROS",
        since: "Lun. 31 de May",
        to: "Mie. 2 de Jun",
        assigned: {
          profilePic: ProfilePic2,
          name: "Samuel Ricaute",
          profession: "Auxiliar de obra",
        },
        checked: false,
      },
      {
        id: 1,
        title: "DEMOLICIÓN DE PISOS",
        since: "Lun. 31 de May",
        to: "Mie. 2 de Jun",
        assigned: {
          profilePic: ProfilePic3,
          name: "Jorge Charris",
          profession: "Auxiliar de obra",
        },
        checked: false,
      },
      {
        id: 1,
        title: "DESMONTE DE PUERTAS",
        since: "Lun. 31 de May",
        to: "Mar. 1 de Jun",
        assigned: {
          profilePic: ProfilePic3,
          name: "Luis contreras",
          profession: "Albañil (Oficial)",
        },
        checked: false,
      },
    ],
  },
  {
    title: "Terminadas",
    total: 0,
    icon: checkmarkDoneCircle,
    linkTo: "terminadas",
  },
  { title: "Asignadas a", total: 5, icon: personCircle, linkTo: "asignadas" },
  {
    title: "Lista de actividades",
    total: 23,
    icon: receipt,
    linkTo: "actividades",
  },
];

const itemsListMenu = [
  { title: "Preliminares", total: "0/6" },
  { title: "Estructura", total: "0/6" },
  { title: "Mamposteria", total: "0/6" },
  { title: "Acabados", total: "0/6" },
  { title: "Pisos y enchapes", total: "0/7" },
  { title: "Carpinteria en madera", total: "0/6" },
];

interface ItemsListProps {
  title: string;
  total: string;
}

interface ScheduleProps {
  match: {
    url: string;
  };
}

const ScheduleExecution: React.FC<ScheduleProps> = ({ match }) => {
  const dismissHandler = () => {
    dismmiss();
  };
  const saveHandler = () => {
    setShowDisabled(false);
  };
  const [searchValue, setSearchValue] = useState<string>("");
  const [itemsList, setItemsList] =
    useState<Array<ItemsListProps>>(itemsListMenu);
  const [showNewItem, setShowNewItem] = useState<boolean>(false);
  const [showDisabled, setShowDisabled] = useState(true);
  const [selectedItem, setSelectedItem] = useState<Object>({});
  const [present, dismmiss] = useIonModal(ShowItemsList, {
    onDismiss: dismissHandler,
    onSave: saveHandler,
    activities: selectedItem,
    showDisabled,
  });

  const clickHandler = (name: string) => {
    setSelectedItem(activitiesMenu.find((item) => item.title === name) || {});
    present();
  };

  return (
    <IonPage>
      <Header canBack href="/gestion/dashboard" />
      <IonContent>
        <IonToolbar>
          <IonTitle className="ion-text-center">
            Cronograma - ejecucíon
          </IonTitle>
        </IonToolbar>
        <IonList>
          <IonItem lines="none">
            <IonSearchbar
              placeholder="Buscar actividad"
              animated
              value={searchValue}
              onIonChange={(e) => setSearchValue(e.detail.value!)}
            />
          </IonItem>
          {activitiesMenu.map((activity, index) => (
            <IonItem
              key={index}
              lines="none"
              button
              disabled={activity.linkTo === "hoy" ? false : showDisabled}
              onClick={() => clickHandler(activity.title)}
            >
              <IonIcon slot="start" icon={activity.icon} color="dark" />
              <IonLabel>{activity.title}</IonLabel>
              <IonBadge mode="md" slot="end" color="dark">
                {activity.total}
              </IonBadge>
            </IonItem>
          ))}
          <IonItemDivider></IonItemDivider>
          <IonItem lines="none">
            <IonTitle>Lista de Items</IonTitle>
          </IonItem>
          {itemsList.map((item, index) => (
            <IonItem
              button
              key={index}
              lines="none"
              className="ion-text-wrap"
              routerLink={`${match.url}/${item.title.toLowerCase()}`}
              disabled={showDisabled}
            >
              <IonIcon slot="start" icon={list} />
              <IonLabel>{item.title}</IonLabel>
              <IonIcon icon={people} slot="end" />
              <IonNote slot="end">{item.total}</IonNote>
            </IonItem>
          ))}
          <IonItem
            button
            onClick={() => setShowNewItem(true)}
            disabled={showDisabled}
          >
            <IonIcon slot="start" icon={duplicate} />
            <IonLabel>Nuevo Item</IonLabel>
          </IonItem>
          {showNewItem && (
            <NewItemSchedule setShow={() => setShowNewItem(!showNewItem)} />
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

type NewItemScheduleProps = {
  setShow: () => void;
};

const NewItemSchedule = ({ setShow }: NewItemScheduleProps) => {
  const [selectedOption, setSelectedOption] = useState("volume");
  const [budget, setBudget] = useState<number>(0);

  return (
    <IonCard>
      <IonItem>
        <IonIcon slot="start" icon={checkmarkCircleOutline} />
        <IonInput placeholder="Ingrese nombre de actividad" required />
        <IonButton
          slot="end"
          fill="clear"
          color="dark"
          onClick={() => setShow()}
        >
          <IonIcon slot="icon-only" icon={closeOutline} />
        </IonButton>
      </IonItem>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonIcon slot="start" icon={calendarOutline} />
            <IonLabel>Desde: </IonLabel>
            <IonDatetime
              displayFormat="YYYY-MM-DD"
              displayTimezone="America/Bogota"
              placeholder="Ingrese Fecha"
            />
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={calendar} />
            <IonLabel>Hasta: </IonLabel>
            {/*<IonInput
              type="date"
            /> */}
            <IonDatetime
              displayFormat="YYYY-MM-DD"
              displayTimezone="America/Bogota"
              placeholder="Ingrese Fecha"
            />
          </IonItem>
          <IonItem disabled>
            <IonIcon slot="start" icon={personAdd} />
            <IonLabel>Asignar a: Personal contratado</IonLabel>
          </IonItem>
          <IonItem disabled>
            <IonIcon slot="start" icon={storefront} />
            <IonLabel>Almacen: Insumos, materiales y equipos</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={card} />
            <IonLabel>presupuesto: </IonLabel>
            <IonInput
              type="number"
              placeholder="Ingrese presupuesto"
              value={budget}
              onIonChange={(e) => setBudget(parseInt(e.detail.value!))}
            />
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={book} />
            <IonLabel>Cantidad: </IonLabel>
            <IonInput type="number" />
            <IonSelect
              value={selectedOption}
              onIonChange={(e) => setSelectedOption(e.detail.value!)}
            >
              <IonSelectOption value="distance">Distancia</IonSelectOption>
              <IonSelectOption value="area">Área</IonSelectOption>
              <IonSelectOption value="volume">Volumen</IonSelectOption>
              <IonSelectOption value="unit">Unidad</IonSelectOption>
              <IonSelectOption value="global">Global</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

type itemsProps = {
  items: [{ title: string; since: string; to: string }];
};

type ShowItemListProps = {
  activities: {
    title: string;
    items: [
      {
        title: string;
        since: string;
        to: string;
        linkTo: string;
        assigned: {
          profilePic: string;
          name: string;
          profession: string;
        };
        checked: boolean;
      }
    ];
  };
  onDismiss: () => void;
  onSave: () => void;
  showDisabled: boolean;
};

const ShowItemsList = ({
  activities,
  onDismiss,
  onSave,
  showDisabled,
}: ShowItemListProps) => {
  const handleDismiss = () => {
    dismiss();
  };

  const handleNewModal = () => {
    present();
  };

  const [items, setItems] = useState(activities.items);
  const [present, dismiss] = useIonModal(ShowAct, {
    clickDismmiss: handleDismiss,
    onSave,
  });
  return (
    <IonContent>
      <IonList>
        <IonToolbar className="ion-text-center">
          <IonTitle>Cronograma - ejecución</IonTitle>
        </IonToolbar>
        <IonItem lines="none">
          <IonButton fill="clear" onClick={() => onDismiss()}>
            <IonIcon icon={chevronBack} color="dark" />
          </IonButton>
          <IonLabel className="ion-text-center">{activities.title}</IonLabel>
        </IonItem>
        {items.map(
          (item: {
            title: string;
            since: string;
            to: string;
            assigned: { profilePic: string; name: string; profession: string };
            checked: boolean;
          }) => (
            <IonCard
              disabled={item.title === "ACTA DE INICIO" ? false : showDisabled}
              key={item.title}
              onClick={handleNewModal}
            >
              <IonGrid>
                <IonRow>
                  <IonCol size="8">
                    <IonItem lines="none">
                      <IonLabel
                        className="ion-text-wrap"
                        style={
                          !showDisabled && item.title === "ACTA DE INICIO"
                            ? { textDecoration: "line-through" }
                            : {}
                        }
                      >
                        {item.title}
                      </IonLabel>
                      <IonIcon
                        slot="start"
                        icon={
                          showDisabled
                            ? checkmarkCircleOutline
                            : checkmarkCircle
                        }
                      />
                    </IonItem>
                    <IonItem lines="none">
                      <IonLabel>{item.since}</IonLabel>
                      <IonIcon slot="start" icon={calendarOutline} />
                    </IonItem>
                    <IonItem lines="none">
                      <IonLabel>{item.to}</IonLabel>
                      <IonIcon slot="start" icon={calendar} />
                    </IonItem>
                  </IonCol>
                  <IonCol size="4" className="ion-no-padding">
                    <IonItem
                      lines="none"
                      className="ion-text-center"
                      style={{ height: "80px" }}
                    >
                      <img
                        src={item.assigned.profilePic}
                        style={{ borderRadius: "50%", height: "80px" }}
                      />
                    </IonItem>
                    <IonItem lines="none" className="ion-text-center">
                      <IonLabel className="ion-text-wrap">
                        {item.assigned.name}
                      </IonLabel>
                    </IonItem>
                    <IonItem lines="none" className="ion-text-center">
                      <IonLabel className="ion-text-wrap">
                        <strong>{item.assigned.profession}</strong>
                      </IonLabel>
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
          )
        )}
      </IonList>
    </IonContent>
  );
};

type ShowActProps = {
  clickDismmiss: () => void;
  onSave: () => void;
};

const ShowAct = ({ clickDismmiss, onSave }: ShowActProps) => {
  const [date, setDate] = useState("05/31/2021");
  const [textArea, setTextArea] = useState("");

  const saveHandler = () => {
    clickDismmiss();
    onSave();
  };
  return (
    <IonContent>
      <IonToolbar>
        <IonItem lines="none">
          <IonTitle>Acta de Inicio</IonTitle>
          <IonButton fill="clear" onClick={() => clickDismmiss()}>
            <IonIcon icon={close} color="dark" />
          </IonButton>
        </IonItem>
      </IonToolbar>
      <IonList>
        <IonItem lines="none">
          <IonLabel slot="start">Contrato de obra: </IonLabel>
          <IonText>N° - 0000000001</IonText>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>Fecha: </IonLabel>
          <IonDatetime
            value={date}
            pickerFormat="MM/DD/YYYY"
            displayFormat="MM/DD/YYYY"
            onIonChange={(e) => setDate(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Descripción general: </IonLabel>
          <IonTextarea
            value={textArea}
            onIonChange={(e) => setTextArea(e.detail.value!)}
            placeholder="Inserte Texto aqui"
          />
        </IonItem>
        <IonItem>
          <IonLabel slot="start">Valor inicial: </IonLabel>
          <IonText slot="end">
            <strong>$ 37'800.000</strong>
          </IonText>
        </IonItem>
        <IonItem>
          <IonLabel>Fecha programada de INICIO:</IonLabel>
          <IonText>Lun.31 / May</IonText>
        </IonItem>
        <IonItem>
          <IonLabel>Fecha programada de FINAL:</IonLabel>
          <IonText>Mir.15 / Jul</IonText>
        </IonItem>
        <IonItem>
          <IonLabel className="ion-text-wrap">
            Funcionarios autorizados para trabajar en obra:{" "}
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <IonItem lines="none">
                  <img src={ProfilePic} />
                </IonItem>
                <IonItem className="ion-text-center" lines="none">
                  <IonLabel className="ion-text-wrap">Hassem Escobar</IonLabel>
                </IonItem>
                <IonItem className="ion-text-center" lines="none">
                  <IonLabel className="ion-text-wrap">
                    <strong>Interventor</strong>
                  </IonLabel>
                </IonItem>
              </IonCol>
              <IonCol size="6">
                <IonItem lines="none">
                  <img src={ProfilePic2} />
                </IonItem>
                <IonItem className="ion-text-center" lines="none">
                  <IonLabel className="ion-text-wrap">Luis Contreras</IonLabel>
                </IonItem>
                <IonItem className="ion-text-center" lines="none">
                  <IonLabel className="ion-text-wrap">
                    <strong>Albañil (Oficial)</strong>
                  </IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonList>
      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonLabel>INFORMACIÓN DEL CONTRATANTE</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel slot="start">
              <strong>Nombre:</strong>
            </IonLabel>
            <IonText>Luis Alfredo Escobar Castillo</IonText>
          </IonItem>
          <IonItem lines="none">
            <IonLabel slot="start">
              <strong>Celular:</strong>
            </IonLabel>
            <IonText>300-XXX-XXXX</IonText>
          </IonItem>
          <IonItem lines="none">
            <IonLabel slot="start">
              <strong>Correo:</strong>
            </IonLabel>
            <IonLabel className="ion-text-wrap">Personal@correo.com</IonLabel>
          </IonItem>
        </IonCardContent>
      </IonCard>
      <IonList>
        <IonItem>
          <p style={{ fontSize: "10px" }}>
            Los empleados que han sido contratados de manera individual por
            medio de nuestra base de datos de expertos. se comprometen a
            ejecutar la obra de acuerdo a los parametros especificados en este
            documento y en la información suministrada en la fase(0) y fase(1)
            del proyecto. Los empleador, instaladores y/o cuadrillas no están
            autorizados para recibir dinero, préstamo de bienes, utensilios o
            artículos para trabajo: estas personas se encuentran debidamente
            dotadas de herramientas, insumos e implementos de seguridad para la
            realizacion de los trabajos. No están autorizados para realizar
            trabajos o actividades que no se encuentren incluidos o
            especificados en los documentos suscritos y firmados por las partes.
            La empresa no asuma la responsabilidad alguna por la pérdida o daños
            de objetos personales extraviados, salvo que se demuestre
            judicialmente que fueron hurtados, dañados o averiados por los
            operarios o supervisores de esta obra. Solamente el
            interventor/supervisor se encuentra autorizado para entregar o
            recibir información de parte del cliente. Para esto, se ha
            establecido un canal de comunicación directa con el
            interventor/supervisor de la obra y el contratante.
          </p>
        </IonItem>
      </IonList>
      <IonCard>
        <IonCardContent>
          <IonItem>
            <IonLabel position="floating">Observaciones: </IonLabel>
            <IonTextarea placeholder="Inserte texto aquí"></IonTextarea>
          </IonItem>
        </IonCardContent>
      </IonCard>
      <IonCard disabled>
        <IonCardContent>
          <IonItem className="ion-text-center">
            <IonLabel>
              <strong>FIRMA DEL CONTRATANTE</strong>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <strong>Nombre: </strong>
            </IonLabel>
            <IonText>Luis Alfredo Castillo Duran</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>
              <strong>Correo: </strong>
            </IonLabel>
            <IonText>Personal@correo.com</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>Firmar por correo</IonLabel>
            <IonButton slot="end">Firmar</IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardContent>
          <IonItem className="ion-text-center">
            <IonLabel>
              <strong>FIRMA DEL CONTRATANTE</strong>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <strong>Nombre: </strong>
            </IonLabel>
            <IonText>Hassem Escobar Coquies</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>
              <strong>Correo: </strong>
            </IonLabel>
            <IonText>Personal@correo.com</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>Firmar por correo</IonLabel>
            <IonButton slot="end">Firmar</IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>
      <IonButton expand="block" onClick={saveHandler}>
        GUARDAR
      </IonButton>
    </IonContent>
  );
};

export default ScheduleExecution;

import {
  IonButton,
  IonIcon,
  IonItem,
  IonList,
  IonSearchbar,
  IonText,
  useIonModal,
  IonAvatar,
  IonGrid,
  IonRow,
  IonThumbnail,
  IonCol,
} from "@ionic/react";
import { useState } from "react";
import { close, search } from "ionicons/icons";
import { useHistory, useLocation } from "react-router";
import {
  queryProfileByProfession,
  queryProductByName,
} from "../../services/searchbar.service";

import "./SearchButton.css";

interface products {
  _id: number;
  categoryId: string;
  image_url: string;
  price: number;
  title: string;
  userId: string;
  userName: string;
}

interface professionals {
  _id: number;
  name: string;
  profession: string;
  image_url: string;
}

const SearchListResult: React.FC<any> = ({
  results,
  onDismiss,
  onItemClick
}: {
  results: professionals[] | products[];
  onDismiss: () => void;
  onItemClick: any;
}) => {

  const handleItemClick = (id: string) => {
    onItemClick(id)
    onDismiss()
  }

  return (
    <IonList>
      <IonItem lines="none">
        <IonText slot="start">Resultados</IonText>
        <IonButton slot="end" color="primary" onClick={() => onDismiss()}>
          <IonIcon slot="icon-only" icon={close} />
        </IonButton>
      </IonItem>
      {results.length === 0 ? (
        <IonItem>
          <IonText color="dark">Sin resultados</IonText>
        </IonItem>
      ) : (
        <>
          {results[0].hasOwnProperty("profession") &&
            results.map((result: any) => (
              <IonItem key={result._id} button lines="full">
                <IonAvatar>
                  <img src={result.image_url} alt="" />
                </IonAvatar>
                <IonGrid>
                  <IonRow className="ion-justify-content-center">
                    {result.name}
                  </IonRow>
                  <IonRow className="ion-justify-content-center">
                    {result.profession}
                  </IonRow>
                </IonGrid>
              </IonItem>
            ))}
          {results[0].hasOwnProperty("price") &&
            results.map((result: any) => (
              <IonItem key={result._id} button lines="full" onClick={() => handleItemClick(result._id)} >
                <IonThumbnail>
                  <img src={result.image_url} alt="" />
                </IonThumbnail>
                <IonGrid>
                  <IonRow className="ion-justify-content-center">
                    {result.title}
                  </IonRow>
                  <IonRow className="ion-justify-content-center">
                    <IonCol>{result.userName}</IonCol>
                    <IonCol>$ {result.price}</IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            ))}
        </>
      )}
    </IonList>
  );
};

const SearchButton: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [toggleSearchButton, setTooggleSearchButton] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [present, dismiss] = useIonModal(SearchListResult, {
    onDismiss: () => dismiss(),
    results: searchResults,
    onItemClick: (id: string) => handleItemClick(id),
  });
  const { pathname } = location;

  const handleItemClick = (id: string) => {
    history.push(`/marketplace/${id}`)
  }

  const handleSearch = async (e: any, searchTerm: string) => {
    if (searchTerm === "") setSearchResults([]);

    if (pathname.includes("marketplace")) {
      try {
        let response = await queryProductByName(searchTerm);
        if (response.status === 200) {
          setSearchResults(response.data.data);
        }
      } catch (e) {
        console.error(e);
      }
    } else if (pathname.includes("posts")) {
      try {
        let response = await queryProfileByProfession(searchTerm);
        if (response.status === 200) {
          setSearchResults(response.data.data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    if (searchTerm !== "") present();
  };

  return !toggleSearchButton ? (
    <IonButton
      shape="round"
      fill="clear"
      className="Header-searchbutton__styles"
      onClick={() => setTooggleSearchButton(!toggleSearchButton)}
    >
      <IonIcon slot="icon-only" className="Search-icon__button" icon={search} />
    </IonButton>
  ) : (
    <div className="container-search__input">
      <IonSearchbar
        value={searchTerm}
        onIonChange={(e) => setSearchTerm(e.detail.value!)}
        debounce={250}
        inputmode="text"
        placeholder="Escribe aqui..."
        searchIcon={search}
        className="Header-searchbar__styles"
        inputMode="search"
        onIonClear={() => setTooggleSearchButton(false)}
      />
      <IonButton
        color="primary"
        fill="outline"
        onClick={(e) => handleSearch(e, searchTerm)}
      >
        Buscar
      </IonButton>
    </div>
  );
};

export default SearchButton;

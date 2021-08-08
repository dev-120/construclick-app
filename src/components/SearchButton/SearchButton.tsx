import {
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonSearchbar,
} from "@ionic/react";
import { useState } from "react";
import { search } from "ionicons/icons";

import "./SearchButton.css";

const SearchButton: React.FC = () => {
  const [toggleSearchButton, setTooggleSearchButton] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

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
    <IonSearchbar
      value={searchTerm}
      onIonChange={(e) => setSearchTerm(e.detail.value!)}
      debounce={250}
      inputmode="text"
      placeholder="Escribe aqui..."
      searchIcon={search}
      className="Header-searchbar__styles"
      onIonBlur={() => setTooggleSearchButton(false)}
    />
  );
};

export default SearchButton;

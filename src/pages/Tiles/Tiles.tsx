import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";


import "./Tiles.css"
import Header from "../../components/Header/Header";
import CeramicFloorImg from "../../assets/ceramic_floor.png";
import PorcelainFloorImg from "../../assets/porcelain_floor.png"
import VeneerImg from "../../assets/veneer.png";
import { useHistory } from "react-router";

interface TilesProps{
  match: {
    url: string;
  }
}

interface menuTilesProps{
  type: string;
  linkTo: string;
  imgSrc: string;
}

const menuTiles= [
  { type: "Piso ceramico", linkTo: "ceramic-floor", imgSrc: CeramicFloorImg },
  { type: "Piso porcelanato", linkTo: "porcelain-floor", imgSrc: PorcelainFloorImg },
  { type: "Enchape", linkTo: "veneer", imgSrc: VeneerImg }
]

const Tiles:React.FC<TilesProps> = ({ match }) => {
  const history = useHistory();

  const onClickCardHandler = (path: string) => {
    history.push({ pathname: `${match.url}/${path}`, state: { name: path } })
  }

  return (
    <IonPage>
      <IonPage>
        <IonContent fullscreen className="Tiles-content__style">
          <Header canBack href="/calculator" />
          <IonCard>
            <IonCardHeader className="Tiles-menu__style">
              <IonCardTitle className="ion-text-center">
                Piso / enchape
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {menuTiles.map(
                ({ type, linkTo, imgSrc }: menuTilesProps) => (
                  <IonItem
                    lines="none"
                    className="ion-margin-vertical"
                    button
                    onClick={() => onClickCardHandler(linkTo)}
                    key={linkTo}
                  >
                    <img
                      src={imgSrc}
                      slot="start"
                      className="Tiles-image__style"
                      alt=""
                    />
                    <IonGrid>
                      <IonRow>
                        <IonCol size="12">
                          <IonText>{type}</IonText>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                )
              )}
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonPage>
  )
}


export default Tiles
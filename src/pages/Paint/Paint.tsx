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
import { useHistory } from "react-router";

import "./Paint.css"
import Header from "../../components/Header/Header";
import InteriorPaintImg from "../../assets/interior_paint.png";
import ExteriorPaintImg from "../../assets/exterior_paint.png"

interface PaintProps{
  match: {
    url: string;
  }
}

interface menuPaintProps{
  type: string;
  linkTo: string;
  imgSrc: string;
  menu: string;
}

const menuPaint= [
  { type: "Pintura interior", linkTo: "interior-painting", imgSrc: InteriorPaintImg, menu: "interior-painting" },
  { type: "Pintura exterior", linkTo: "exterior-painting", imgSrc: ExteriorPaintImg, menu: "exterior-painting" }
]

const Paint:React.FC<PaintProps> = ({ match }) => {
  const history = useHistory();
  const onClickCardHandler = (path: string, state: string) =>{
    history.push({ pathname: `${match.url}/${path}`, state: { name: state} })
  }
  return (
    <IonPage>
      <IonPage>
        <IonContent fullscreen className="Paint-content__style">
          <Header canBack href="/calculator" />
          <IonCard>
            <IonCardHeader className="Paint-menu__style">
              <IonCardTitle className="ion-text-center">
                Pintura
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {menuPaint.map(
                ({ type, linkTo, imgSrc, menu }: menuPaintProps) => (
                  <IonItem
                    lines="none"
                    className="ion-margin-vertical"
                    button
                    onClick={() => onClickCardHandler(linkTo, menu)}
                    key={linkTo}
                  >
                    <img
                      src={imgSrc}
                      slot="start"
                      className="Paint-image__style"
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


export default Paint
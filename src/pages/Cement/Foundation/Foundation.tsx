import {
  IonPage,
  IonContent,
  IonSlide,
  IonSlides,
  IonText,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCardHeader,
  IonItem,
} from "@ionic/react";
import { useRef, useEffect, useState } from "react";

import "./Foundation.css";
import Header from "../../../components/Header/Header";
import Beam from "../../../assets/viga.png"
import Pile from "../../../assets/pilote.png"
import FoundationImg from "../../../assets/zapata.png"


const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

interface FoundationProps{
  match: {
    url: string
  }
}

const FoundationOptions = [
  { title: "Viga cimentación", isChecked: false, imageSrc: Beam },
  { title: "Zapata", isChecked: false, imageSrc: FoundationImg  },
  { title: "Pilote", isChecked: false, imageSrc: Pile },
]

// interface CheckedOption {
//   value: string;
//   isChecked: boolean;
// }
interface CheckedOption {
  title: string;
  isChecked: boolean;
  imageSrc: string;
}



const Foundation: React.FC<FoundationProps> = ({ match }) => {
  const [optionBeam , setCheckedOptionBeam] = useState(false)
  const [optionFoundation , setCheckedOptionFoundation] = useState(false)
  const [optionPile , setCheckedOptionPile] = useState(false)

  const [checkedOptions, setCheckedOptions] = useState([false, false, false])

  const slidesRef = useRef<HTMLIonSlidesElement>(null);

  useEffect(() => {
    if(!optionBeam && !optionFoundation && !optionPile){
      slidesRef.current?.lockSwipes(true)
    }else{
      slidesRef.current?.lockSwipes(false)
    }

  },[])

  const clickHandler = (title: string) => {
    if (title === "Viga cimentación"){
      setCheckedOptionBeam(true)
      setCheckedOptionFoundation(false)
      setCheckedOptionPile(false)
      console.log(title)
      slidesRef.current?.slideNext()
    }

    if (title === "Zapata"){
      setCheckedOptionBeam(false)
      setCheckedOptionFoundation(true)
      setCheckedOptionPile(false)
      slidesRef.current?.slideNext()
    }

    if (title === "Pilote"){
      setCheckedOptionBeam(false)
      setCheckedOptionFoundation(false)
      setCheckedOptionPile(true)
      slidesRef.current?.slideNext()
    }
  }

  return (
    <IonPage>
      <IonContent className="Foundation-content__style" fullscreen>
        <Header canBack href={`${match.url}`} />
        <IonSlides
          options={slideOpts}
          ref={slidesRef}
        >
          <IonSlide>
            <IonCard>
              <IonCardHeader className="Foundation-menu__style">
                <IonCardTitle className="ion-text-center">
                  Cimentación
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {FoundationOptions.map(({title, isChecked, imageSrc}:CheckedOption) => (
                  <IonItem key={title} lines="none" className="ion-margin-vertical" button onClick={() => clickHandler(title)}>
                    <img src={imageSrc} slot="start" className="Foundation-image__style" />
                    <IonText>{title}</IonText>
                  </IonItem>
                ))}
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
          {optionBeam ? 
          (
              <IonText color="light">VIGA</IonText>
          )
          :
            optionFoundation ?
            (
              <IonText color="light">Zapata</IonText>)
          :
            optionPile &&(
              <IonText color="light">Pila</IonText>
            )
          }
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

const OptionBeam:React.FC = () => {
  
  return (
    <>
      <IonItem>

      </IonItem>
    </>
  )
}

export default Foundation;

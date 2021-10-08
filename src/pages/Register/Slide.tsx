import {
    IonButton,
    IonToolbar,
    IonSlide,
    IonFooter,
    IonCol,
    IonGrid,
    IonRow,
  } from "@ionic/react";

export const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

export interface SlideProps {
  children?: React.ReactNode;
  canBack: boolean;
  backSlideHandler: React.MouseEventHandler<HTMLIonButtonElement>;
}

export const Slide: React.FC<SlideProps> = ({
  children,
  canBack,
  backSlideHandler,
}) => (
  <IonSlide className="ion-padding">
    {children}
    {canBack && <SlideFooter />}
  </IonSlide>
);

export const SlideFooter: React.FC = () => {
  return (
    <IonFooter mode="md">
      <IonToolbar className="footer-page__register">
        <IonButton expand="block" fill="clear" color="primary">
          Al ingresar aceptas nuestros <br />
          terminos y condiciones
        </IonButton>
      </IonToolbar>
    </IonFooter>
  );
};

export interface SlideButtonRegister {
  canBack: boolean;
  backSlideHandler?: (e: any) => void;
  clickHandler?: (e: any) => void;
  titleButton?: string;
}

export const SlideButtons: React.FC<SlideButtonRegister> = ({
  canBack,
  backSlideHandler,
  clickHandler,
  titleButton,
}) => {
  return (
    <>
      {canBack && (
        <IonGrid>
          <IonRow className="justify-content-center">
            <IonCol size="6">
              <IonButton
                fill="outline"
                className="ion-padding-horizontal button-register__outline"
                expand="block"
                onClick={backSlideHandler}
              >
                atras
              </IonButton>
            </IonCol>
            <IonCol size="6">
              <IonButton
                className="ion-padding-horizontal ion-border-horizontal"
                expand="full"
                onClick={clickHandler}
              >
                {titleButton ? titleButton : "Siguiente"}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      )}
      {!canBack && (
        <IonButton className="ion-margin-top" onClick={clickHandler}>
          {titleButton ? titleButton : "Siguiente"}
        </IonButton>
      )}
    </>
  );
};

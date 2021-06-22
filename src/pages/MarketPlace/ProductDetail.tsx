import {
  IonContent,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonText,
  IonLoading,
  IonIcon,
  IonItem,
  IonImg,
  IonGrid,
  IonRow,
  IonChip,
  IonSlides,
  IonSlide,
  IonCol,
  IonButton,
  IonBadge,
  IonItemDivider,
  IonInput,
  IonTextarea,
} from "@ionic/react";
import { pricetagOutline } from "ionicons/icons";
import { useEffect, useState, useRef } from "react";

import exampleItems from "./utils";
import Header from "../../components/Header/Header";
import "./ProductDetail.css";
import Section from "../../components/SectionProducts/SectionProducts"

interface productItem {
  match: {
    params: {
      productId: string;
    };
  };
}

interface Comments {
  comments: Array<string>;
}

const QuestionsAsked: React.FC = () => {
  const mockupQuestions=[
    {
      question: "¿Tiene un tamaño mas grande?",
      response: "Si, tenemos todos los tamaños disponibles, visita nuestra tienda"
    },
    {
      question: "¿Tiene un tamaño mas grande?",
      response: "Si, tenemos todos los tamaños disponibles, visita nuestra tienda"
    },
    {
      question: "¿Tiene un tamaño mas grande?",
      response: "Si, tenemos todos los tamaños disponibles, visita nuestra tienda"
    },
  ];

  return (
    <>
      <IonText>Preguntas realizadas</IonText>
      <IonGrid>
        {mockupQuestions.map((question, index) => (
          <IonRow key={index}>
          <IonCol size="12" className="ion-text-left">
            <IonText color="success">{question.question}</IonText>
          </IonCol>
          <IonCol size="12" className="ion-text-left">
            <div className="ion-margin-start">
              <IonText color="light">
                {question.response}
              </IonText>
            </div>
          </IonCol>
        </IonRow>
        ))}
      </IonGrid>
    </>
  );
};

const CommentsProduct: React.FC<Comments> = ({ comments }) => {
  return (
    <>
      <h4 className="ion-margin">Comentarios Del Producto</h4>
      {comments.map((comment, index) => (
        <IonItem key={index}>{comment}</IonItem>
      ))}
    </>
  );
};

const CreateComments: React.FC = () => {
  const [comment, setComment] = useState<string>();

  const changeHandler = (e: any) => {
    setComment(e.detail.value!);
  };

  return (
    <>
      <IonItem className="ion-margin-horizontal">
        <IonTextarea
          value={comment}
          placeholder="Ingresa un comentario"
          onIonChange={changeHandler}
        ></IonTextarea>
      </IonItem>

      <IonButton
        color="primary"
        expand="full"
        className="ion-margin-horizontal"
      >
        Comentar
      </IonButton>
    </>
  );
};

const slideOpts = {
  initialSlide: 0,
  speed: 500,
};

const ProductDetail: React.FC<productItem> = ({ match }) => {
  const slideRef = useRef<HTMLIonSlidesElement>(null);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<Array<any>>([]);
  const [activeIndex, setActiveIndex] = useState<number | undefined>(0);

  const loadHandler = async () => {
    const index = (await slideRef.current?.getActiveIndex()) || 0;
    setActiveIndex(index + 1);
  };

  const slideHandler = async () => {
    const index = (await slideRef.current?.getActiveIndex()) || 0;
    setActiveIndex(index + 1);
  };

  useEffect(() => {
    const loadSlide = async () => await slideRef.current?.slideTo(0, 100);
    setProduct(
      exampleItems.filter((item) => item.productId === match.params.productId)
    );
    loadSlide();
  }, [match]);
  return (
    <IonPage>
      <IonContent fullscreen className="ProductDetail-content__style">
        <Header
          title={product.length > 0 ? product[0].productTitle : "MarketPlace"}
          canBack={true}
          href="/marketplace"
        />
        {product.length > 0 ? (
          <>
            <IonItem
              className="ion-padding-horizontal ion-margin-top ProductDetail-item__style"
              lines="none"
            >
              <IonText>{product[0].productTitle}</IonText>
            </IonItem>
            <IonSlides
              options={slideOpts}
              pager={false}
              id="product-detail-slides"
              mode="md"
              className="ProductDetail-slides__style"
              ref={slideRef}
              onIonSlidesDidLoad={loadHandler}
              onIonSlideNextStart={slideHandler}
              onIonSlidePrevStart={slideHandler}
            >
              {product[0].img.map((imgUrl: any, index: number) => (
                <IonSlide key={index} className="product-slides">
                  <IonBadge className="ion-text-left Slides-badge__style">
                    {activeIndex}/{product[0].img.length}
                  </IonBadge>
                  <img src={imgUrl} id="slides-img-detail" />
                </IonSlide>
              ))}
            </IonSlides>
            <IonItem lines="none" className="ProductDetail-item__style">
              <IonGrid slot="start">
                <IonRow className="ion-align-items-start ion-justify-content-start">
                  <IonCol
                    size="12"
                    className="ion-align-self-start PreviousProductPrice-discount__style"
                  >
                    ${product[0].productPrice}
                  </IonCol>
                  <IonCol size="12" className="ion-align-self-center">
                    <IonText
                      className="price-product ion-float-center"
                      color="success"
                    >
                      $
                      {parseInt(product[0].productPrice) *
                        (1 - parseInt(product[0].discount) / 100)}
                    </IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>

              <IonGrid>
                <IonRow className="ion-justify-content-end ion-align-items-center">
                  <IonCol
                    size="12"
                    className="ion-align-self-center ion-text-right"
                  >
                    <IonText>{product[0].discount}% </IonText>
                    <IonIcon icon={pricetagOutline} color="success" />
                  </IonCol>
                  <IonCol
                    size="12"
                    className="ion-align-self-center ion-text-center ion-padding-horizontal"
                  >
                    <IonText color="light">{product[0].seller}</IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonButton
              color="primary"
              expand="block"
              className="ion-margin-horizontal ProductDetail-button__styles"
            >
              Comprar ahora
            </IonButton>
            <IonButton
              expand="block"
              color="primary"
              fill="outline"
              className="ion-margin-horizontal ProductDetail-button__styles"
            >
              Agregar al carrito
            </IonButton>
            {/* <IonItem className="ion-margin">
              {product[0].productDescription}
            </IonItem> */}
            <IonGrid>
              <IonRow>
                <IonCol
                  size="12"
                  className="ion-align-self-center ion-text-left"
                >
                  <IonText
                    color="light"
                    className="ProductDetail-description__title"
                  >
                    Descripción:{" "}
                  </IonText>
                </IonCol>
                <IonCol
                  size="12"
                  className="ion-align-self-center ion-text-justify"
                >
                  <IonText
                    color="light"
                    className="ProductDetail-description__text"
                  >
                    {product[0].productDescription}
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
            <QuestionsAsked />
            <Section items={exampleItems} sectionName="Productos Relacionados"/>
            {/* <CreateComments />
            <CommentsProduct comments={product[0].comments} /> */}
          </>
        ) : (
          <IonLoading
            isOpen={showLoading}
            message={"Espera por favor"}
            duration={2000}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;
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
import { useEffect, useState, useRef } from "react";

import exampleItems from "./utils";
import Header from "../../components/Header/Header";
import "./ProductDetail.css";
import StarRating from "../../components/StarRating/StarRating";

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

      <IonButton color="primary" expand="full" className="ion-margin-horizontal">
        Comentar
      </IonButton>
    </>
  );
};

const ProductDetail: React.FC<productItem> = ({ match }) => {
  const slideOpts = {
    initialSlide: 0,
    speed: 500,
  };

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
      <IonContent fullscreen>
        <Header
          title={product.length > 0 ? product[0].productTitle : "MarketPlace"}
          canBack={true}
        />
        {product.length > 0 ? (
          <>
            <IonItem
              className="ion-padding-horizontal ion-margin-top"
              lines="none"
            >
              <IonText>{product[0].productTitle}</IonText>
            </IonItem>
            <IonItem
              className="ion-margin-bottom ion-padding-horizontal"
              lines="none"
            >
              <StarRating rating={product[0].rating} />
            </IonItem>
            <IonSlides
              options={slideOpts}
              pager={false}
              id="product-detail-slides"
              mode="md"
              className="ion-margin-horizontal"
              ref={slideRef}
              onIonSlidesDidLoad={loadHandler}
              onIonSlideNextStart={slideHandler}
              onIonSlidePrevStart={slideHandler}
            >
              {product[0].img.map((imgUrl: any, index: number) => (
                <IonSlide key={index} className="product-slides">
                  <IonBadge color="medium" className="ion-text-left">
                    {activeIndex}/{product[0].img.length}
                  </IonBadge>
                  <img src={imgUrl} id="slides-img-detail" />
                </IonSlide>
              ))}
            </IonSlides>
            <IonItem lines="none">
              <IonChip>Vendedor : {product[0].seller}</IonChip>
            </IonItem>
            <IonItem lines="none" className="ion-margin-horizontal">
              <IonText slot="start" className="price-product ion-float-center">
                $ {product[0].productPrice}
              </IonText>
              <IonChip slot="end" className="badge-primary">
                {product[0].discount}%
              </IonChip>
            </IonItem>
            <IonButton
              color="primary"
              expand="full"
              className="ion-margin-horizontal ion-margin-top"
            >
              Comprar ahora
            </IonButton>
            <IonButton
              expand="block"
              color="primary"
              fill="outline"
              className="ion-margin-horizontal"
            >
              Agregar al carrito
            </IonButton>
            <IonItemDivider></IonItemDivider>
            <IonItem className="ion-margin">
              {product[0].productDescription}
            </IonItem>
            <CreateComments />
            <CommentsProduct comments={product[0].comments} />
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

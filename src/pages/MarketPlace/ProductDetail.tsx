import {
  IonContent,
  IonPage,
  IonText,
  IonLoading,
  IonIcon,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonImg,
  IonThumbnail,
  IonModal,
  IonInput,
  IonLabel,
} from "@ionic/react";
import { pricetagOutline } from "ionicons/icons";
import { useEffect, useState } from "react";

import exampleItems from "./utils";
import Header from "../../components/Header/Header";
import "./ProductDetail.css";
import Section from "../../components/SectionProducts/SectionProducts";
import { getProductDetailService } from "../../services/marketplace.service";
import useShoppingCart from "../../hooks/useShoppingCart";

interface productItem {
  match: {
    params: {
      productId: string;
    };
  };
}

// interface Comments {
//   comments: Array<string>;
// }

const QuestionsAsked: React.FC = () => {
  const mockupQuestions = [
    {
      question: "¿Tiene un tamaño mas grande?",
      response:
        "Si, tenemos todos los tamaños disponibles, visita nuestra tienda",
    },
    {
      question: "¿Tiene un tamaño mas grande?",
      response:
        "Si, tenemos todos los tamaños disponibles, visita nuestra tienda",
    },
    {
      question: "¿Tiene un tamaño mas grande?",
      response:
        "Si, tenemos todos los tamaños disponibles, visita nuestra tienda",
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
                <IonText color="light">{question.response}</IonText>
              </div>
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </>
  );
};

// const CommentsProduct: React.FC<Comments> = ({ comments }) => {
//   return (
//     <>
//       <h4 className="ion-margin">Comentarios Del Producto</h4>
//       {comments.map((comment, index) => (
//         <IonItem key={index}>{comment}</IonItem>
//       ))}
//     </>
//   );
// };

// const CreateComments: React.FC = () => {
//   const [comment, setComment] = useState<string>();

//   const changeHandler = (e: any) => {
//     setComment(e.detail.value!);
//   };

//   return (
//     <>
//       <IonItem className="ion-margin-horizontal">
//         <IonTextarea
//           value={comment}
//           placeholder="Ingresa un comentario"
//           onIonChange={changeHandler}
//         ></IonTextarea>
//       </IonItem>

//       <IonButton
//         color="primary"
//         expand="full"
//         className="ion-margin-horizontal"
//       >
//         Comentar
//       </IonButton>
//     </>
//   );
// };

const ProductDetail: React.FC<productItem> = ({ match }) => {
  const [showLoading] = useState<boolean>(true);
  const [showModalForProduct, setShowModalForProduct] = useState(false);
  const [product, setProduct] = useState<any>({});
  const [currentCuantity, setCurrentCuantity] = useState(0);
  const { addProductToCart } = useShoppingCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProductDetailService(match.params.productId);
      setProduct(response.data.data);
    };
    fetchProduct();
  }, [match]);

  const handleSentProductToCart = (cuantity: number) => {
    addProductToCart({ ...product }, cuantity);
    setShowModalForProduct(false);
  };

  const submitCuantityHandler = (e: any) => {
    e.preventDefault()
    handleSentProductToCart(currentCuantity)
  }

  return (
    <IonPage>
      <IonContent fullscreen className="ProductDetail-content__style">
        <IonModal isOpen={showModalForProduct} >
          <form onSubmit={submitCuantityHandler} className="modal-cuantity__form">
            <IonItem lines="none">
              <IonText className="modal-cuantity__title ion-text-center">
                Ingresa una cantidad para agregar al carrito
              </IonText>
            </IonItem>
            <IonItem className="ion-margin-horizontal">
              <IonLabel position="floating">Cantidad de producto</IonLabel>
              <IonInput onIonChange={(e) => setCurrentCuantity(parseInt(e.detail.value!))} type="number" min="1" max="60" required />
            </IonItem>
            <IonButton type="submit">
              Agregar al carrito
            </IonButton>
          </form>
        </IonModal>
        <Header
          title={product.length > 0 ? product?.title : "MarketPlace"}
          canBack={true}
          href="/marketplace"
        />
        {product ? (
          <>
            <IonItem
              className="ion-padding-horizontal ion-margin-top ProductDetail-item__style"
              lines="none"
            >
              <IonText>{product?.title}</IonText>
            </IonItem>
            <IonItem className="thumbnail-item__productImage ion-justify-center">
              <IonThumbnail className="product-image ion-align-self-center">
                <IonImg src={product?.image_url} />
              </IonThumbnail>
            </IonItem>
            <IonItem lines="none" className="ProductDetail-item__style">
              <IonGrid slot="start">
                <IonRow className="ion-align-items-start ion-justify-content-start">
                  <IonCol
                    size="12"
                    className="ion-align-self-start PreviousProductPrice-discount__style"
                  >
                    ${product?.price}
                  </IonCol>
                  <IonCol size="12" className="ion-align-self-center">
                    <IonText
                      className="price-product ion-float-center"
                      color="success"
                    >
                      $
                      {product?.discount
                        ? `${
                            product?.price *
                            (1 - parseInt(product?.discount) / 100)
                          }`
                        : `${product?.price}`}
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
                    <IonText>{product?.discount}% </IonText>
                    <IonIcon icon={pricetagOutline} color="success" />
                  </IonCol>
                  <IonCol
                    size="12"
                    className="ion-align-self-center ion-text-center ion-padding-horizontal"
                  >
                    <IonText color="light">{product?.userId}</IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonButton
              expand="block"
              color="primary"
              className="ion-margin-horizontal ProductDetail-button__styles"
              onClick={() => setShowModalForProduct(true)}
            >
              Agregar al carrito
            </IonButton>
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
                    {product?.description}
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
            <QuestionsAsked />
            <Section
              items={exampleItems}
              sectionName="Productos Relacionados"
            />
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

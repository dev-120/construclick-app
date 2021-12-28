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

import "./ProductDetail.css";
import Header from "../../components/Header/Header";
import useShoppingCart from "../../hooks/useShoppingCart";
import { getProductDetailService } from "../../services/marketplace.service";
import { loadDataUserBasic } from "../../services/auth.service";

interface productItem {
  match: {
    params: {
      productId: string;
    };
  };
}

const ProductDetail: React.FC<productItem> = ({ match }) => {
  const [showLoading] = useState<boolean>(true);
  const [showModalForProduct, setShowModalForProduct] = useState(false);
  const [product, setProduct] = useState<any>({});
  const [currentCuantity, setCurrentCuantity] = useState(0);
  const { addProductToCart, cartId } = useShoppingCart();
  const [productSeller, setProductSeller] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProductDetailService(match.params.productId);
      const getUsername = await loadDataUserBasic(response?.data?.data?.userId);
      if(getUsername.status === 200) setProductSeller(getUsername?.data?.data?.name);
      setProduct(response.data.data);
    };
    fetchProduct();
  }, [match]);

  const handleSentProductToCart = (cuantity: number) => {
    addProductToCart({ ...product }, cuantity, cartId);
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
                    {/* <IonText color="light">{product?.userId}</IonText> */}
                    <IonText color="light">{productSeller}</IonText>
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

import {
  IonPage,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
  IonIcon,
  IonFooter,
  IonToolbar,
  IonTitle,
  IonInput,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { disc, menu, save } from "ionicons/icons";
import { RouteComponentProps, Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import CementArgos from "../../assets/cement_image.jpg";
import StuccoImage from "../../assets/stucco_img.jpg";
import Mastic from "../../assets/masilla_img.jpg";
import "./ShoppingCart.css";

const mockupProducts = [
  {
    productId: "LC93f",
    seller: "Ferreteria Santa Marta",
    img: CementArgos,
    productTitle: "Cemento Argos Gris 50kg",
    productPrice: 25900,
    discount: 5,
    cuantity: 5,
    color: "Gris",
    selectedCuantity: 1,
  },
  {
    productId: "Ob8Ne",
    seller: "Ferreteria Santa Marta",
    img: StuccoImage,
    productTitle: "Estucor estuco 5 kilos",
    productPrice: 7900,
    discount: 15,
    cuantity: 10,
    color: "Blanco",
    selectedCuantity: 1,
  },
  {
    productId: "htBFn",
    seller: "Ferreteria Santa Marta",
    img: Mastic,
    productTitle: "Masilla 1g 5.6k",
    productPrice: 15400,
    discount: 8,
    cuantity: 5,
    color: "Cafe",
    selectedCuantity: 1,
  },
];

const mockupSavedProducts = [
  {
    productId: "htBFn",
    seller: "Ferreteria Santa Marta",
    img: Mastic,
    productTitle: "Masilla 1g 5.6k",
    productPrice: 15400,
    discount: 8,
    cuantity: 5,
    color: "Cafe",
    selectedCuantity: 1,
  },
];

const ShoppingCart: React.FC<RouteComponentProps> = ({ match }) => {
  const [productsInCart, setProductsInCart] = useState<Array<any>>([]);
  const [savedProducts, setSavedProducts] = useState<Array<any>>([]);
  const [segment, setSegment] = useState("cart");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setProductsInCart(mockupProducts);
    setSavedProducts(mockupSavedProducts);
  }, []);

  const totalPriceHandler = (
    value: number,
    action: string,
    substract: number,
  ) => {
    if (action === "ADD_TOTAL") {
      setTotalPrice((val) => val + value);
    }

    if (action === "CORRECT_PRICE") {
      setTotalPrice((val) => val - substract + value);
    }

    if (action === "SUBSTRACT_TOTAL") {
      setTotalPrice((val) => val - value);
    }
  };

  const deleteItemHandler = (id: string) => {
    setProductsInCart((product: any) =>
      product.filter((pro: any) => pro.productId !== id)
    );
  };

  const segmentChangeHandler = (e: any) => {
    setTotalPrice(0);
    setSegment(e.detail.value!);
  };

  const cuantityChangeHandler = (id: string, cuantity: number) => {
    setProductsInCart(products => products.map((product) => product.productId === id ? {...product, selectedCuantity: cuantity} : product))
  }

  return (
    <IonPage>
      <Header canBack href="/marketplace" />
      <IonContent fullscreen className="ShoppingCart-content__style">
        <IonSegment
          value={segment}
          onIonChange={segmentChangeHandler}
          className="ShoppingCart-segment__style"
        >
          <IonSegmentButton
            value="cart"
            className="ShoppingCart-segment__buttons"
          >
            Carrito ({productsInCart.length})
          </IonSegmentButton>
          <IonSegmentButton
            value="saved"
            className="ShoppingCart-segment__buttons"
          >
            Guardados ({savedProducts.length})
          </IonSegmentButton>
        </IonSegment>
        {productsInCart.length > 0 ? (
          segment === "cart" ? (
            <IonList className="ShoppingCart-lists__style">
              {productsInCart.map((product) => (
                <CartProduct
                  key={product.productId}
                  {...product}
                  priceHandler={totalPriceHandler}
                  deleteHandler={deleteItemHandler}
                  cuantityHandler={cuantityChangeHandler}
                />
              ))}
            </IonList>
          ) : (
            <IonList className="ShoppingCart-lists__style">
              {savedProducts.map((product) => (
                <CartProduct
                  key={product.productId}
                  {...product}
                  priceHandler={totalPriceHandler}
                  deleteHandler={deleteItemHandler}
                />
              ))}
            </IonList>
          )
        ) : (
          <IonList className="ShoppingCart-lists__style">
            <IonItem
              lines="none"
              className="ion-text-center ShoppingCart-item__style"
            >
              <IonTitle>Tú carrito esta vacio</IonTitle>
            </IonItem>
          </IonList>
        )}
      </IonContent>
      {totalPrice > 0 && (
        <IonFooter>
          <IonToolbar className="ShoppingCart-item__style">
            <IonItem lines="none" className="ShoppingCart-item__style">
              <IonLabel slot="start" color="light">
                <strong>Total Costo</strong>
              </IonLabel>
              <IonText slot="end" color="light">
                <strong>$ {totalPrice}</strong>
              </IonText>
            </IonItem>
            <Link
              to={{
                pathname: `${match.url}/checkout/shipping`,
                state: { productList: productsInCart, total: totalPrice },
              }}
            >
              <IonButton
                size="large"
                expand="full"
                color="primary"
                style={{ fontFamily: "Bebas Neue" }}
              >
                Continuar Compra
              </IonButton>
            </Link>
          </IonToolbar>
        </IonFooter>
      )}
    </IonPage>
  );
};

type CartProductProps = {
  productId: string;
  productTitle: string;
  productPrice: number;
  cuantity: number;
  color: string;
  img: string;
  discount: number;
  selectedCuantity: number;
  priceHandler: (value: number, action: string, substract?: number) => void;
  deleteHandler: (id: string) => void;
  cuantityHandler: (id: string, cuantity: number) => void;
};

const CartProduct = ({
  productId,
  selectedCuantity,
  productTitle,
  productPrice,
  color,
  img,
  discount,
  priceHandler,
  deleteHandler,
  cuantityHandler,
}: CartProductProps) => {
  const [selectCuantity, setSelectCuantity] = useState(selectedCuantity);
  const [currentPrice, setCurrentPrice] = useState(
    productPrice * (1 - discount / 100) * selectCuantity
  );

  useEffect(() => {
    priceHandler(
      productPrice * (1 - discount / 100) * selectCuantity,
      "ADD_TOTAL",
    );
  }, []);

  const changeHandler = (e: any) => {
    cuantityHandler(productId, parseInt(e.detail.value!))
    priceHandler(
      productPrice * (1 - discount / 100) * parseInt(e.detail.value),
      "CORRECT_PRICE",
      currentPrice
    );
    setCurrentPrice(
      productPrice * (1 - discount / 100) * parseInt(e.detail.value)
    );
    setSelectCuantity(parseInt(e.detail.value!));
  };

  const clickDeleteHandler = () => {
    priceHandler(
      productPrice * (1 - discount / 100) * selectCuantity,
      "SUBSTRACT_TOTAL"
    );
    deleteHandler(productId);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <img src={img} />
            </IonCol>
            <IonCol size="8">
              <IonCardTitle>{productTitle}</IonCardTitle>
              <IonCardSubtitle>Color: {color}</IonCardSubtitle>
              <IonGrid>
                <IonRow className="ion-justify-content-center">
                  <IonCol className="ion-align-self-end" size="7">
                    <IonItem lines="none" className="ion-no-padding">
                      <IonLabel position="floating">Cantidad</IonLabel>
                      <IonInput
                        value={selectCuantity}
                        type="number"
                        debounce={500}
                        onIonChange={changeHandler}
                      />
                    </IonItem>
                  </IonCol>
                  <IonCol size="5" className="ion-align-self-center">
                    {discount > 0 && (
                      <>
                        <IonLabel
                          className=""
                          style={{ fontSize: "12px" }}
                          color="dark"
                        >
                          {discount}% $
                          <IonText style={{ textDecoration: "line-through" }}>
                            {" "}
                            {productPrice * selectCuantity}
                          </IonText>
                        </IonLabel>
                        <br></br>
                        <IonLabel
                          className=""
                          style={{ fontSize: "18px" }}
                          color="dark"
                        >
                          <strong>
                            $
                            {productPrice *
                              (1 - discount / 100) *
                              selectCuantity}
                          </strong>
                        </IonLabel>
                      </>
                    )}
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton
                expand="block"
                fill="clear"
                size="small"
                onClick={clickDeleteHandler}
              >
                Eliminar
              </IonButton>
            </IonCol>
            <IonCol size="7">
              <IonButton
                expand="block"
                fill="clear"
                size="small"
                className="ion-text-wrap"
              >
                Más productos del vendedor
              </IonButton>
            </IonCol>
            <IonCol size="2">
              <IonButton size="small" fill="clear">
                <IonIcon color="dark" slot="icon-only" icon={menu} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardHeader>
    </IonCard>
  );
};

export default ShoppingCart;

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
} from "@ionic/react";
import { useState, useEffect } from "react";
import { menu } from "ionicons/icons";
import { RouteComponentProps, Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Mastic from "../../assets/masilla_img.jpg";
import "./ShoppingCart.css";
import useShoppingCart from "../../hooks/useShoppingCart";

const mockupSavedProducts = [
  {
    _id: "htBFn",
    seller: "Ferreteria Santa Marta",
    image_url: Mastic,
    title: "Masilla 1g 5.6k",
    product: {
      unitPrice: 15400,
      quantity: 5,
    },
    quantity: 5,
    color: "Cafe",
  },
];

// type CartProduct = {
//   _id: string;
//   title: string;
//   price: number;
//   quantity: number;
//   color: string | undefined;
//   image_url: string;
//   discount: number | undefined;
//   product: any;
// };

type CartProductType = {
  _id: string;
  titleProduct: string;
  unitPrice: number;
  quantity: number;
  color: string | undefined;
  productId: string;
  image_url: string;
  discount: number | undefined;
};



const ShoppingCart: React.FC<RouteComponentProps> = ({ match }) => {
  const [savedProducts, setSavedProducts] = useState<Array<any>>(mockupSavedProducts);
  const [segment, setSegment] = useState("cart");
  const { cart, deleteProductOfCart, totalPrice, getShoppingCart } =
    useShoppingCart();

  useEffect(() => {
    getShoppingCart()
    setSavedProducts(mockupSavedProducts);
  },[]);

  const segmentChangeHandler = (e: any) => {
    setSegment(e.detail.value!);
  };

  const deleteProductInShoppingCartHandler = (id: string) => {
    deleteProductOfCart(id)
    getShoppingCart();
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
            Carrito ({cart?.items.length})
          </IonSegmentButton>
          <IonSegmentButton
            value="saved"
            className="ShoppingCart-segment__buttons"
          >
            Guardados ({savedProducts.length})
          </IonSegmentButton>
        </IonSegment>
        {cart?.items.length > 0 ? (
          segment === "cart" ? (
            <IonList className="ShoppingCart-lists__style">
              {cart?.items.map((product: CartProductType) => (
                <CartProduct
                {...product}
                deleteHandler={deleteProductInShoppingCartHandler}                />
              ))}
            </IonList>
          ) : (
            <IonList className="ShoppingCart-lists__style">
              {savedProducts.map((product) => (
                <CartProduct
                  key={product.productId}
                  {...product}
                  deleteHandler={deleteProductInShoppingCartHandler}
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
                state: { productList: cart, total: totalPrice },
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

// type CartProductProps = {
//   productId: string;
//   productTitle: string;
//   productPrice: number;
//   cuantity: number;
//   color: string;
//   img: string;
//   discount: number;
//   selectedCuantity: number;
//   priceHandler: (value: number, action: string, substract?: number) => void;
//   deleteHandler: (id: string) => void;
//   cuantityHandler: (id: string, cuantity: number) => void;
// };

type CartProductProps = {
  _id: string;
  titleProduct: string;
  unitPrice: number;
  quantity: number;
  color: string | undefined;
  image_url: string;
  discount: number | undefined;
  productId: string;
  deleteHandler: (id: string) => void;
};

const CartProduct = ({
  _id,
  titleProduct,
  color,
  image_url,
  discount,
  unitPrice,
  quantity,
  productId,
  deleteHandler,
}: CartProductProps) => {
  // const [selectCuantity, setSelectCuantity] = useState();

  const clickDeleteHandler = () => {
    deleteHandler(productId);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <img src={image_url} alt="product" />
            </IonCol>
            <IonCol size="8">
              <IonCardTitle>{titleProduct}</IonCardTitle>
              <IonCardSubtitle>Color: {color || "Desconocido"}</IonCardSubtitle>
              <IonGrid>
                <IonRow className="ion-justify-content-center">
                  <IonCol className="ion-align-self-end" size="7">
                    <IonItem lines="none" className="ion-no-padding">
                      <IonLabel position="stacked">Cantidad</IonLabel>
                      <strong className="ion-padding-top">{quantity}</strong>
                    </IonItem>
                  </IonCol>
                  <IonCol size="5" className="ion-align-self-center">
                    {discount !== undefined ? (
                      <>
                        <IonLabel
                          className=""
                          style={{ fontSize: "12px" }}
                          color="dark"
                        >
                          {discount}% $
                          <IonText style={{ textDecoration: "line-through" }}>
                            {" "}
                            {unitPrice * quantity}
                          </IonText>
                        </IonLabel>
                        <br></br>
                        <IonLabel
                          className=""
                          style={{ fontSize: "18px" }}
                          color="dark"
                        >
                          <strong>
                            ${unitPrice * (1 - discount / 100) * quantity}
                          </strong>
                        </IonLabel>
                      </>
                    ) : (
                      <>
                        <IonLabel
                          className=""
                          style={{ fontSize: "1rem" }}
                          color="dark"
                        >
                          <strong style={{ fontSize: "0.875rem", lineHeight: '0.75rem' }}>${unitPrice * quantity}</strong>
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

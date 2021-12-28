import { useDispatch, useSelector } from "react-redux";
import {
  PRODUCT_ADD_FETCH,
  PRODUCT_LIST_FETCH,
  PRODUCT_REMOVE,
  SHOPPINGCART_FETCH,
} from "../store/actions/shoppingcart.actions";

import useUser from "./useUser";

const useShoppingCart = () => {
  const dispatch = useDispatch();
  const { profileUser } = useUser();
  const { cart, shoppingCartId, totalPrice } = useSelector(
    (state: any) => state.shoppingCart
  );

  // useEffect(() => {
  //   dispatch({
  //     type: SHOPPINGCART_FETCH,
  //     payload: profileUser?.id,
  //   });
  //   if (cart !== null) {
  //     dispatch({
  //       type: PRODUCT_LIST_FETCH,
  //       payload: cart?.items,
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [profileUser]);

  const getShoppingCart = () => {
    dispatch({
      type: SHOPPINGCART_FETCH,
      payload: profileUser?.id,
    });
    if (cart !== null) {
      dispatch({
        type: PRODUCT_LIST_FETCH,
        payload: cart?.items,
      });
    }
  };

  // const fetchItemsInShoppingCart = async (products: any) => {
  //   let arr: Array<any> = []
  //   for(let product of products){
  //     let { data } = await getProductDetailService(product.productId)
  //     let allData = {...data.data, product}
  //     arr.push(allData)
  //   }

  //   setProducts(arr)
  // }
  // const { openLoader, closeLoader } = useCommons();

  const addProductToCart = (product: any, quantity: number, shoppingCartId: string) => {
    dispatch({
      type: PRODUCT_ADD_FETCH,
      payload: {
        shoppingCartId,
        productId: product._id,
        unitPrice: product.price,
        quantity,
      },
    });
  };

  const deleteProductOfCart = (productId: string) => {
    dispatch({
      type: PRODUCT_REMOVE,
      payload: {
        shoppingCartId,
        productId,
      },
    });
    getShoppingCart();
  };

  return {
    cart,
    cartId: shoppingCartId,
    addProductToCart,
    deleteProductOfCart,
    getShoppingCart,
    totalPrice,
    userId : profileUser?.id
  };
};

export default useShoppingCart;

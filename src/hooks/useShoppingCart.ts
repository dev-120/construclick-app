import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PRODUCT_ADD_FETCH,
  PRODUCT_LIST_FETCH,
  PRODUCT_REMOVE,
  SHOPPINGCART_FETCH,
} from "../store/actions/shoppingcart.actions";

import useUser from "./useUser";

// import useCommons from "./useCommons";

const useShoppingCart = () => {
  const dispatch = useDispatch();
  const { profileUser } = useUser();
  const { cart, shoppingCartId, totalPrice } = useSelector(
    (state: any) => state.shoppingCart
  );

  useEffect(() => {
    dispatch({
      type: SHOPPINGCART_FETCH,
      payload: profileUser?.id,
    });
    if(cart !== null){
      dispatch({
        type: PRODUCT_LIST_FETCH,
        payload: cart?.items,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, profileUser]);

  const getShoppingCart = () => {
    dispatch({
      type: SHOPPINGCART_FETCH,
      payload: profileUser?.id,
    });
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

  const addProductToCart = (product: any, quantity: number) => {
    dispatch({
      type: PRODUCT_ADD_FETCH,
      payload: {
        shoppingCartId,
        productId: product._id,
        unitPrice: product.price,
        quantity,
      },
    });
    dispatch({
      type: SHOPPINGCART_FETCH,
      payload: profileUser?.id,
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
    dispatch({
      type: SHOPPINGCART_FETCH,
      payload: profileUser?.id,
    });
  };

  return {
    cart,
    addProductToCart,
    deleteProductOfCart,
    getShoppingCart,
    totalPrice,
  };
};

export default useShoppingCart;
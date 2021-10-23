import { Action } from "../../types/store.types";
import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_ADDED_SUCCESS,
  PRODUCT_ELIMINATED_SUCCESS,
} from "../actions/shoppingcart.actions";

const initialState = {
  cart: null,
  savedProducts: [],
  productEliminated: false,
  shoppingCartId: null,
  totalPrice: null,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        cart: action.payload,
        shoppingCartId: action.payload._id,
        totalPrice: action.payload.total,
      };
    case PRODUCT_ADDED_SUCCESS:
      return state;
    case PRODUCT_ELIMINATED_SUCCESS:
      console.log(action)
      return {
        ...state,
        productEliminated: true,
      };
    default:
      return state;
  }
};

export default reducer;

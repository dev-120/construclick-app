import { call, put } from "redux-saga/effects";

import { OPEN_LOADER, CLOSE_LOADER } from "../actions/commons.actions";

import {
  getShoppingCart,
  addProductToShoppingCart,
  removeProductToShoppingCart,
} from "../../services/shoppingcart.service";
import { Action } from "../../types/store.types";
import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_ADDED_SUCCESS,
  PRODUCT_ELIMINATED_SUCCESS,
} from "../actions/shoppingcart.actions";

export function* getShoppingCartItems(action: Action) {
  yield put({ type: OPEN_LOADER });
  try {
    const { data } = yield call(getShoppingCart, action.payload);
    yield put({ type: GET_PRODUCT_SUCCESS, payload: data.data });
  } catch (error) {
    console.error(error);
    // TODO: ERROR MESSAGE
    /*swal({
      icon: 'error',
      text: error?.response?.data?.error?.[0]?.detail,
    });
    */
  }
  yield put({ type: CLOSE_LOADER });
}

export function* addProductToShoppingcart(action: Action) {
  yield put({ type: OPEN_LOADER });
  try {
    const { data } = yield call(addProductToShoppingCart, action.payload);
    yield put({ type: PRODUCT_ADDED_SUCCESS, payload: data.data });
  } catch (error) {
    console.error(error);
    // TODO: ERROR MESSAGE
    /*swal({
      icon: 'error',
      text: error?.response?.data?.error?.[0]?.detail,
    });
    */
  }
  yield put({ type: CLOSE_LOADER });
}

export function* removeProductOfShoppingcart(action: Action) {
  yield put({ type: OPEN_LOADER });
  try {
    const { data } = yield call(removeProductToShoppingCart, action.payload);
    yield put({ type: PRODUCT_ELIMINATED_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    // TODO: ERROR MESSAGE
    /*swal({
      icon: 'error',
      text: error?.response?.data?.error?.[0]?.detail,
    });
    */
  }
  yield put({ type: CLOSE_LOADER });
}
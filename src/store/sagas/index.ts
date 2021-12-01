import { takeEvery } from "redux-saga/effects";

import {
  logout,
  loginFetch,
  registerFetch,
  updateUserEffect,
  getUserDataProfile,
} from "./user.effects";
import {
  LOGIN_FETCH,
  LOGOUT_FETCH,
  REGISTER_FETCH,
  PROFILE_USER_FETCH,
  UPDATE_PROFILE_USER_FETCH,
} from "../actions/user.actions";
import { 
  loadDatasCommonsFetch
} from './commons.effects';
import { LOAD_DATAS_COMMONS } from "../actions/commons.actions";
import { addProductToShoppingcart, getShoppingCartItems, removeProductOfShoppingcart } from "./shoppingcart.effects";
import { PRODUCT_ADD_FETCH, PRODUCT_REMOVE, SHOPPINGCART_FETCH } from "../actions/shoppingcart.actions";
import { FETCH_ALL_USER_POSTS, FETCH_EVENTS_POSTS, FETCH_NEWS_POSTS, FETCH_OPPORTUNITIES_POSTS, FETCH_PROJECTS_POSTS } from "../actions/posts.actions";
import { fetchAllPostsByUser, fetchEventsPosts, fetchNewsPosts, fetchOpportunitesPosts, fetchProjectsPosts } from "./posts.effect";
import { loadCalculatorResult } from "./calculator.effect";
import { GET_CALCULATOR_RESULT_FETCH } from "../actions/calculator.actions";



function* rootSagas() {
  yield takeEvery(LOGOUT_FETCH, logout);
  yield takeEvery(LOGIN_FETCH, loginFetch);
  yield takeEvery(REGISTER_FETCH, registerFetch);
  yield takeEvery(PROFILE_USER_FETCH, getUserDataProfile);
  yield takeEvery(UPDATE_PROFILE_USER_FETCH, updateUserEffect);
  yield takeEvery(LOAD_DATAS_COMMONS, loadDatasCommonsFetch);
  yield takeEvery(SHOPPINGCART_FETCH, getShoppingCartItems);
  yield takeEvery(PRODUCT_ADD_FETCH, addProductToShoppingcart);
  yield takeEvery(PRODUCT_REMOVE, removeProductOfShoppingcart);
  yield takeEvery(FETCH_EVENTS_POSTS, fetchEventsPosts);
  yield takeEvery(FETCH_NEWS_POSTS, fetchNewsPosts);
  yield takeEvery(FETCH_OPPORTUNITIES_POSTS, fetchOpportunitesPosts);
  yield takeEvery(FETCH_PROJECTS_POSTS, fetchProjectsPosts);
  yield takeEvery(FETCH_ALL_USER_POSTS, fetchAllPostsByUser);
  yield takeEvery(GET_CALCULATOR_RESULT_FETCH, loadCalculatorResult);
}


export default rootSagas;
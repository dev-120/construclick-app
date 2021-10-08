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

function* rootSagas() {
  yield takeEvery(LOGOUT_FETCH, logout);
  yield takeEvery(LOGIN_FETCH, loginFetch);
  yield takeEvery(REGISTER_FETCH, registerFetch);
  yield takeEvery(PROFILE_USER_FETCH, getUserDataProfile);
  yield takeEvery(UPDATE_PROFILE_USER_FETCH, updateUserEffect);
  yield takeEvery(LOAD_DATAS_COMMONS, loadDatasCommonsFetch);
}


export default rootSagas;
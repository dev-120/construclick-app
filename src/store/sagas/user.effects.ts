import { call, put } from 'redux-saga/effects';

import { decode } from '../../utils/jwt';
import { KEY_TOKEN_STORAGE } from '../../config/constants';
import { setItem, removeItem } from '../../services/storage.service';
import { OPEN_LOADER, CLOSE_LOADER } from '../actions/commons.actions';
import {
  LOGOUT,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  PROFILE_USER_FETCH,
  PROFILE_USER_SUCCESS,
} from '../actions/user.actions';
import {
  login,
  update,
  register,
  loadDataUserBasic
} from '../../services/auth.service';
import { Action } from '../../types/store.types';

export function* loginFetch(action : Action) : any{
  yield put({ type: OPEN_LOADER });
  try {
    const response = yield call(login, action.payload);
    const token = response.data.data;
    setItem(KEY_TOKEN_STORAGE, token);
    const decoded = decode(token);
    yield put({ type: LOGIN_SUCCESS, payload: decoded });
    yield put({ type: PROFILE_USER_FETCH, payload: decoded.id });
  } catch (error) {
    // TODO: ERROR MESSAGE
  }
  yield put({ type: CLOSE_LOADER });
}

export function* registerFetch(action : Action) {
  yield put({ type: OPEN_LOADER });
  console.log(action);
  try {
    yield call(register, action.payload);
    
    yield put({ type: REGISTER_SUCCESS });
  } catch (error) {
    // TODO: ERROR MESSAGE
    /*swal({
      icon: 'error',
      text: error?.response?.data?.error?.[0]?.detail,
    });*/
  }
  yield put({ type: CLOSE_LOADER });
}

export function* logout() {
  yield put({ type: OPEN_LOADER });
  removeItem(KEY_TOKEN_STORAGE);
  yield put({ type: LOGOUT });
  yield put({ type: CLOSE_LOADER });
  window.location.href = '/';
}

export function* getUserDataProfile(action : Action) {
  yield put({ type: OPEN_LOADER });
  try {
    const { data } = yield call(loadDataUserBasic, action.payload);
    yield put({ type: PROFILE_USER_SUCCESS, payload: data.data });
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

export function* updateUserEffect(action : Action) {
  if (!action?.payload) return;
  yield put({ type: OPEN_LOADER });
  try {
    yield call(update, action.payload);
    yield put({ type: PROFILE_USER_FETCH, payload: action.payload.id });
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

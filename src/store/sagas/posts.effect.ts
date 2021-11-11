import { call, put } from "redux-saga/effects";

import { OPEN_LOADER, CLOSE_LOADER } from "../actions/commons.actions";

import { fetchAllPostByUserId, fetchPosts, fetchProjects } from "../../services/posts.service";
import { Action } from "../../types/store.types";
import {
  EVENTS_POSTS_SUCCESS,
  FETCH_USER_POSTS_SUCCESS,
  NEWS_POSTS_SUCCESS,
  OPPORTUNITIES_POSTS_SUCCESS,
  PROJECTS_POSTS_SUCCESS,
} from "../actions/posts.actions";

export function* fetchNewsPosts(action: Action) {
  yield put({ type: OPEN_LOADER });

  try {
    const { data } = yield call(fetchPosts, action.payload);
    yield put({ type: NEWS_POSTS_SUCCESS, payload: data.data });
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

export function* fetchEventsPosts(action: Action) {
  yield put({ type: OPEN_LOADER });

  try {
    const { data } = yield call(fetchPosts, action.payload);
    yield put({ type: EVENTS_POSTS_SUCCESS, payload: data.data });
  } catch (e) {
    console.error(e);
  }

  yield put({ type: CLOSE_LOADER });
}

export function* fetchOpportunitesPosts(action: Action) {
  yield put({ type: OPEN_LOADER });

  try {
    const { data } = yield call(fetchPosts, action.payload);
    yield put({ type: OPPORTUNITIES_POSTS_SUCCESS, payload: data.data });
  } catch (e) {
    console.error(e);
  }

  yield put({ type: CLOSE_LOADER });
}

export function* fetchProjectsPosts(action: Action) {
  yield put({ type: OPEN_LOADER });

  try {
    const { data } = yield call(fetchProjects, action.payload);
    yield put({ type: PROJECTS_POSTS_SUCCESS, payload: data.data });
  } catch (e) {
    console.error(e);
  }

  yield put({ type: CLOSE_LOADER });
}

export function* fetchAllPostsByUser(action: Action) {
  yield put({ type: OPEN_LOADER });

  try {
    const { data } = yield call(fetchAllPostByUserId, action.payload);
    yield put({ type: FETCH_USER_POSTS_SUCCESS, payload: data.data });
  } catch (e) {
    console.error(e);
  }

  yield put({ type: CLOSE_LOADER });
}

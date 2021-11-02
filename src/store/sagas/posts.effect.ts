import { call, put, all } from "redux-saga/effects";

import { OPEN_LOADER, CLOSE_LOADER } from "../actions/commons.actions";

import {
  publishPostService
} from "../../services/posts.service";
import { Action } from "../../types/store.types";


// export function* publishPost(action: Action) {
//   yield put({ type: OPEN_LOADER });

//   const dataToSend = {
//     title: 
//   }
//   try {
//     const { data } = yield call(publishPostService, );
//     console.log(data);
//     // yield put({ type: GET_PRODUCT_SUCCESS, payload: data.data });
//   } catch (error) {
//     console.error(error);
//     // TODO: ERROR MESSAGE
//     /*swal({
//       icon: 'error',
//       text: error?.response?.data?.error?.[0]?.detail,
//     });
//     */
//   }
//   yield put({ type: CLOSE_LOADER });
// }

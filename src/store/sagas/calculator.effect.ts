import { call, put } from "redux-saga/effects";
import { getCalculatorResultService } from "../../services/calculator.service";
import { Action } from "../../types/store.types";
import { GET_CALCULATOR_RESULT_SUCCESS } from "../actions/calculator.actions";
import {
  OPEN_LOADER,
  CLOSE_LOADER,
} from "../actions/commons.actions";

export function* loadCalculatorResult(action: Action): any {
  yield put({ type: OPEN_LOADER });
  try{
    const { data } = yield call(getCalculatorResultService, action.payload);
    yield put({ type: GET_CALCULATOR_RESULT_SUCCESS, payload: data.data });
  }catch(error){
    console.error(error);
  }

  yield put({ type: CLOSE_LOADER })
}
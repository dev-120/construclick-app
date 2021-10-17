import { call, put } from "redux-saga/effects";

import { Action } from "../../types/store.types";
import { getCities } from "../../services/cities.service";
import { getCategories } from "../../services/categories.service";
import { getProfessions } from "../../services/profession.service";
import {
  OPEN_LOADER,
  CLOSE_LOADER,
  LOAD_CITIES_SUCCESS,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_PROFESSIONS_SUCCESS,
} from "../actions/commons.actions";

export function* loadDatasCommonsFetch(action: Action): any {
  yield put({ type: OPEN_LOADER });
  try {
    const responseCities = yield call(getCities);
    const cities = responseCities.data.data;
    yield put({ type: LOAD_CITIES_SUCCESS, payload: cities });

    const responseProfessions = yield call(getProfessions);
    const professions = responseProfessions.data.data;
    yield put({ type: LOAD_PROFESSIONS_SUCCESS, payload: professions });

    const responseCategories = yield call(getCategories);
    const categories = responseCategories.data.data;
    yield put({ type: LOAD_CATEGORIES_SUCCESS, payload: categories });
  } catch (error) {
    // TODO: ERROR MESSAGE
  }
  yield put({ type: CLOSE_LOADER });
}

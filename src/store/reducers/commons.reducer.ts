import { Action } from '../../types/store.types';
import {
  OPEN_LOADER,
  CLOSE_LOADER,
  LOAD_CITIES_SUCCESS,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_PROFESSIONS_SUCCESS,
} from '../actions/commons.actions';

const initialState = {
  loading: false,
  cities: [],
  professions: [],
  categories: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CLOSE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case OPEN_LOADER:
      return {
        ...state,
        loading: true,
      };
    case LOAD_CITIES_SUCCESS: {
      return {
        ...state,
        cities: action.payload,
      }
    }
    case LOAD_PROFESSIONS_SUCCESS: {
      return {
        ...state,
        professions: action.payload,
      }
    }
    case LOAD_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload,
      }
    }
    default:
      return state;
  }
};

export default reducer;
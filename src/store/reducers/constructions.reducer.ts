import { Action } from '../../types/store.types';
import {
    GET_CONSTRUCTIONS,
    SELECT_CONSTRUCTION
} from '../actions/construction.actions';

const initialState = {
  constructionSelected: null,
  constructions: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_CONSTRUCTIONS:
      return {
        ...state,
        constructions: action.payload,
      };
    case SELECT_CONSTRUCTION:
      return {
        ...state,
        constructionSelected: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
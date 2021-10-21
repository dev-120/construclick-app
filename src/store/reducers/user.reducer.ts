import {
  LOGOUT,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  PROFILE_USER_SUCCESS,
} from "../actions/user.actions";

import { Action } from '../../types/store.types';

const initialState = {
  registerSuccess: false,
  tokenConfirmated: false,
  restoredPassword: false,
  dataUser: null,
  profileUser: null,
  users: [],
  interestSelected: [],
  subInterestsUpload: [],
};

const reducer = (state = initialState, action : Action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        dataUser: action.payload,
      };
    case PROFILE_USER_SUCCESS:
      return {
        ...state,
        profileUser: action.payload,
      }
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;

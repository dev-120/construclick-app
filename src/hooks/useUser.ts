import { useDispatch, useSelector } from "react-redux";

import { decode } from "../utils/jwt";
import {
  LOGIN_FETCH,
  LOGOUT_FETCH,
  LOGIN_SUCCESS,
  REGISTER_FETCH,
  PROFILE_USER_FETCH,
} from "../store/actions/user.actions";

import useCommons from "./useCommons";
import { dataLogin, DataRegister } from "../types/user.types";
import { getItem } from "../services/storage.service";
import { loadDataUserBasic } from "../services/auth.service";
import { ROLES, KEY_TOKEN_STORAGE } from "../config/constants";

const useUser = () => {
  const dispatch = useDispatch();
  const { openLoader, closeLoader } = useCommons();
  const {
    registerSuccess,
    tokenConfirmated,
    restoredPassword,
    dataUser: user,
    profileUser,
  } = useSelector((state:any) => state.user);

  const loadTokenStorage = () => {
    const token = getItem(KEY_TOKEN_STORAGE);
    let decoded : { id: string};
  
    if (token) {
      decoded = decode(token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: decoded,
      });
      dispatch({
        type: PROFILE_USER_FETCH,
        payload: decoded?.id,
      });
    }
  };

  const loginAction = (data: dataLogin) => {
    dispatch({
      type: LOGIN_FETCH,
      payload: data,
    });
  };

  const logout = () => {
    dispatch({
      type: LOGOUT_FETCH,
    });
  };

  const registerAction = (data : DataRegister) => {
    dispatch({
      type: REGISTER_FETCH,
      payload: data,
    });
  };
  
  const getDataOneUser = async (id: string) => {
    openLoader();
    try {
      const data = await loadDataUserBasic(id);
      closeLoader();
      return data;
    } catch (error) {
      closeLoader();
      // TODO: Print errors
      /*swal({
        icon: "error",
        text: "Error cargando la informacion del usuario",
      });*/
      return null;
    }
  };

  /*
  const restorePassword = (email) => {
    dispatch({
      type: RESTORE_PASSWORD,
      payload: email,
    });
  };

  const updateUser = (id, userData) => {
    if (!id || !userData) {
      return;
    }
    dispatch({
      type: UPDATE_PROFILE_USER_FETCH,
      payload: { id, userData },
    });
  };

  const uploadInteresToStore = (data) => {
    dispatch({
      type: INTEREST_SELECTED,
      payload: data,
    });
  };

  const uploadSubInteresToStore = (data) => {
    dispatch({
      type: SUB_INTEREST_UPLOAD_SUCCESS,
      payload: data,
    });
  };
  */

  return {
    user,
    isCompany: user?.role === ROLES.company,
    logout,
    profileUser,
    loginAction,
    getDataOneUser,
    registerAction,
    registerSuccess,
    restoredPassword,
    tokenConfirmated,
    loadTokenStorage,
  };
};

export default useUser;

import { stateCommons } from "../types/store.types";
import { useSelector, useDispatch } from "react-redux";
import {
  CLOSE_LOADER,
  OPEN_LOADER,
  LOAD_DATAS_COMMONS,
} from "../store/actions/commons.actions";

const useCommons = () => {
  const dispatch = useDispatch();
  const { loading, cities, professions, categories } = useSelector(
    (state: { commons: stateCommons }) => state.commons
  );

  const openLoader = () => {
    dispatch({ type: OPEN_LOADER });
  };

  const closeLoader = () => {
    dispatch({ type: CLOSE_LOADER });
  };

  const loadDatasCommons = () => {
    dispatch({ type: LOAD_DATAS_COMMONS });
  };

  return {
    cities,
    loading,
    categories,
    openLoader,
    professions,
    closeLoader,
    loadDatasCommons,
  };
};

export default useCommons;

import { stateCommons } from '../types/store.types';
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_LOADER, OPEN_LOADER } from '../store/actions/commons.actions';

const useCommons = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state : {commons : stateCommons}) => state.commons);

  const openLoader = () => {
    dispatch({ type: OPEN_LOADER });
  };

  const closeLoader = () => {
    dispatch({ type: CLOSE_LOADER });
  };

  return {
    loading,
    openLoader,
    closeLoader,
  };
};

export default useCommons;
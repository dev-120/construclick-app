import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useUser from "./useUser";
import { getMyConstructions, getOneConstructions } from "../services/constructions.service";
import { GET_CONSTRUCTIONS, SELECT_CONSTRUCTION } from "../store/actions/construction.actions";

const useConstructions = () => {
  const dispatch = useDispatch();
  const { profileUser } = useUser();
  const { constructions, constructionSelected } = useSelector((state: any) => state.constructions);


  const loadConstructions = async () => {
    try {
      const constructions = await getMyConstructions(profileUser?.id);
      dispatch({
        type: GET_CONSTRUCTIONS,
        payload: constructions.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const selectConstruction = async (id: string) => {
    try {
      const response = await getOneConstructions(id);
      dispatch({
        type: SELECT_CONSTRUCTION,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadConstructions()
  }, [profileUser]);

  return {
    constructions,
    loadConstructions,
    selectConstruction,
    constructionSelected,
  };
};

export default useConstructions;

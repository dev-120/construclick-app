import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useUser from "./useUser";
import { getMyConstructions, getOneConstructions, createConstruction, updateConstruction } from "../services/constructions.service";
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
        payload: constructions?.data?.data,
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
        payload: response?.data?.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const _createConstruction = async (data: any) => {
    try {
      await createConstruction({
        userId: profileUser?.id,
        ...data
      });
      await loadConstructions();
    } catch (error) {
      console.log(error);
    }
  };

  const _updateConstruction = async (data: any) => {
    const { _id, ...newData } = data;
    try{
      await updateConstruction(_id, {
        ...newData,
      });
      await loadConstructions();
      await selectConstruction(_id)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    if(profileUser?.id) loadConstructions()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileUser]);

  return {
    constructions,
    loadConstructions,
    selectConstruction,
    createConstruction: _createConstruction,
    updateConstruction: _updateConstruction,
    constructionSelected,
  };
};

export default useConstructions;

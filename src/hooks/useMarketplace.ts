import { useEffect, useState } from "react";
import { getGrillsMarketplaceService } from "../services/marketplace.service";
import useUser from "./useUser";

const useMarketplace = () => {
  const { profileUser } = useUser();
  const [grills, setGrills] = useState([]);

  const fetchGrills = async (id: string) => {
    try {
      const { data } = await getGrillsMarketplaceService(id);
      setGrills(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if(profileUser.city_id !== "") fetchGrills(profileUser.city_id);
  }, [profileUser]);

  return {
    grills,
  };
};

export default useMarketplace;

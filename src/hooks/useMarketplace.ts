import useUser from "./useUser";
import { useEffect, useState } from "react";
import { getGrillsMarketplaceService } from "../services/marketplace.service";

const useMarketplace = () => {
  const [grills, setGrills] = useState([]);
  const { profileUser } = useUser();

  const fetchGrills = async (id: string) => {
    try {
      const { data } = await getGrillsMarketplaceService(id);
      setGrills(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (profileUser !== null) fetchGrills(profileUser.cityId);
  }, [profileUser]);

  return {
    grills,
  };
};

export default useMarketplace;

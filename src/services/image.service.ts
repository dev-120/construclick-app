import axios from "axios";

import { configEnvirontment } from "../config/environtment";

const basePath = "image";
const { apiUrl } = configEnvirontment;

export const uploadImage = (file: any) => {
  const formData = new FormData();
  formData.append("image", file);
  const config = {
  };
  return axios.post(`${apiUrl}/${basePath}`, formData, config);
};

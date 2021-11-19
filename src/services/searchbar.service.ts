import axios from "axios";

import { configEnvirontment } from "../config/environtment";

const basePath = "/user";

const { apiUrl } = configEnvirontment;

export const queryProfileByProfession = (query: string) => {
  return axios.get(`${apiUrl}${basePath}/search-by-profession/${query}`);
};

export const queryProductByName = (query: string) => {
  return axios.get(`${apiUrl}/product/search/${query}`);
};

import axios from "axios";

import { configEnvirontment } from "../config/environtment";

const basePath = "/shopping-cart";
const { apiUrl } = configEnvirontment;

export const getShoppingCart = (shoppingCartId: string) => {
  return axios.get(`${apiUrl}${basePath}/${shoppingCartId}`);
};

export const addProductToShoppingCart = (data: any) => {
  return axios.post(`${apiUrl}${basePath}/add-item`, {
    ...data,
  });
};

export const removeProductToShoppingCart = (data: any) => {
  return axios.post(`${apiUrl}${basePath}/remove-item`, {
    ...data
  })
}
import axios from 'axios';

import { configEnvirontment } from '../config/environtment';

const basePath = "/post";
const { apiUrl } = configEnvirontment;

export const publishPostService = (data: any) => {
  return axios.post(`${apiUrl}${basePath}`, {
    ...data
  })
}
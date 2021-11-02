import axios from 'axios';

import { configEnvirontment } from '../config/environtment';

const basePath = '/calculator';
const { apiUrl } = configEnvirontment;

export const getCalculatorResultService = (data: any) => {
  return axios.get(`${apiUrl}/${basePath}`, {
    ...data
  })
}
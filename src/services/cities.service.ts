import axios from 'axios';

import { configEnvirontment } from '../config/environtment';

const basePath = '/city';
const { apiUrl } = configEnvirontment;

export const getCities = () => {
    return axios.get(`${apiUrl}${basePath}`);
};
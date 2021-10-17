import axios from 'axios';

import { configEnvirontment } from '../config/environtment';

const basePath = '/category';
const { apiUrl } = configEnvirontment;

export const getCategories = () => {
    return axios.get(`${apiUrl}${basePath}`);
};

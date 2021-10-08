import axios from 'axios';

import { configEnvirontment } from '../config/environtment';

const basePath = '/profession';
const { apiUrl } = configEnvirontment;

export const getProfessions = () => {
    return axios.get(`${apiUrl}${basePath}`);
};
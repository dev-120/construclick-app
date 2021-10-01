import axios from 'axios';

import { configEnvirontment } from '../config/environtment';

const basePath = '/user';
const { apiUrl } = configEnvirontment;

export const register = (data: object) => {
    return axios.post(`${apiUrl}${basePath}/register`, data);
};

export const login = (data: object) => {
    return axios.post(`${apiUrl}${basePath}/auth`, data);
};

export const loadDataUserBasic = (id:string) => {
    return axios.get(`${apiUrl}${basePath}/${id}`);
};

export const update = ({id, newData}:{id: string, newData: any}) => {
    return axios.put(`${apiUrl}${basePath}/${id}`, newData);
};

import axios from 'axios';

import { configEnvirontment } from '../config/environtment';

const basePath = '/construction';
const { apiUrl } = configEnvirontment;

export const getMyConstructions = (userId: string) => {
    return axios.get(`${apiUrl}${basePath}/userId?userId=${userId}`);
};

export const getOneConstructions = (id: string) => {
    return axios.get(`${apiUrl}${basePath}/id?id=${id}`);
};

export const updateConstruction = (id: string, data: any) => {
    return axios.put(`${apiUrl}${basePath}/${id}`, {
        newData: data,
    });
};

export const createConstruction = (data: any) => {
    return axios.post(`${apiUrl}${basePath}`, data);
};

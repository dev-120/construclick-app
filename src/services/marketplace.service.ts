import axios from 'axios';

import { configEnvirontment } from '../config/environtment';

const basePath = '/marketplace';
const { apiUrl } = configEnvirontment;

export const getGrillsMarketplaceService = (cityId: string) => {
    return axios.get(`${apiUrl}${basePath}?cityId=${cityId}`);
};

export const getProductDetailService = (productId: string) => {
    return axios.get(`${apiUrl}/product/id/${productId}`)
}
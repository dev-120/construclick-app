import axios from "axios";

import { configEnvirontment } from "../config/environtment";

const basePath = "/post";
const { apiUrl } = configEnvirontment;

export const publishPostService = (data: any) => {
  return axios.post(`${apiUrl}${basePath}`, {
    ...data,
  });
};

export const fetchPosts = (data: string) => {
  return axios.get(`${apiUrl}${basePath}?type=${data}`);
};

export const fetchProjects = (userId: string) => {
  return axios.get(`${apiUrl}${basePath}/projects?userId=${userId}`);
}


export const fetchAllPostByUserId = (userId: string) => {
  return axios.get(`${apiUrl}${basePath}/userId?userId=${userId}`);
}
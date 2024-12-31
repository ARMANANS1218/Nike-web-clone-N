

import axios from "axios";
const API_HOST = process.env.API_HOST;

const instance = axios.create({
  baseURL: `${API_HOST}`,
});

export const fetchDataFromApi = async (endpoint) => {
  const res = await instance.get(endpoint);
  const data = await res.data;
  return data;
};

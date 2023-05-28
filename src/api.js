import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_SERVER_BASE_URL;

const getBrands = async () => {
  return axios.get(`${apiBaseUrl}/brands`, {
    headers: {
      Accept: "application/json",
    },
  });
};

const getCities = async () => {
  return axios.get(`${apiBaseUrl}/cities`, {
    headers: {
      Accept: "application/json",
    },
  });
};

const getModels = async (brandId) => {
  return axios.get(`${apiBaseUrl}/models?brand=${brandId}`, {
    headers: {
      Accept: "application/json",
    },
  });
};

export { getBrands, getCities, getModels };

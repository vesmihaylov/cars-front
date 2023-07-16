import axios from "axios";

const entrypoint = import.meta.env.VITE_API_ENTRYPOINT;

const getBrands = async () => {
  return axios.get(`${entrypoint}/brands`, {
    headers: {
      Accept: "application/json",
    },
  });
};

const getCities = async () => {
  return axios.get(`${entrypoint}/cities`, {
    headers: {
      Accept: "application/json",
    },
  });
};

const getModels = async (brandId) => {
  return axios.get(`${entrypoint}/models?brand=${brandId}`, {
    headers: {
      Accept: "application/json",
    },
  });
};

const getFeatures = async () => {
  return axios.get(`${entrypoint}/features`, {
    headers: {
      Accept: "application/json",
    },
  });
};

const publishDeal = async (data) => {
  console.log(data);
  await axios.post(`${entrypoint}/deals`, {
    data,
  });
};

export { getBrands, getCities, getModels, getFeatures, publishDeal };

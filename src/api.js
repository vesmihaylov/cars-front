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

const getDeals = async () => {
  return axios.get(`${entrypoint}/deals`, {
    headers: {
      Accept: "application/json",
    },
  });
};

const getDeal = async (id) => {
  return axios.get(`${entrypoint}/deals/${id}`, {
    headers: {
      Accept: "application/json",
    },
  });
};

const publishDeal = async (data) => {
  await axios.post(`${entrypoint}/deals`, {
    data,
  });
};

const register = async (data) => {
  await axios.post(`${entrypoint}/register`, {
    data,
  });
};

const login = async (data) => {
  return await axios.post(`${entrypoint}/auth`, data);
};

const logout = () => {
  localStorage.removeItem("JWT_TOKEN");
  window.setTimeout(() => {
    window.location.href = "/";
  }, 500);
};

export {
  getBrands,
  getCities,
  getModels,
  getFeatures,
  getDeals,
  getDeal,
  publishDeal,
  register,
  login,
  logout,
};

import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_SERVER_BASE_URL;

const getBrands = async (term) => {
  return axios.get(`${apiBaseUrl}/brands`, {
    headers: {
      Accept: "application/json",
    },
  });
};

export { getBrands };

import axios from "axios";

const BYLINK_TOKEN: string = "RxBhkOBj0NkeyKRLCNWoaqb8hWy9mnFZ";
const BYLINK_BASE: string = `https://blynk.cloud/external/api`;

const axiosBlynk = axios.create({
  baseURL: BYLINK_BASE,
  timeout: 5000,
});

axiosBlynk.interceptors.request.use(
  (config) => {
    if (!config.params) config.params = {};
    config.params.token = BYLINK_TOKEN;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosBlynk.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log("Error fetch data: ", error);
  }
);

export default axiosBlynk;

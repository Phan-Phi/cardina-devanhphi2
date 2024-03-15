import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
});

instance.interceptors.request.use(
  async function (config) {
    config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_KEY}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    return Promise.reject(err);
  }
);

export default instance;

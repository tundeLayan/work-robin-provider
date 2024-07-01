import axios, { AxiosRequestConfig } from "axios";
import config from "../config";
import axiosInstance from "../axiosConfig";

const { baseUrl } = config;

interface Request {
  url: string;
  body?: any;
  auth?: boolean;
  options?: AxiosRequestConfig<any> | undefined;
  [x: string]: any;
}

const del = async ({ url, body: data }: Request) =>
  (
    await axiosInstance.delete(url, {
      data,
    })
  ).data;

const get = async ({ url, auth = true }: Request) => {
  return (await (auth ? axiosInstance.get(url) : axios.get(baseUrl + url)))
    .data;
};

const post = async ({ url, body, auth = true, options = {} }: Request) => {
  return await (auth
    ? axiosInstance.post(url, body, options)
    : axios.post(baseUrl + url, body));
};

const patch = async ({ url, body }: Request) => {
  return await axiosInstance.patch(url, body);
};

const put = async ({ url, body }: Request) => {
  return (await axiosInstance.put(url, body)).data;
};

const api = {
  delete: del,
  get,
  patch,
  post,
  put,
};

export default api;

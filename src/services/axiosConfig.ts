import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import config from "./config";

import routes from "@/lib/routes";
import { clearLocalStorage, getLocalStorage, saveLocalStorage } from "./helper";

const baseURL = config.baseUrl;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

const refreshToken = async (
  originalRequest: InternalAxiosRequestConfig<any>,
) => {
  try {
    const token = getLocalStorage(config.tokenKey);
    const url = `${baseURL}/Account/refresh-token?token=${token?.refreshToken}`;

    const { data, ...response } = await axios.post(url);

    if (data.status === 200) {
      // old request and save new token
      saveLocalStorage(data.data, config.tokenKey);

      if (originalRequest?.headers) {
        originalRequest.headers.Authorization = `Bearer ${data.data?.accessToken}`;
      }

      axios(originalRequest).then(onResponse).catch(onResponseError);

      return { data, ...response };
    }

    // window.location.href = `${routes.auth.logout.path}?next=${window.location.pathname}`;
    return await Promise.reject(response);
  } catch (error) {
    // TODO: Logout user
    // delete
    clearLocalStorage(config.tokenKey);
    setTimeout(() => {
      // useNavigator(`${routes.auth.login.path}`);
      window.location.href = `${routes.auth.login.path}?next=${window.location.pathname}`;
    }, 1000);
    return await Promise.reject(error);
  }
};

const onRequest = (
  request: AxiosRequestConfig,
): InternalAxiosRequestConfig<any> => {
  // const token = getLocalStorage(config.tokenKey);
  if (!request.headers) return request as InternalAxiosRequestConfig<any>;

  request.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicHJvdmlkZXJfN1NYTlZZRjJGOEpkUEZXQiIsImlhdCI6MTcxOTY5ODE5NiwiZXhwIjoxNzE5Nzg0NTk2fQ.rlA9tGBz1Km-TlTfbHeWc8XP_9RDEu_Wcb1T7emio9Y`;

  return request as InternalAxiosRequestConfig<any>;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  return await Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data ?? response;
};

const onResponseError = async (error: AxiosError) => {
  const originalRequest = error.config;
  const statusCode = error.response!.status;

  if (statusCode === 401) {
    if (!originalRequest) return null;
    const response = await refreshToken(originalRequest);
    return response;
  }

  return await Promise.reject(error?.response?.data || error.message);
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;

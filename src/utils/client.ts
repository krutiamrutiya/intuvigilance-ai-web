import axios, { type ResponseType } from "axios";
import {
  getBaseURL,
  getToken,
  removeToken,
  showToastError,
} from "@utils/common";
import API_STATUS from "@utils/apiStatus";
import store from "@/store/store";

interface MethodProps {
  url: string;
  params?: Record<string, any>;
  body?: Record<string, any>;
  headers?: Record<string, string>;
  responseType?: ResponseType;
}
axios.defaults.headers.common["ngrok-skip-browser-warning"] = "testing";

const client = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const get = ({
  url,
  params = {},
  body = {},
  headers = {},
  responseType = "json",
}: MethodProps) =>
  client.get(url, {
    headers,
    params,
    data: body, // Allows sending a request body if needed
    responseType: responseType,
  });

export const post = ({ url, body, headers = {} }: MethodProps) =>
  client.post(url, body, { headers, params: headers });

export const put = ({ url, body, headers = {} }: MethodProps) =>
  client.put(url, body, { headers, params: headers });

export const patch = ({ url, body, headers = {} }: MethodProps) =>
  client.patch(url, body, { headers, params: headers });

export const del = ({ url, body, headers = {} }: MethodProps) =>
  client.delete(url, { data: body, headers });

client.interceptors.request.use(async (config: any) => {
  if (typeof window !== "undefined") {
    config.headers.Authorization = await getToken();
  }
  return config;
});

client.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    const isRefreshTokenExpired = error.response.refresh_token_expire;
    if (
      error.response.status === API_STATUS.FORBIDDEN ||
      error.response.status === API_STATUS.UNAUTHORIZED ||
      isRefreshTokenExpired
    ) {
      removeToken();
      store.dispatch({ type: "REMOVE_TOKEN" });
      if (error.response?.data?.message)
        showToastError(error.response?.data?.message);
    }
    return Promise.reject(error);
  }
);

export default client;

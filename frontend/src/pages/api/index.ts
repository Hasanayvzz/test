import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 1200000,
  maxBodyLength: Infinity,
  headers: {
    "Content-Type": "application/json",
  },
});
export const instanceFile = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL_FILE,
  timeout: 1200000,
  headers: {
    "Content-Type": "application/json",
  },
});
const responseBody = (response: AxiosResponse) => response.data;

const request = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),

  postFormData: async (url: string, body: any) => {
    return instanceFile
      .post(url, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(responseBody);
  },
};

export const ApiRequest = {
  //auth
  login: (payload: any) => request.post("auth/login", payload),
  register: (payload: any) => request.post("auth/register", payload),
  getUserById: (id) => request.get(`auth/${id}`),
};

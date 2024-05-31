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
export const recommendInstance = axios.create({
  baseURL: "http://127.0.0.1:5000",
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
  recommendPost: (url: string, body: {}) =>
    recommendInstance.post(url, body).then(responseBody),
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
  // Auth apis

  login: (payload: any) => request.post("auth/login", payload),
  register: (payload: any) => request.post("auth/register", payload),
  getUserById: (id) => request.get(`auth/${id}`),
  getAllUsers: () => request.get(`auth/getAll`),
  deleteUser: (payload: any) => request.post(`auth/delete`, payload),
  addImage: (payload: any) => request.post(`auth/addImage`, payload),
  // Blog apis
  getAllBlogs: () => request.get(`blog/getAll`),
  createBlog: (payload: any) => request.post("blog/create", payload),
  deleteBlog: (payload: any) => request.post(`blog/delete`, payload),
  getAllBlogWithoutImages: () => request.get(`blog/getAllWithoutImage`),
  getBlogById: (id) => request.get(`blog/${id}`),
  updateBlog: (payload: any) => request.post("blog/update", payload),
  addStar: (payload: any) => request.post("blog/addStar", payload),
  getAllWithoutPlaceImages: () => request.get(`blog/getAllWithoutPlaceImages`),

  // Favorite
  addFavorite: (payload: any) => request.post(`favorite/create`, payload),
  getMyFavorites: (payload: any) =>
    request.post(`favorite/getMyFavorites`, payload),
  // AI
  recommend: (payload: any) => request.recommendPost(`/predict`, payload),
};

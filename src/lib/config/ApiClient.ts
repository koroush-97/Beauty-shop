import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => {
    const status = error.response?.status;

    if (!error.response) {
      toast.error("ارتباط با سرور برقرار نشد");
      return Promise.reject(error);
    }

    switch (status) {
      case 400:
        toast.error("درخواست ارسال‌شده معتبر نیست");
        break;

      case 401:
        if (!window.location.pathname.includes("/login")) {
          toast.error("نشست شما منقضی شده، لطفاً دوباره وارد شوید");
        }
        break;

      case 403:
        toast.error("شما اجازه دسترسی به این بخش را ندارید");
        break;

      case 404:
        toast.error("منبع درخواستی وجود ندارد");
        break;

      case 500:
        toast.error("خطایی در سرور رخ داده است");
        break;

      default:
        toast.error("خطای نامشخصی رخ داده است");
        break;
    }

    return Promise.reject(error);
  },
);

export default apiClient;

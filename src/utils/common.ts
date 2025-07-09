import toast from "react-hot-toast";

export const showToastSuccess = (message: string) =>
  message && toast.success(message);

export const showToastError = (error: string) => error && toast.error(error);

export const getToken = () => {
  const token = localStorage.getItem("TOKEN") || "";
  return "Bearer " + token || "";
};

export const saveToken = (token: string) => {
  localStorage.setItem("TOKEN", token);
};

export const removeToken = () => {
  localStorage.removeItem("TOKEN");
};

export const getBaseURL = (): string => {
  return import.meta.env.VITE_REACT_APP_BASE_URL;
};

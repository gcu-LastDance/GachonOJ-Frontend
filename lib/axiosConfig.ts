import axios from "axios";

export const instanceNonAuth = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const instanceAuth = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instanceAuth.interceptors.request.use(
  (config) => {
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;

    config.headers["Authorization"] = config.headers["Authorization"] =
      user.state.token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

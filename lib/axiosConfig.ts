import axios from "axios";

export const instanceNonAuth = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const instanceAuth = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const instanceAuthWithMultipart = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
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

// 응답에 대한 리턴값 설정과 오류 발생에 대한 처리
instanceAuth.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalConfig = err.config;
    if (err.response && err.response.status == 401) {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("programLang");
      window.sessionStorage.clear();
      window.location.href = "/login";
    } else {
      // window.location.href = "/main";
    }
    return Promise.reject(err);
  }
);

instanceAuthWithMultipart.interceptors.request.use(
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

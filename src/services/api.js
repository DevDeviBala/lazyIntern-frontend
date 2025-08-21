import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

// Attach JWT token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  // Don't attach token for auth endpoints that don't require authentication
  const noAuthEndpoints = [
    "/auth/login/",
    "/auth/register/",
    "/auth/forgot-password/",
    "/auth/reset-password/"
  ];

  const shouldAttachToken = token && !noAuthEndpoints.some(endpoint => 
    config.url.includes(endpoint)
  );

  if (shouldAttachToken) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
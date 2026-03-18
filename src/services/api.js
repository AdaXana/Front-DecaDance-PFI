import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Error del servidor:", error.response.status, error.response.data);
      
      if (error.response.status === 401) {
        console.warn("No autorizado o sesión caducada.");
        localStorage.removeItem("token");
      }
    } else if (error.request) {
      console.error("No hay respuesta del servidor. ¿Está el backend encendido?", error.request);
    } else {
      console.error("Error al configurar la petición Axios:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
import api from "./api";

const authService = {
  register: async (data) => {
    const response = await api.post("/users/register", data);
    return response.data;
  },

  login: async (data) => {
    const response = await api.post("/users/login", data);
    return response.data;
  },

  getProfile: async (id) => {
    const response = await api.get(`/users/profile/${id}`);
    return response.data;
  },

  updateUserName: async (id, data) => {
    const response = await api.patch(`/users/name/${id}`, data);
    return response.data;
  },

  updateUserAvatar: async (id, data) => {
    const response = await api.patch(`/users/avatar/${id}`, data);
    return response.data;
  },

  deleteUser: async (id) => {
    await api.delete(`/users/${id}`);
  },
};

export default authService;
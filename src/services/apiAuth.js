import api from "./api";

const authService = {

  register: async (data) => {
    const response = await api.post("/auth/register", data);
    return response.data;
  },

  login: async (data) => {
    const response = await api.post("/auth/login", data);
    return response;
  },

  getAllUsers: async () => {
    const response = await api.get("/users");
    return response.data;
  },

  getUserById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  updateUsername: async (id, newUsername) => {
    const response = await api.patch(`/users/username/${id}`, { username: newUsername });
    return response.data;
  },

  updateUserImage: async (id, newImageUrl) => {
    const response = await api.patch(`/users/image/${id}`, { image: newImageUrl });
    return response.data;
  },

  deleteUser: async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  },

};

export default authService;
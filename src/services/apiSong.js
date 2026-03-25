import api from "./api";

const songService = {

  getAllSongs: async () => {
    const response = await api.get("/songs");
    return response.data;
  },

  getActiveSongs: async () => {
    const response = await api.get("/songs/active");
    return response.data;
  },

  getSongById: async (id) => {
    const response = await api.get(`/songs/${id}`);
    return response.data;
  },

  createSong: async (data) => {
    const response = await api.post("/songs", data);
    return response.data;
  },

  updateTitle: async (id, newTitle) => {
    const response = await api.patch(`/songs/title/${id}`, { title: newTitle });
    return response.data;
  },

  updateArtist: async (id, newArtist) => {
    const response = await api.patch(`/songs/artist/${id}`, { artist: newArtist });
    return response.data;
  },

  updateYear: async (id, newYear) => {
    const response = await api.patch(`/songs/year/${id}`, { year: newYear });
    return response.data;
  },

  updateCoverUrl: async (id, newCoverUrl) => {
    const response = await api.patch(`/songs/cover/${id}`, { coverUrl: newCoverUrl });
    return response.data;
  },

  updateStatus: async (id, newIsActive) => {
    const response = await api.patch(`/songs/status/${id}`, { isActive: newIsActive });
    return response.data;
  },

  deleteSong: async (id) => {
    const response = await api.delete(`/songs/${id}`);
    return response.data;
  }
};

export default songService;
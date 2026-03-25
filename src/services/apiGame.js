import api from "./api";

const gameService = {

  createGame: async (data) => {
    const response = await api.post("/games", data);
    return response.data;
  },

  joinGame: async (data) => {
    const response = await api.post("/games/join", data);
    return response.data;
  },

  startGame: async (idGame, data) => {
    const response = await api.patch(`/games/start/${idGame}`, data);
    return response.data;
  },

  registerScore: async (idGame, data) => {
    const response = await api.patch(`/games/${idGame}/score`, data);
    return response.data;
  },

  endGame: async (idGame, data) => {
    const response = await api.patch(`/games/${idGame}/end`, data);
    return response.data;
  }
};

export default gameService;
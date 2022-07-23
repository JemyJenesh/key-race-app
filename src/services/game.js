import { axios } from "../config";

const create = async (playerId) => {
  return await axios.post("/games", { playerId });
};

const get = async (id) => {
  return await axios(`/games/${id}`);
};

const update = async (id, game) => {
  return await axios.put(`/games/${id}`, game);
};

const gameService = { create, get, update };

export default gameService;

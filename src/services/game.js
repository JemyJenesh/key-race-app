import { axios } from "../config";

const create = async (playerId) => {
  return await axios.post("/games", { playerId });
};

const get = async (id) => {
  return await axios(`/games/${id}`);
};

const gameService = { create, get };

export default gameService;

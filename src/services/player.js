import { axios } from "../config";

const create = async (name) => {
  return await axios.post("/players", { name });
};

const get = async (id) => {
  return await axios(`/players/${id}`);
};

const playerService = { create, get };

export default playerService;

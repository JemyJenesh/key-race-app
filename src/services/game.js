import { axios, socket } from "../config";

const create = async (playerId) => {
  try {
    const { data: game } = await axios.post("/games", { playerId });

    socket.emit("playerJoined", game._id);

    return game;
  } catch (error) {
    console.log(error);
  }
};

const get = async (id) => {
  try {
    const { data: game } = await axios(`/games/${id}`);

    return game;
  } catch (error) {
    throw "No gmae found";
  }
};

const update = async (id, game, playerJoined = false) => {
  try {
    const { data: updatedGame } = await axios.put(`/games/${id}`, game);

    if (playerJoined) {
      socket.emit("playerJoined", id);
    }

    return updatedGame;
  } catch (error) {
    console.log("Game is closed!");
  }
};

const gameService = { create, get, update };

export default gameService;

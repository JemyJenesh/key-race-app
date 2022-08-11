import { addDoc, collection, doc } from "firebase/firestore/lite";
import { onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";

const create = async (player) => {
  const game = {
    startedAt: null,
    isOver: false,
    player: [player],
    hostId: player.id,
  };

  const docRef = await addDoc(collection(db, "games"), game);
  game.id = docRef.id;

  console.log("Game data: ", game);
  return game;
};

const get = async (id, setGame) => {
  return onSnapshot(doc(db, "games", id), (doc) => {
    const game = { id: doc.id, ...doc.data() };

    console.log("Game data: ", game);
    setGame(game);
  });
};

const update = async (id, game, playerJoined = false) => {
  // try {
  //   const { data: updatedGame } = await axios.put(`/games/${id}`, game);
  //   if (playerJoined) {
  //     socket.emit("playerJoined", id);
  //   }
  //   return updatedGame;
  // } catch (error) {
  //   console.log("Game is closed!");
  // }
};

const gameService = { create, get, update };

export default gameService;

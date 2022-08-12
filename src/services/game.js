import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { useStore } from "../utils/store";
import playerService from "./player";

const create = async (player) => {
  const quotable = await fetch("https://api.quotable.io/random?minLength=200");
  const quote = await quotable.json();

  const updatedPlayer = {
    ...player,
    wordIndex: 0,
  };

  const game = {
    startedAt: null,
    isOver: false,
    players: [updatedPlayer],
    hostId: player.id,
    words: quote.content.split(" "),
  };

  await playerService.update(player.id, updatedPlayer);

  const docRef = await addDoc(collection(db, "games"), game);
  game.id = docRef.id;

  console.log("Game data: ", game);
  return game;
};

const get = async (id) => {
  onSnapshot(doc(db, "games", id), { includeMetadataChanges: true }, (doc) => {
    if (doc.exists()) {
      const game = { id, ...doc.data() };

      console.log("Game data: ", game);

      if (!doc.metadata.hasPendingWrites) useStore.setState({ game });
    }
  });
};

const update = async (id, game) => {
  await setDoc(doc(db, "games", id), game);
};

const gameService = { create, get, update };

export default gameService;

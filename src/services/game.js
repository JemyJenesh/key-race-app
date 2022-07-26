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
    wpm: 0,
    position: 0,
  };

  const game = {
    startedAt: null,
    isOver: false,
    players: [updatedPlayer],
    hostId: player.id,
    words: quote.content.split(" "),
    position: 0,
  };

  useStore.setState({ player: updatedPlayer });
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
      const player = useStore.getState().player;

      const newGameData = {
        ...game,
        players: game.players.filter((p) => p.id === player.id),
      };

      console.log("Game data: ", game);

      if (!doc.metadata.hasPendingWrites)
        useStore.setState({ game: newGameData });
    }
  });
};

const update = async (id, game) => {
  await setDoc(doc(db, "games", id), game);
};

const gameService = { create, get, update };

export default gameService;

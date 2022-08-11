// import { addDoc, collection, getDoc, setDoc } from "firebase/firestore/lite";
import {
  doc,
  onSnapshot,
  addDoc,
  collection,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../utils/firebase";

const create = async (player) => {
  const quotable = await fetch("https://api.quotable.io/random?minLength=200");
  const quote = await quotable.json();

  const game = {
    startedAt: null,
    isOver: false,
    players: [player],
    hostId: player.id,
    words: quote.content.split(" "),
  };

  const docRef = await addDoc(collection(db, "games"), game);
  game.id = docRef.id;

  console.log("Game data: ", game);
  return game;
};

const get = async (id, setGame) => {
  try {
    onSnapshot(doc(db, "games", id), (doc) => {
      const game = { id, ...doc.data() };

      console.log("Game data: ", game);
      setGame(game);
    });
  } catch (err) {
    console.log("get real time,", err);
  }
};

const update = async (id, game) => {
  await setDoc(doc(db, "games", id), game);
};

const gameService = { create, get, update };

export default gameService;

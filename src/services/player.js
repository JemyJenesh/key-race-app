import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

const create = async (name) => {
  const player = {
    name,
    wpm: 0,
    wordIndex: 0,
    errorCount: 0,
    position: 0,
  };
  const docRef = await addDoc(collection(db, "players"), player);

  return {
    id: docRef.id,
    ...player,
  };
};

const get = async (id) => {
  const docRef = doc(db, "players", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const player = {
      id: docRef.id,
      ...docSnap.data(),
    };

    console.log("Player data:", player);
    return player;
  } else {
    console.log("No such player!");
    return null;
  }
};

const update = async (id, player) => {
  await setDoc(doc(db, "players", id), player);
};

const playerService = { create, get, update };

export default playerService;

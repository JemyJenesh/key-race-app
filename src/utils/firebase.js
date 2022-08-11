import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw5QjZLfLOpR11X4bC_cWnqdSvr4vfnsM",
  authDomain: "key-race.firebaseapp.com",
  projectId: "key-race",
  storageBucket: "key-race.appspot.com",
  messagingSenderId: "690674375362",
  appId: "1:690674375362:web:605448c746ab667c22395b",
  measurementId: "G-F0Q9GCGWC3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;

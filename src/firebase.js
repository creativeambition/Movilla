import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEcVUXwjJdqX31Q78tDMjTHxFBihKUdj4",
  authDomain: "movilla-4696a.firebaseapp.com",
  projectId: "movilla-4696a",
  storageBucket: "movilla-4696a.appspot.com",
  messagingSenderId: "756014991126",
  appId: "1:756014991126:web:6d6ec9466eac6edf0d3237",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

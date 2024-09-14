import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-e146a.firebaseapp.com",
  projectId: "reactchat-e146a",
  storageBucket: "reactchat-e146a.appspot.com",
  messagingSenderId: "364307160149",
  appId: "1:364307160149:web:51e9e87c9c738b416fc8dc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
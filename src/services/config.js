import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "music-vinils.firebaseapp.com",
  projectId: "music-vinils",
  storageBucket: "music-vinils.appspot.com",
  messagingSenderId: "293431700403",
  appId: "1:293431700403:web:20f41986641a36abd079c6"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
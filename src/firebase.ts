import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const PROJECT_ID = "simple-chat-app-1ec75";

const firebaseConfig = {
  apiKey: "AIzaSyDHkAlLlpGHYImOqIbI4RWMsWd3Q6dcDTM",
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  projectId: PROJECT_ID,
  storageBucket: `${PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: "284128136255",
  appId: "1:284128136255:web:37157e43d1d7c7eba57c8a",
  measurementId: "G-KPEZ3TZMQ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

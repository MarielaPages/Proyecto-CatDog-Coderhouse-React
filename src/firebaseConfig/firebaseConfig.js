import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY_FIREBASE}`,
  authDomain: "catdog-project-coderhouse.firebaseapp.com",
  projectId: `${process.env.REACT_APP_PROJECT_ID_FIREBASE}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET_FIREBASE}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID_FIREBASE}`,
  appId: `${process.env.REACT_APP_ID_FIREBASE}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
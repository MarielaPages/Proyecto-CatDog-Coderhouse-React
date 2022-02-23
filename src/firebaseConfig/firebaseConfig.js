import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDRYnoJhqdfAzBJxzYEttTVjSY1BFKjYI",
  authDomain: "catdog-project-coderhouse.firebaseapp.com",
  projectId: "catdog-project-coderhouse",
  storageBucket: "catdog-project-coderhouse.appspot.com",
  messagingSenderId: "219806895734",
  appId: "1:219806895734:web:b106642fd93fce14ccd957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
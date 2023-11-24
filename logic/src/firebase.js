// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-k0lfPaE-bs-bkP6MbVcwECJWKks9s8k",
  authDomain: "kart-2c1d6.firebaseapp.com",
  databaseURL: "https://kart-2c1d6-default-rtdb.firebaseio.com/",
  projectId: "kart-2c1d6",
  storageBucket: "kart-2c1d6.appspot.com",
  messagingSenderId: "274452152726",
  appId: "1:274452152726:web:ab9d9e980c9dad6c66ddb7",
  measurementId: "G-QYK917Q0J0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

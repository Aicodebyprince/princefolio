// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArDitG1FOwhKRsVGNMnSx7UW9ZDYpEuE8",
  authDomain: "princefolio-59a52.firebaseapp.com",
  projectId: "princefolio-59a52",
  storageBucket: "princefolio-59a52.appspot.com",
  messagingSenderId: "963962055178",
  appId: "1:963962055178:web:d281615f46db9dfb48cdf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVvLGW4OuIa63EwE26FKHvNphnfD0XVgk",
  authDomain: "student-318e7.firebaseapp.com",
  projectId: "student-318e7",
  storageBucket: "student-318e7.appspot.com",
  messagingSenderId: "42762422530",
  appId: "1:42762422530:web:752d313e846e91eda2da1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "technohub-75887.firebaseapp.com",
  projectId: "technohub-75887",
  storageBucket: "technohub-75887.appspot.com",
  messagingSenderId: "409015841610",
  appId: "1:409015841610:web:e84bf790a3930bf806c7b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
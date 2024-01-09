// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2f5b8.firebaseapp.com",
  projectId: "mern-estate-2f5b8",
  storageBucket: "mern-estate-2f5b8.appspot.com",
  messagingSenderId: "770783283651",
  appId: "1:770783283651:web:89d9af5239ebd32bb51576"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
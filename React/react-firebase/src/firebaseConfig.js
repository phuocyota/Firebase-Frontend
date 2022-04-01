// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB4SPa3g-RMMLSO31wUFkbWypuhCKs-Kw",
  authDomain: "fir-auth-8edf4.firebaseapp.com",
  projectId: "fir-auth-8edf4",
  storageBucket: "fir-auth-8edf4.appspot.com",
  messagingSenderId: "500639164429",
  appId: "1:500639164429:web:96a4269b03fd7a9583cd44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
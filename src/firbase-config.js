// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnlEFLlIWq74sxSAqIZ7QH16FFuPt6W08",
  authDomain: "realtimechatapp-f0c24.firebaseapp.com",
  projectId: "realtimechatapp-f0c24",
  storageBucket: "realtimechatapp-f0c24.appspot.com",
  messagingSenderId: "172718284488",
  appId: "1:172718284488:web:d1f9d1c7754f8d43444ffd",
  measurementId: "G-71BVXJBWG3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

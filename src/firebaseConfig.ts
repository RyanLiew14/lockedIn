// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyO5IoPPMjcqDbai-rN7ktAce03NP2pw4",
  authDomain: "lockedin-5bb7c.firebaseapp.com",
  projectId: "lockedin-5bb7c",
  storageBucket: "lockedin-5bb7c.appspot.com",
  messagingSenderId: "258513390264",
  appId: "1:258513390264:web:166b81fa7fc54fc62c424d",
  measurementId: "G-PPCV7NC3SP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

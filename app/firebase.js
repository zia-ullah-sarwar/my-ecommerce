// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOwTXEiHeA87yBcW3ofOoqZtAsJgBPFYI",
  authDomain: "ecommerce-auth-a4a47.firebaseapp.com",
  projectId: "ecommerce-auth-a4a47",
  storageBucket: "ecommerce-auth-a4a47.appspot.com",
  messagingSenderId: "850965170375",
  appId: "1:850965170375:web:cbae53614609be73c016e2",
  measurementId: "G-57LSZ58CFW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOxc8imtinHYUKMvg6lP8TWL-KBtCMFhI",
  authDomain: "myfirstfirebase-29c3e.firebaseapp.com",
  databaseURL: "https://myfirstfirebase-29c3e-default-rtdb.firebaseio.com",
  projectId: "myfirstfirebase-29c3e",
  storageBucket: "myfirstfirebase-29c3e.appspot.com",
  messagingSenderId: "453990163895",
  appId: "1:453990163895:web:0e76cb6596aa8d1169b432",
  measurementId: "G-3M11LZXC3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
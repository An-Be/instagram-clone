//import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBBseyClNYANh8xn8clZi-O95WRgivwWww",
  authDomain: "instragram-clone-70e67.firebaseapp.com",
  projectId: "instragram-clone-70e67",
  storageBucket: "instragram-clone-70e67.appspot.com",
  messagingSenderId: "405396283237",
  appId: "1:405396283237:web:619fb11faeb8cce7344b8c",
};

const db = firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

console.log(`db`, db);

export { db, FieldValue };

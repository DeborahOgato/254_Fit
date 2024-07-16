// firebase-config.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1pq4VorsisWdqzDT5M3XQ-E6MtCHPqxU",
  authDomain: "fit-f7f49.firebaseapp.com",
  projectId: "fit-f7f49",
  storageBucket: "fit-f7f49.appspot.com",
  messagingSenderId: "161201752814",
  appId: "1:161201752814:web:dd3bb14a98e9f8fde041ff",
  measurementId: "G-JVQMLQWD1J"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
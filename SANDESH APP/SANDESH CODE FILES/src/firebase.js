import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCn8-eySV33WCc4E12nWsCRkFM0ezmi1K0",
  authDomain: "sandesh-64b7a.firebaseapp.com",
  projectId: "sandesh-64b7a",
  storageBucket: "sandesh-64b7a.appspot.com",
  messagingSenderId: "498285919423",
  appId: "1:498285919423:web:5c04e0b8cd69ac8f98da0a"
}).auth();
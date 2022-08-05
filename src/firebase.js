import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNH4yP952CQQieg0x-Zi-lkGWr-Jxhnxk",
  authDomain: "chat-test-685ea.firebaseapp.com",
  projectId: "chat-test-685ea",
  storageBucket: "chat-test-685ea.appspot.com",
  messagingSenderId: "483000172751",
  appId: "1:483000172751:web:9471c7e09c01b63241b7ba",
  measurementId: "G-XTN99Q94MH",
});
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = getStorage(firebaseApp);

export const dataFirebase = {
  auth,
  firestore,
  storage,
};

console.log(firebaseApp);

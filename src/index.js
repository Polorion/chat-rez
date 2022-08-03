import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

firebase.initializeApp({
  apiKey: "AIzaSyBNH4yP952CQQieg0x-Zi-lkGWr-Jxhnxk",
  authDomain: "chat-test-685ea.firebaseapp.com",
  projectId: "chat-test-685ea",
  storageBucket: "chat-test-685ea.appspot.com",
  messagingSenderId: "483000172751",
  appId: "1:483000172751:web:9471c7e09c01b63241b7ba",
  measurementId: "G-XTN99Q94MH",
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context.Provider
      value={{
        firebase,
        auth,
        firestore,
      }}
    >
      <App />
    </Context.Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { dataFirebase } from "./firebase";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context.Provider value={dataFirebase}>
      <App />
    </Context.Provider>
  </BrowserRouter>
);

import React, { useState } from "react";
import Authorization from "./Authorization";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthorizationContainer = (props) => {
  const [active, setActive] = useState("first");
  async function loginGoogle() {
    const provider = new props.firebase.auth.GoogleAuthProvider();
    await props.auth.signInWithPopup(provider);
  }
  const Registration = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("регистрация успешная");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const Singh = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  };

  const activeBtn = (e) => {
    e.preventDefault();

    if (e.target.id === "first") {
      setActive("first");
    } else {
      setActive("second");
    }
  };

  return (
    <Authorization
      login={loginGoogle}
      activeBtn={activeBtn}
      active={active}
      setActive={setActive}
      Registration={Registration}
      Singh={Singh}
    />
  );
};
export default AuthorizationContainer;

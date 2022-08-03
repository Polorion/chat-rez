import React, { useContext } from "react";
import S from "./authorization.module.css";
import google from "../../assets/img/google.png";
import { Context } from "../../index";
import firebase from "firebase/compat/app";

const Authorization = (props) => {
  return (
    <div className={S.body}>
      <button
        onClick={() => {
          props.login();
        }}
        className={S.btn}
      >
        {" "}
        <img className={S.google} src={google} alt="" />
        Авторизоваться с помощью Google
      </button>
    </div>
  );
};

export default Authorization;

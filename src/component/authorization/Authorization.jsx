import React, { useContext } from "react";
import S from "./authorization.module.css";
import google from "../../assets/img/google.png";

const Authorization = (props) => {
  return (
    <div className={S.body}>
      <div>
        <div className={S.choise}>
          <button
            className={props.active === "first" ? S.active : ""}
            id={"first"}
            onClick={props.activeBtn}
          >
            Login
          </button>
          <button
            className={props.active === "second" ? S.active : ""}
            id={"second"}
            onClick={props.activeBtn}
          >
            Registration
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let formData = new FormData(e.target);
            const name = formData.get("accound");

            if (props.active === "second") {
              props.Registration(
                formData.get("accound"),
                formData.get("password")
              );
            } else {
              props.Singh(formData.get("accound"), formData.get("password"));
            }
          }}
          className={S.formBody}
        >
          <input
            className={S.inputs}
            placeholder={props.active === "first" ? "Login" : "Email"}
            type="text"
            name={"accound"}
            id={"accound"}
          />
          <input
            className={S.inputs}
            placeholder={"Password"}
            type="password"
            name={"password"}
            id={"password"}
          />
          <button className={S.btnSign}>
            {props.active === "first" ? "Login" : "Registration"}
          </button>
        </form>
      </div>
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

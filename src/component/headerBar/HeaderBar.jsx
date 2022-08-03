import React, { useContext } from "react";
import S from "./headerBar.module.css";
import logo from "../../assets/img/logo.png";

const HeaderBar = (props) => {
  return (
    <div className={S.header}>
      <img src={logo} alt="" />
      {props.user && (
        <button
          onClick={() => {
            props.signOuth();
          }}
        >
          выйти
        </button>
      )}
    </div>
  );
};

export default HeaderBar;

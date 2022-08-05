import React, { useContext } from "react";
import S from "./headerBar.module.css";

const HeaderBar = (props) => {
  console.log(props);
  return (
    <div className={S.header}>
      <p className={S.text}>On-line Chat</p>
      <div className={S.accound}>
        <div className={S.name}>{props.user.displayName}</div>
        <img className={S.img} src={props.user.photoURL} alt="" />
        <button
          onClick={() => {
            props.signOuth();
          }}
        >
          выйти
        </button>
      </div>
    </div>
  );
};

export default HeaderBar;

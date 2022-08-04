import React, { useState } from "react";
import S from "../style.module.css";
const NewUserSetName = (props) => {
  const [error, setError] = useState("");
  return (
    <div className={S.body}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.value.length > 3
            ? props.setName()
            : setError("more than 3 letters");
        }}
        className={S.form}
      >
        {" "}
        <label className={S.label} htmlFor="">
          {" "}
          <p className={S.p}>You name*</p>
          <p className={S.error}>{error}</p>
          <input
            className={S.input}
            onChange={(e) => {
              props.setValue(e.currentTarget.value);
            }}
            type="text"
            name={"name"}
            value={props.value}
          />
        </label>
        <label className={S.label} htmlFor="">
          <p className={S.p}> url you avatar</p>
          <input className={S.input} type="text" name={"img"} />
        </label>
        <button className={S.button}>Save</button>
      </form>
    </div>
  );
};

export default NewUserSetName;

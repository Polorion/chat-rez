import React, { useState } from "react";
import S from "../style.module.css";

const NewUserSetName = (props) => {
  const [drag, setDrag] = useState(false);
  const dropStart = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const dropEnd = (e) => {
    e.preventDefault();
    setDrag(false);
  };
  const drop = (e) => {
    e.preventDefault();
    props.saveFile(e.dataTransfer.files[0]);
    props.setFile(e.dataTransfer.files[0]);
  };

  const [error, setError] = useState("");
  return (
    <div className={S.body}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.value.length > 3
            ? props.setName(props.URL)
            : setError("more than 3 letters");
        }}
        className={S.form}
      >
        {" "}
        <label className={S.label}>
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
        {!drag ? (
          <div
            onDragStart={dropStart}
            onDragLeave={dropEnd}
            onDragOver={dropStart}
            className={S.dropArea}
          >
            {" "}
            "drop you image(avatar)"
          </div>
        ) : (
          <div
            className={S.dropArea}
            onDragStart={dropStart}
            onDragLeave={dropEnd}
            onDragOver={dropStart}
            onDrop={drop}
          >
            drop file
          </div>
        )}
        {props.file && <p className={S.file}>name file:'{props.file.name}'</p>}
        <button
          disabled={props.prog >= 1 && props.prog < 99 && true}
          className={S.button}
        >
          Save
        </button>
      </form>
      {props.prog >= 1 && (
        <div
          className={`${S.Loading} ${props.prog === 100 ? S.test : S.Loading}`}
        >
          {" "}
          LoadingFile = {props.prog}%
        </div>
      )}
    </div>
  );
};

export default NewUserSetName;

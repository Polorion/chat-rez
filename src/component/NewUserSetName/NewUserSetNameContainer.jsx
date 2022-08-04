import React, { useState } from "react";
import NewUserSetName from "./NewUserSetName";
import { getAuth, updateProfile } from "firebase/auth";
import avatarDefault from "../../assets/img/logo.png";

const NewUserSetNameContainer = () => {
  const [value, setValue] = useState("");
  const [URL, setURL] = useState("");

  const setName = () => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: value,
      photoURL: URL.length > 10 ? URL : avatarDefault,
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <NewUserSetName
      setName={setName}
      setValue={setValue}
      value={value}
      setURL={setURL}
      URL={URL}
    />
  );
};

export default NewUserSetNameContainer;

import React, { useState } from "react";
import NewUserSetName from "./NewUserSetName";
import { getAuth, updateProfile } from "firebase/auth";

const NewUserSetNameContainer = () => {
  const [value, setValue] = useState("");

  const setName = () => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: value,
      photoURL:
        "https://tableforchange.com/wp-content/uploads/2020/06/%D0%9E%D0%B1%D0%BE%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D0%BE%D1%87%D0%B5%D0%BA-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-12-%D0%BB%D0%B5%D1%82-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-16.jpg",
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  };
  return <NewUserSetName setName={setName} setValue={setValue} value={value} />;
};

export default NewUserSetNameContainer;

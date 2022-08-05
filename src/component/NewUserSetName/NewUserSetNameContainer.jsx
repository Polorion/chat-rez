import React, { useState } from "react";
import NewUserSetName from "./NewUserSetName";
import { getAuth, updateProfile } from "firebase/auth";
import avatarDefault from "../../assets/img/logo.png";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";

const NewUserSetNameContainer = (props) => {
  const [value, setValue] = useState("");
  const [prog, setProg] = useState(0);
  const [file, setFile] = useState("");
  const [URL, setURL] = useState("");

  const saveFile = (file) => {
    if (!file) return;
    setProg(1);
    const refs = ref(props.storage, `/files/${file.name}`);
    const upload = uploadBytesResumable(refs, file);
    upload.on(
      "state_changed",
      (snap) => {
        const loading = (snap.bytesTransferred / snap.totalBytes) * 100;
        if (loading > 0) setProg(loading);
      },
      (error) => alert(error),
      () => {
        getDownloadURL(refs).then((re) => {
          setURL(re);
        });
      }
    );
  };

  const setName = () => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: value,
      photoURL: URL ? URL : avatarDefault,
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
      storage={props.storage}
      setFile={setFile}
      file={file}
      saveFile={saveFile}
      prog={prog}
      URL={URL}
    />
  );
};

export default NewUserSetNameContainer;

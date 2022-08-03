import "./index.css";
import React, { useContext, useState } from "react";
import Chat from "./component/chat/Chat";
import HeaderBar from "./component/headerBar/HeaderBar";
import Authorization from "./component/authorization/Authorization";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "./index";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import Loader from "./component/Loader";
import { useCollectionData } from "react-firebase-hooks/firestore";

function App() {
  const { auth, firestore } = useContext(Context);
  const [user, error] = useAuthState(auth);
  const [value, setValue] = useState("");

  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    if (value) {
      firestore.collection("messages").add({
        id: user.uid,
        avatar: user.photoURL,
        name: user.displayName,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setValue("");
    }
  };

  const signOuth = () => {
    auth.signOut();
  };

  async function login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      {user ? <HeaderBar signOuth={signOuth} user={user} /> : ""}
      {user ? (
        <Routes>
          <Route
            path={"/chat"}
            element={
              <Chat
                value={value}
                setValue={setValue}
                sendMessage={sendMessage}
                messages={messages}
                user={user}
              />
            }
          />
          <Route path="*" element={<Navigate to="/chat" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"/login"} element={<Authorization login={login} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

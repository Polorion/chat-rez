import "./index.css";
import React, { useContext, useState } from "react";
import Chat from "./component/chat/Chat";
import HeaderBar from "./component/headerBar/HeaderBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "./index";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import Loader from "./utils/Loader";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AuthorizationContainer from "./component/authorization/AuthorizationContainer";
import HeaderBarContainer from "./component/headerBar/HeaderBarContainer";
import ChatContainer from "./component/chat/ChatContainer";
import NewUserSetNameContainer from "./component/NewUserSetName/NewUserSetNameContainer";

function App() {
  const { auth, firestore } = useContext(Context);
  const [user, error] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  if (user) {
    if (user.displayName === null) {
      return <NewUserSetNameContainer />;
    }
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      {user ? <HeaderBarContainer user={user} auth={auth} /> : ""}
      {user ? (
        <Routes>
          <Route
            path={"/chat"}
            element={
              <ChatContainer
                firestore={firestore}
                user={user}
                messages={messages}
                firebase={firebase}
              />
            }
          />
          <Route path="*" element={<Navigate to="/chat" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path={"/login"}
            element={<AuthorizationContainer auth={auth} firebase={firebase} />}
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

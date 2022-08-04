import React, { useState } from "react";

import Chat from "./Chat";

const ChatContainer = (props) => {
  const [value, setValue] = useState("");
  const sendMessage = async () => {
    if (value) {
      props.firestore.collection("messages").add({
        id: props.user.uid,
        avatar: props.user.photoURL,
        name: props.user.displayName,
        text: value,
        createdAt: props.firebase.firestore.FieldValue.serverTimestamp(),
      });
      setValue("");
    }
  };

  return (
    <Chat
      sendMessage={sendMessage}
      setValue={setValue}
      value={value}
      messages={props.messages}
      user={props.user}
    />
  );
};

export default ChatContainer;

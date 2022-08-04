import React, { useEffect, useRef, useState } from "react";
import S from "./chat.module.css";
import Loader from "../../utils/Loader";
import GeneratorRandomString from "../../utils/GeneratorRandomString";

const Chat = (props) => {
  console.log(props.messages);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  }, [props.messages]);

  return (
    <div className={S.body}>
      <div className={S.chat}>
        {props.messages ? (
          props.messages.map((el) => {
            return (
              <div
                className={el.id === props.user.uid ? S.myMess : S.messageBody}
                key={GeneratorRandomString()}
              >
                <img className={S.avatar} src={el.avatar} alt="" />
                <div className={S.infoPost}>
                  <p className={S.name}>{el.name}</p>
                  <p className={S.text}>{el.text}</p>
                </div>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
        <div ref={messagesEndRef}></div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={S.areaText}
      >
        <input
          onChange={(e) => {
            props.setValue(e.currentTarget.value);
          }}
          type="text"
          value={props.value}
        />
        <button onClick={props.sendMessage}>отправить</button>
      </form>
    </div>
  );
};

export default Chat;

import React from "react";
import HeaderBar from "./HeaderBar";

const HeaderBarContainer = (props) => {
  const signOuth = () => {
    props.auth.signOut();
  };
  return <HeaderBar signOuth={signOuth} user={props.user} />;
};

export default HeaderBarContainer;

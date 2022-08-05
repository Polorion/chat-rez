import * as React from "react";
import { Context } from "../index";
import { useContext } from "react";

const useDataFirebase = () => {
  const value = useContext(Context);

  return value;
};

export default useDataFirebase;

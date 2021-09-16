import React, { useContext } from "react";
import MyContext from "my-context";

export const App = () => {
  const context = useContext(MyContext);
  return <div>{context}</div>;
};

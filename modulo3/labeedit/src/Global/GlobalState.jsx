import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = (props) => {
  const token = localStorage.getItem("token");
  const [rTextButton, setRTextButton] = useState(
    token && token ? "Logout" : "Login"
  );

  return (
    <div>
      <GlobalStateContext.Provider value={{ rTextButton, setRTextButton }}>
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};
export default GlobalState;

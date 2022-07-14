import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToLoginPage } from "../Routes/Coordinator";

export const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => goToHome(navigate)}>HOME</button>
      <button onClick={() => goToLoginPage(navigate)}>Login</button>
      <h3>Eu sou o Header</h3>
    </div>
  );
};

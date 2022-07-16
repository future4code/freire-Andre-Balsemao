import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome, goToLoginPage } from "../Routes/Coordinator";
import { Header, HomeButton,  } from "../Style/StyledHeader";


export const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <Header>
    <div>
      <HomeButton>
      <button onClick={() => goToHome(navigate)}>HOME</button>
      </HomeButton>
      <button onClick={() => goToLoginPage(navigate)}>Login</button>
      <h3>Eu sou o Header</h3>
    </div>
    </Header>
  );
};

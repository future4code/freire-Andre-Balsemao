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
      </HomeButton>
      <div className="botoes">
      <button className="home" onClick={() => goToHome(navigate)}>HOME</button>
      <button className="login" onClick={() => goToLoginPage(navigate)}>Login</button>
      </div>
      <div className="LabexHeader"><h3>LabeX</h3></div>
    </div>
    </Header>
  );
};

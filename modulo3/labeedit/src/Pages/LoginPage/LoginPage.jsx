import React from "react";
import {
  LogoImage,
  ScreenContainer,
  SignUpButtonContainer,
} from "./styled";
import logo from "../../Images/logo.png";
import {  Button } from "@mui/material";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../Routes/Coordinator";
import  useUnProtectedPage from '../../Hooks/useUnProtectedPage'

const LoginPage = () => {
    const navigate = useNavigate()
    useUnProtectedPage()  
    
    return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm/>
      <SignUpButtonContainer>
        <Button
        onClick={()=>goToSignUp(navigate)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
        >
          Crie uma conta
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;

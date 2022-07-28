import React from "react";
import {ScreenContainer} from "./styled";
import logo from "../../Images/logo.png";
import SignUpForm from "./SignUpForm";
import { LogoImage } from "../LoginPage/styled";
import useUnProtectedPage from '../../Hooks/useUnProtectedPage'


const SignUpPage = () => {
  useUnProtectedPage()  

    return (
    <ScreenContainer>
        <LogoImage src={logo}/>
      <SignUpForm/>
    </ScreenContainer>
  );
};

export default SignUpPage;

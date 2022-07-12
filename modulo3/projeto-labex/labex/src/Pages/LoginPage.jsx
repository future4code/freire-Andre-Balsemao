import React from "react";
import {useNavigate} from "react-router-dom";
import { goBack, goToAdminHomePage } from "../Routes/Coordinator";

export const LoginPage = () => {
    const navigate = useNavigate()

    
  return (
    <>
      <div>Login Page</div>
      <div>
        <input 
        type="text"
        placeholder="Email"
        >
        </input>
        <input
        type="password"
        placeholder="senha">
        </input>
      </div>
      <div>
        <button onClick={()=>goBack(navigate)}>Voltar</button>
        <button onClick={()=>goToAdminHomePage(navigate)}>Entrar</button>
      </div>
      
    </>
  );
};

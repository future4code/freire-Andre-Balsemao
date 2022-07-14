import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack, goToAdminHomePage } from "../Routes/Coordinator";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    console.log(email, password)

    const body = {
      email: email,
      password: password,
    }
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre/login",
        body
      )
      .then((resp) => {
        console.log("Deu certo: ", resp.data);
        localStorage.setItem('token', resp.data.token)
        navigate('/admin/trips/list')
      })
      .catch((error) => {
        console.log("Deu errado!!", error.response);
      });
  };

  useEffect (()=>{
    const token = localStorage.getItem('token')
    if(token) {
      navigate('/admin/trips/list')
    }
  }, [])  

  return (
    <>
      <div>Login Page</div>
      <div>
        <input type="text" placeholder="Email" value={email} onChange={onChangeEmail}></input>
        <input type="password" placeholder="senha" value={password} onChange={onChangePassword}></input>
      </div>
      <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={onSubmitLogin}>Entrar</button>
      </div>
    </>
  );
};

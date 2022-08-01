import React, { useState } from "react";
import { InputsContainer } from "./styled";
import { TextField, Button, CircularProgress } from "@mui/material";
import useForm from "../../Hooks/useForm";
import { login } from "../../Services/user";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {form, onChange, cleanFields} = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitLogin = (event) => {
    event.preventDefault();
    login(form, navigate, setIsLoading)
    cleanFields()
  };


  return (
    <InputsContainer>
      <form onSubmit={onSubmitLogin}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          type="password"
          label="Senha"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
      </form>
      <Button
        onClick={onSubmitLogin}
        type={"submit"}
        fullWidth
        variant={"contained"}
        color={"primary"}
        margin={"normal"}
      >
        {isLoading? <CircularProgress color={"inherit"} size={"24px"}/> : <>Login</> }
      </Button>
    </InputsContainer>
  );
};

export default LoginForm;

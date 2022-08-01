import React from "react";
import { InputsContainer } from "./styled";
import { TextField, Button, CircularProgress } from "@mui/material";
import useForm from "../../Hooks/useForm";
import { signUp } from "../../Services/user";
import { useNavigate} from "react-router-dom";
import { useState } from "react";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const { form, onChange, cleanFields } = useForm({
    username: "",
    email: "",
    password: ""
  });
  

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, navigate, setIsLoading);
    cleanFields();
  };
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"username"}
          value={form.username}
          onChange={onChange}
          type="name"
          label="Nome"
          variant="outlined"
          fullWidth
          margin={"normal"}
          required
        />
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
        onClick={onSubmitForm}
        type={"submit"}
        fullWidth
        variant={"contained"}
        color={"primary"}
        margin={"normal"}
      >
       {isLoading? <CircularProgress color={"inherit"} size={"24px"}/> : <>Cadastrar</> }
      </Button>
    </InputsContainer>
  );
};

export default SignUpForm;

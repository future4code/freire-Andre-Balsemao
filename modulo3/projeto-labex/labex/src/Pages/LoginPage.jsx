import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../Hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const onSubmitLogin = (event) => {
    event.preventDefault();
    console.log(form);
    cleanFields();

    const body = {
      email: form.email,
      password: form.password
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre/login",
        body
      )
      .then((resp) => {
        console.log("Deu certo: ", resp.data);
        localStorage.setItem("token", resp.data.token);
        navigate("/admin/trips/list");
      })
      .catch((error) => {
        console.log("Deu errado!!", error.response);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/trips/list");
    }
  }, [navigate]);

  return (
    <>
      <div className="Labex">LabeX</div>
      <form onSubmit={onSubmitLogin}>
        <div>
          <input
            name={"email"}
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          ></input>
          <input
            name={"password"}
            type="password"
            placeholder="senha"
            value={form.password}
            onChange={onChange}
            required
          ></input>
        </div>
        <div>
          <button onClick={onSubmitLogin}>Entrar</button>
        </div>
      </form>
    </>
  );
};

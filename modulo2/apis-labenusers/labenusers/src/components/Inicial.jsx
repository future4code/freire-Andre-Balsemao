import React from "react";
import axios from "axios";


export default class Inicial extends React.Component {
  state = {
    nome: "",
    email: ""
  }

  onChangeInputNome = (event) => {
    this.setState({ nome: event.target.value });
  }

  onChangeInputEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  criaListaDeUsuarios = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
      const body = {
      name: this.state.nome,
      email: this.state.email
    }

  axios.post( url,body,
      {
        headers: {
          Authorization: "andre-balsemao-freire",
        },
      }
    )
      .then((resp) => {
       this.setState({ nome: "", email: ""});
        alert("Usuario(a) criado(a) com sucesso!");

      })
      .catch((erro) => {
        console.log(erro.response.data);
        alert("Não foi possivel criar o usuario!")
      })
  };

  render() {
    return (
      <div className="App">
        <h1>Tela Inicial:</h1>

        <input
          className="nomeDoUsuario"
          type="text"
          placeholder="Nome"
          value={this.state.nome}
          onChange={this.onChangeInputNome}
        />

        <input
          className="emailDoUsuario"
          type="email"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.onChangeInputEmail}
        />

        <button className="addUsuario" onClick={this.criaListaDeUsuarios}>
          Adicionar Usuário
        </button>
      </div>
    );
  }
}
import logo from './logo.svg';
import './App.css';
import React from "react";

export default class App extends React.Component {
  state = {
    usuarios: [],
    inputNome: "",
    inputMensagem: ""
  };

  pegarValorInputNome = (event) =>
    this.setState({ inputNome: event.target.value });
  pegarValorinputMensagem = (event) =>
    this.setState({ inputMensagem: event.target.value });

  addPessoa = () => {
    const usuario = {
      nome: this.state.inputNome,
      Mensagem: this.state.inputMensagem
    };
    const novaListaDeUsuarios = [...this.state.usuarios, usuario];
    this.setState({ usuarios: novaListaDeUsuarios });
    console.log(this.state.usuarios);
  };


  render() {
    const mapearLista = this.state.usuarios.map((usuario) => {
      return (
        <div className="container">
          <p>{usuario.nome}</p>
          <p>{usuario.Mensagem}</p>
          
        </div>
      );
    });
    return (
      <div className="App">
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          value={this.state.inputNome}
          onChange={this.pegarValorInputNome}
        />

        <br />

        <label htmlFor="Mensagem">Mensagem: </label>
        <input
          type="text"
          id="Mensagem"
          value={this.state.inputMensagem}
          onChange={this.pegarValorinputMensagem}
        />

        <button onClick={this.addPessoa}>Adicionar</button>
        {mapearLista}
      </div>
    );
  }
}
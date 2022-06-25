import React from "react";
import axios from "axios";

export default class TelaCriaPlaylist extends React.Component{
  state = {
    nome: "",
    
  }

  onChangeInputNome = (event) => {
    this.setState({ nome: event.target.value });
  }


  criaPlaylist = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      const body = {
      name: this.state.nome,
      
    }

  axios.post( url,body,
      {
        headers: {
          Authorization: "andre-balsemao-freire",
        },
      }
    )
      .then((resp) => {
       this.setState({ nome: ""});
        alert("Playlist criada com sucesso!");

      })
      .catch((erro) => {
        console.log(erro.response.data);
        alert("Não foi possivel criar a sua playlist!")
      })
  };

  render() {
    return (
      <div className="App">
        <h1>Crie sua playlist:</h1>

        <input
          className="nomeDoUsuario"
          type="text"
          placeholder="Nome"
          value={this.state.nome}
          onChange={this.onChangeInputNome}
        />
        <button className="addPlaylist" onClick={this.criaPlaylist}>
          Adicionar Playlist
        </button>
      </div>
    );
  }
}
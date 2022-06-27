import React from "react";
import axios from "axios";
import styled from "styled-components";
import DetalhesPlaylists from "../components/DetalhesPlaylist";

const CardPlaylist = styled.div`
  border: 2px solid black;
  padding: 1px;
  margin: 5px;
  width: 70vw;
  justify-content: space-between;
  display: flex;
`;

const Background = styled.div`
  background-color: #050505e0;
  color: white;
  width: 100vw;
  height: 100vh;
  
`;

export default class Playlist extends React.Component {
  state = {
    playlistsCadastradas: [],
    nome: "",
    musicas: "",
    artista: "",
    link: "",
    
  };

  componentDidMount = () => {
    this.pegaPlaylists();
  };

  pegaPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "andre-balsemao-freire",
          },
        }
      )
      .then((response) => {
        this.setState({ playlistsCadastradas: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.response.data.list);
      });
  };

  
  // ------------------------------------------------------------------------------
  deletaPlaylist = (event) => {
    if (window.confirm("Deseja realmente apagar essa Playlist?") === true) {
      const id = event.target.value;
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers: {
              Authorization: "andre-balsemao-freire",
            },
          }
        )
        .then(() => {
          this.pegaPlaylists();
        })
        .catch((erro) => {
          console.log(erro.response.data);
        });
    }
  };
// ------------------------------------------------------------------------
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
        this.setState({ nome: ""});
        alert("Essa playlist já existe!")
      })
  };

  componentDidUpdate = () => {
    this.pegaPlaylists();
  };

  render() {
    const lista = this.state.playlistsCadastradas.map((playlist) => {
      return (
        <CardPlaylist key={playlist.id}>
          {playlist.name}
          <button value={playlist.id} onClick={this.deletaPlaylist}>
            {""}
            X
          </button>
          <button className="detalhes" onClick={this.props.DetalhesPlaylists}>Detalhes</button>
        </CardPlaylist>
      );
    });
    return (
      <Background>
        <button onClick={this.props.onClickLogout}>Voltar</button>
        <br></br>
        <br></br>
        <br></br>
        <input
          className="nomeDoUsuario"
          type="text"
          placeholder="Nome"
          value={this.state.nome}
          onChange={this.onChangeInputNome}
        />
        <button className="addPlaylist" onClick={this.criaPlaylist}>
          Adicionar
        </button>
        <br />
        <br></br>
        {lista}
      </Background>
    );
  }
}

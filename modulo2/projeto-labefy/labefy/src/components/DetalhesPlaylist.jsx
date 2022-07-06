import React from "react";
import styled from "styled-components";
import axios from "axios";


export default class DetalhesPlaylist extends React.Component {
  state = {
    detalhesPlaylists: [],
    nome: "",
    musicas: "",
    artista: "",
    link: "",
  };

  componentDidMount = () => {
    this.consultaPlaylist();
  };

  consultaPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks";
    const body = {
      name: this.state.nome,
      artist: this.state.artista,
      tracks: this.state.musicas,
    };
    axios
      .get(url, body, {
        headers: {
          Authorization: "andre-balsemao-freire",
        },
      })
      .then((response) => {
        this.setState({ detalhesPlaylists: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.response.data.list);
      });
  };

  render() {
    {
      const detalhes = this.state.playlistsCadastradas.map((playlist) => {
        return (
          <div key={playlist.id}>
            {playlist.name}, {playlist.artist}, {playlist.tracks}
            <button value={playlist.id} onClick={this.deletaPlaylist}>
              {""}
              X
            </button>
            <button className="detalhes" onClick={this.consultaPlaylist}>
              {" "}
              Detalhes
            </button>
          </div>
        );
      });
      return (
        <div>
          {detalhes}
        </div>
      );
    }
  }
}

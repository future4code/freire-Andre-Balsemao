import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardPlaylist = styled.div`
  border: 2px solid blue;
  padding: 10px;
  margin: 10px;
  width: 50vw;
  justify-content: space-between;
  display: flex;
`;

export default class TelaConsultaPlaylist extends React.Component {
  state = {
    playlistsCadastradas: [],
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
        this.setState({ playlistsCadastradas: response.data });
     
      })
      .catch((error) => {
        console.log(error.response.data.list);
      });
  };
  //------------------------------------------------------------------------------
  deletaPlaylist = (event) => {
    if (window.confirm("Deseja realmente apagar?") === true) {
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
          alert("Playlist não deletada");
        });
    }
  };

  render() {
    const lista = this.state.playlistsCadastradas.map((playlist) => {
      return (
        <CardPlaylist key={playlist.playlistId}>
          {playlist.name}
          <button value={playlist.playlistId} onClick={this.deletaPlaylist}>
            {" "}
            X
          </button>
        </CardPlaylist>
      );
    });
    return (
      <div>
        <h2>Suas Playlists</h2>
        {lista}
      </div>
    );
  }
}

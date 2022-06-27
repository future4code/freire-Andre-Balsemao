import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #050505e0;
  color: white;
  width: 100vw;
  height: 100vh;
  margin-left: 5px;
`;
export default class Login extends React.Component {
  render() {
    return (
      <Background>
        <h1>LABEFY</h1>
        <h2>Seja bemvindo</h2>
        <button onClick={this.props.onClickLogin}>Playlists</button>
      </Background>
    );
  }
}

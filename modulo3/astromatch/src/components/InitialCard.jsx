import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Coracao from "./Images/coracao.png";
import Ignorar from "./Images/Ignorar.png";
import Lista from "./Images/Lista.png";

const Container = styled.main`
  width: 50vw;
  height: 90vh;
  margin-top: 2vh;
  position: absolute;
  background-color: #ffffffbd;
  border-radius: 3%;
  flex-direction: column;
  
  .divListaMatch{
    display: flex;
    justify-content: flex-end;
    margin-right: 2vw;
  }
  .botaoListaMatch {
    
    background: none;
    border: none;
    cursor: pointer;
  }
  .imgListaMatchs {
    width: 30px;
    height: 30px;
  }
`;
const Botoes = styled.div`
  margin-top: 15vh;
  display: flex;
  justify-content: space-between;
  margin-left: 70px;

  .botaoCoracao {
    background: none;
    border: none;
    cursor: pointer;
  }
  .BotaoImagemCoracao {
    width: 50px;
    height: 50px;
  }
  .botaoIgnorar {
    background: none;
    border: none;
    cursor: pointer;
  }
  .botaoImagemIgnorar {
    width: 50px;
    height: 50px;
  }
`;

const Header = styled.header`
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;

  .titulo01 {
    color: #00dd88de;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
  }

  .titulo02 {
    color: #4d0364bd;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }

`;
const Main = styled.div`
  width: 40vw;
  height: 10vh;
  text-align: center;
  position: absolute;

  .divImage {
    width: 50vw;
    height: 50vh;
  }

  .imgPessoa {
    height: 100%;
    width: 95%;
    object-fit: scale-down;
  }

  .divNomeIdadeBio {
    position: absolute;
    width: 46vw;
    border: 1px solid black;
    border-radius: 5px;
    text-align: left;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
    flex-direction: column;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 0.5vh;
    
  }
  .divNomeIdade {
    margin-left: 2vw;
    font-size: 20px;
    font-weight: bold;
  }
  .divBio {
    margin-left: 4vw;
    font-size: 16px;
  }
`;

function InitialCard(props) {
  const [profile, setProfile] = useState([]);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/AndreB/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const givMatch = (choice) => {
    const body = {
      id: profile.id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/AndreB/choose-person",
        body
      )
      .then((response) => {
        getProfile();
        if (response.data.isMatch === true) {
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Container>
      <>
        <div className="divListaMatch">
          <button
          className="botaoListaMatch"
            onClick={() => {
              props.switchTela("Tela");
            }}
          >
            <img
              className="imgListaMatchs"
              src={Lista}
              alt="Lista Match's"
            ></img>
          </button>
        </div>
        <Header>
          <div>
            <p className="titulo01">astro</p>
          </div>
          <div>
            <p className="titulo02">Match</p>
          </div>
        </Header>
        <Main>
          <div className="divImage">
            <img className="imgPessoa" src={profile.photo} alt={profile.name} />
          </div>

          <div className="divNomeIdadeBio">
            <div className="divNomeIdade">
              {profile.name}, {profile.age} anos
            </div>
            <div className="divBio">{profile.bio}</div>
          </div>

          <Botoes>
            <button
              className="botaoIgnorar"
              onClick={() => {
                getProfile();
              }}
            >
              <img
                className="botaoImagemIgnorar"
                src={Ignorar}
                alt="Ignorar"
              ></img>
            </button>

            <button
              className="botaoCoracao"
              onClick={() => {
                givMatch();
              }}
            >
              <img
                className="BotaoImagemCoracao"
                src={Coracao}
                alt="Dar Match"
              ></img>
            </button>
          </Botoes>
        </Main>
      </>
    </Container>
  );
}

export default InitialCard;

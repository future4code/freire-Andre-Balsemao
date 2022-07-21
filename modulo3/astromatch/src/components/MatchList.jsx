import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Voltar from "./Images/Voltar.png"
import Lixeira from "./Images/Lixeira.png"

const Container = styled.main`
  display: flex;
  width: 50vw;
  height: 90vh;
  margin-top: 2vh;
  position: absolute;
  background-color: #ffffffbd;
  border-radius: 3%;
  flex-direction: column;

  .divBotaoVoltar{
    display: flex;
    justify-content: flex-end;
    margin-right: 2vw;
    margin-top: 1vh;

  }
  .ImgBotaoVoltar{
    width: 30px;
    height: 30px;
  }

  .botaoVoltar{
  background: none;
  border: none;
  cursor: pointer;
  }
  .divListaMatches {
    display: flex;
    align-items: center;
    margin-left: 2vw;
    font-size: 100%;
    margin-top: 1vh;
    
    
  }

  .ImgMatches {
    width: 30px;
    height: 30px;
    border-radius: 60%;
    object-fit: cover;
  }

    .Matchs {
    display: flex;
    margin-top: 2vh;
    flex-direction: column;
  }
  
`;
const DivBotaoLimpar = styled.div`
  display: flex;
  margin-left: 38vw;
  height: 98vh;
  flex-direction: column-reverse;
 
  .BotaoLimpar{
  background: none;
  border: none;
  cursor: pointer;
}
  .ImgBotaoLimpar{
    width: 30px;
    height: 30px;
    
  }
`;

export const MatchList = (props) => {
  const [matchList, setMatchList] = useState([]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/AndreB/matches"
      )
      .then((response) => {
        setMatchList(response.data.matches);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearMatches = () => {
    if (window.confirm("Deseja apagar?")) {
      axios
        .put(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/AndreB/clear"
        )
        .then(() => {
          getMatches();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getMatches();
  }, []);
  const listaMatches = matchList.map((item) => {
    return (
      <div className="divListaMatches" key={item.id}>
        <div className="DivImagemMatchsList">
          <img className="ImgMatches" src={item.photo} alt={item.photo_alt} />
        </div>
        <div className="DivNomeMatch">{item.name}</div>
      </div>
    );
  });
  return (
    <>
      <Container>
        <div className="divBotaoVoltar">
          <button
            className="botaoVoltar"
            onClick={() => {
              props.switchTela("Inicio");
            }}
          > <img 
          className="ImgBotaoVoltar"
          src={Voltar}
          alt="Voltar a tela inicial"
          ></img>          </button>
        </div>
        <div className="Matchs">{listaMatches}</div>
      </Container>
      <DivBotaoLimpar>
      <div>
        <button 
        className="BotaoLimpar"
        onClick={clearMatches}>
          <img 
          className="ImgBotaoLimpar"
          src={Lixeira}
          alt="Limpar Matches"
          ></img>

          </button>
      </div>
      </DivBotaoLimpar>
    </>
  );
};

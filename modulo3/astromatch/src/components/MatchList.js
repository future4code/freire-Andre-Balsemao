import React, { useState, useEffect } from "react";
import axios from "axios";

export const MatchList = (props) => {
  const [matchList, setMatchList] = useState([]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/AndreB/matches"
      )
      .then((response) => {
        setMatchList(response.data.matches);
        console.log(response.data.matches);
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
      <div key={item.id}>
        <img src={item.photo} alt={item.photo_alt} />
        <p>{item.name}</p>
      </div>
    );
  });
  return (
    <div>
      {listaMatches}
      <button onClick={clearMatches}>Limpar</button>
      <button onClick={()=>{props.switchTela("Inicio")}}>Voltar</button>
    </div>
  );
};

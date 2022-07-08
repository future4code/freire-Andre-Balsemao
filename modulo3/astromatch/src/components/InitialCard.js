import React, { useState, useEffect } from "react";
import axios from "axios";

function InitialCard() {
  const [profile, setProfile] = useState([]);
  const [click, setClick] = useState(undefined);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Andre/person"
      )
      .then((response) => {
        console.log(response.data.profile);
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="App">
      {profile.name}
      <img src={profile.photo} alt={profile.name} />
      <button>OK</button>
      <button>NÃO</button>
      <button>Lista match's</button>
      <button>Limpar</button>
    </div>
  );
}

export default InitialCard;

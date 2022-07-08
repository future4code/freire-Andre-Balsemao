import React, { useState, useEffect } from "react";
import axios from "axios";

function InitialCard(props) {
  const [profile, setProfile] = useState([]);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/AndreB/person"
      )
      .then((response) => {
        console.log(response.data.profile);
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
        console.log(response.data.isMatch);
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
      <p>
        {" "}
        {profile.name} {profile.age}
      </p>
      <img src={profile.photo} alt={profile.name} width="350px" />
      <p>{}</p>
      <p>{profile.bio}</p>
      <button
        onClick={() => {
          givMatch();
        }}
      >
        OK
      </button>
      <button
        onClick={() => {
          getProfile();
        }}
      >
        NÃO
      </button>
      <button onClick={()=>{props.switchTela("Tela")}}>Lista match's</button>
    </div>
  );
}

export default InitialCard;

import React from "react";
import axios from "axios";
import { HeaderComponent } from "../Components/headerComponent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../Hooks/ProtectedPage';

export const TripDetailsPage = () => {
    useProtectedPage()
    
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre/trip/id",
        {
          headers: {
            auth: token
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  },[]);

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <p>Trip Details Page</p>
      <p>Astro Turistas Interessados</p>
    </div>
  );
};

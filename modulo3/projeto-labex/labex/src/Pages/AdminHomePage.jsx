import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  goToCreateTripPage,
  goToTripDetailsPage,
  } from "../Routes/Coordinator";
import { HeaderComponent } from "../Components/headerComponent";
import { useProtectedPage } from "../Hooks/ProtectedPage";
import axios from "axios";
import { useGetTrips } from "../Hooks/getTrips";


export const AdminHomePage = () => {
  const navigate = useNavigate();
  useProtectedPage();

  const tripsList = useGetTrips()

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>Admin Home Page</div>
      {tripsList.map((trip) => {
        return (
          <div key={trip.id}>
            <p>{trip.name}</p>
          </div>
        );
      })}
      <div>
        <button onClick={() => goToCreateTripPage(navigate)}>
          Criar Viagem
        </button>
        {/* <button onClick={() => goBack(navigate)}>Voltar</button> */}
        <button onClick={() => goToTripDetailsPage(navigate)}>
          Ver Interessados
        </button>
      </div>
    </>
  );
}



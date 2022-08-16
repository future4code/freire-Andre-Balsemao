import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  goToCreateTripPage,
  goToTripDetailsPage,
  goBack
  } from "../Routes/Coordinator";
import { HeaderComponent } from "../Components/headerComponent";
import { useProtectedPage } from "../Hooks/ProtectedPage";
import axios from "axios";
import { useGetTrips } from "../Hooks/useGetTrips";
import { useDeleteTrip } from "../Hooks/useDeleteTrip";



export const AdminHomePage = () => {
  const navigate = useNavigate();
  useProtectedPage();
  const tripsList = useGetTrips()
  const deletetedTrips = useDeleteTrip 


  return (
    <>
      <HeaderComponent></HeaderComponent>
      <h2>Admin Home Page</h2>
      {tripsList.map((trip) => {
        return (
          <div key={trip.id}>
            <p>{trip.name}</p>
            <button onClick={deletetedTrips}>Deletar</button>
          </div>
        );
      })}
      <div>
        <button onClick={() => goToCreateTripPage(navigate)}>
          Criar Viagem
        </button>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToTripDetailsPage(navigate)}>
          Ver Interessados
        </button>
      </div>
    </>
  );
}



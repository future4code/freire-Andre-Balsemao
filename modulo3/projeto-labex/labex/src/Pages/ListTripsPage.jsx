import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HeaderComponent } from "../Components/headerComponent";
import { useGetTrips } from "../Hooks/useGetTrips";
import { useGetTripDetail } from "../Hooks/useGetTripDetail";

export const ListTripsPage = () => {
  const navigate = useNavigate();
  const tripsList = useGetTrips();

  const goToApplicationFormPage = () => {
    navigate("/applicationFormPage");
  };

  return (
    <>
      <div>
        <HeaderComponent></HeaderComponent>
        <h2>List Trips Page</h2>
      </div>
      {tripsList.map((trip) => {
        return (
          <div key={trip.id}>
            <p>{trip.name}</p>
          </div>
        );
      })}
      <div>
        <button onClick={goToApplicationFormPage}>Aventure-se</button>
      </div>
    </>
  );
};

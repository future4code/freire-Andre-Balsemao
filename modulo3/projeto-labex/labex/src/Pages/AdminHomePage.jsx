import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  goToCreatTripPage,
  goToTripDetailsPage,
  goBack,
} from "../Routes/Coordinator";
import { HeaderComponent } from "../Components/headerComponent";
import { useProtectedPage } from "../Hooks/ProtectedPage";


export const AdminHomePage = () => {
  const navigate = useNavigate();
  useProtectedPage();
  const { tripsList, useTripsList } = useState([]);

  // const getTrips = () => {
  //   axios
  //     .get(
  //       "https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre/trips"
  //     )
  //     .then((res) => {
  //       useTripsList(res.data.trips);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   getTrips();
  // }, []);

  return (
    <>
      <HeaderComponent></HeaderComponent>
      {/* <div>Admin Home Page</div>
      {tripsList.map((trip) => {
        return (
          <div key={trip.id}>
            <p>{trip.name}</p>
          </div>
        );
      })} */}
      <div>
        <button onClick={() => goToCreatTripPage(navigate)}>
          Criar Viagem
        </button>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToTripDetailsPage(navigate)}>
          Ver Interessados
        </button>
      </div>
    </>
  );
};

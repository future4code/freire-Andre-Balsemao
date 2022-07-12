import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCreatTripPage, goToTripDetailsPage, goBack } from "../Routes/Coordinator";

export const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Admin Home Page</div>
      <div>
        <button onClick={() => goToCreatTripPage(navigate)}>
          Criar Viagem
        </button>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToTripDetailsPage(navigate)}>Ver Interessados</button>
      </div>
    </>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripPage, goToLoginPage } from "../Routes/Coordinator";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="Labex">
        <h3>LabeX</h3>
      </div>
      <div className="buttons">
        <button className="Astro" onClick={() => goToListTripPage(navigate)}>
          {" "}
          Seja um AstroTurista{" "}
        </button>
        <button className="Colabora" onClick={() => goToLoginPage(navigate)}> Área dos Colaboradores </button>
      </div>
    </>
  );
};

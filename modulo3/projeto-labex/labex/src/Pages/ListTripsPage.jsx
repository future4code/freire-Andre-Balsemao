import React from "react";
import {useNavigate} from 'react-router-dom';
import { HeaderComponent } from "../Components/headerComponent";

export const ListTripsPage = () => {
   const navigate = useNavigate()

   const goToApplicationFormPage = () => {
    navigate ('/applicationFormPage')
   }

    return(

    <>
        <div>
        <HeaderComponent></HeaderComponent>
            List Trips Page
        </div>
        <div>
            <button onClick={goToApplicationFormPage}>Aventure-se</button>
        </div>
    </>
    )
}
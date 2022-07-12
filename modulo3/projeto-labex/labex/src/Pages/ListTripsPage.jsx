import React from "react";
import {useNavigate} from 'react-router-dom';

export const ListTripsPage = () => {
   const navigate = useNavigate()

   const goToApplicationFormPage = () => {
    navigate ('/applicationFormPage')
   }

    return(

    <>
        <div>
            List Trips Page
        </div>
        <div>
            <button onClick={goToApplicationFormPage}>Aventure-se</button>
        </div>
    </>
    )
}
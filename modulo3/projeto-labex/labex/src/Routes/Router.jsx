import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "../Pages/AdminHomePage";
import { ApplicationFormPage } from "../Pages/ApplicationFormPage";
import { CreateTripPage } from "../Pages/CreateTripPage";
import { ErrorPage } from "../Pages/ErrorPage";
import { HomePage } from "../Pages/HomePage"
import { ListTripsPage } from "../Pages/ListTripsPage";
import { LoginPage } from "../Pages/LoginPage";
import { TripDetailsPage } from "../Pages/TripDetailsPage";


export const Router = () =>{

    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="adminHomePage" element={<AdminHomePage/>} />
          <Route path="applicationFormPage" element={<ApplicationFormPage/>} />
          <Route path="creatTripPage" element={<CreateTripPage/>} />
          <Route path="homePage" element={<HomePage/>} />
          <Route path="listTripsPage" element={<ListTripsPage/>} />
          <Route path="loginPage" element={<LoginPage/>} />
          <Route path="tripDetailsPage" element={<TripDetailsPage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>

    )
}
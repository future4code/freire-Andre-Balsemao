import React from "react";
import axios from "axios";
import { HeaderComponent } from "../Components/headerComponent";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../Hooks/ProtectedPage";
import { url, headers } from "../Constants/url";
import { useGetTrips } from "../Hooks/useGetTrips";
import  useForm  from '../Hooks/useForm'

export const TripDetailsPage = () => {
  useProtectedPage();
  const { form, onChange, cleanFields } = useForm({
    id: "",
  });
  const aprove = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
      .post(`${url}/trips/${form.id}/apply`, body)
      .then((res) => {

        console.log("deu certo");
      })
      .catch((error) => {
        console.log(error);
      });

    cleanFields();
  };
const tripsList = useGetTrips();
console.log(form.id)

return (
    <div>
      <HeaderComponent></HeaderComponent>
      <form onSubmit={aprove}>
        <select name={"id"} value={form.id} onChange={onChange} required>
            {tripsList.map((trip) => {
              return (
                <option key={trip.id} value={trip.id}>
                  <p>{trip.name}</p>
                </option>
              );
            })}
          </select>
      </form>
            <div>
            {tripsList.map((trip) => {
              return (
                <div key={trip.id} value={trip.id}>
                  <p>{trip.candidates}</p>
                </div>)})}
            </div>
      

   
      <p>Trip Details Page</p>
      <p>Astro Turistas Interessados</p>
    </div>
  );
}

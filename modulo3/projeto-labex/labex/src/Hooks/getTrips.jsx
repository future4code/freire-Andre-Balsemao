import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../Constants/url";



export const useGetTrips=() => { 
const [ tripsList, setTripsList ] = useState([]);

  const getTrips = () => {
    axios
      .get(
        `${url}/trips`
      )
      .then((res) => {

        setTripsList(res.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTrips();
  }, []);
  return tripsList
}

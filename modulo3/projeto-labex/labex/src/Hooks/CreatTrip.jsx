import axios from "axios";
import { useEffect, useState } from "react";
import { url, headers } from "../Constants/url";



export const useCreatTrips=() => { 
const [ creatTrip, setcreatTrip ] = useState([]);

  const creatTrips = () => {
    axios
      .post(
        `${url}/trips`,
        headers
      )
      .then((res) => {

        setcreatTrip(res.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    creatTrips();
  }, []);
  return creatTrip
}
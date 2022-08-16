import axios from "axios";
import { useEffect, useState } from "react";
import { url, headers } from "../Constants/url";

export const useGetTripDetail = (id) => {
  const [tripDetail, setTripDetail] = useState([]);

  const getTripDetail = () => {
    axios
      .get(`${url}/trip/${id}`, headers)

      .then((res) => setTripDetail(res.data.trip.candidates))
      .catch((err) => alert(err.response.data.message));
  };

  useEffect(() => {
    getTripDetail();
  }, []);

  return tripDetail;
};

import axios from "axios";
import { BASE_URL } from "../Constants/urls";

export const post = (body, setIsLoading) => {
  setIsLoading(true)
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res)
      setIsLoading(false)
      alert(res.data);
    })
    .catch((err) => {
      setIsLoading(false)
      alert(err.response.data);
    });
};

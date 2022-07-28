import axios from 'axios'
import { BASE_URL } from '../Constants/urls'
import { goToFeed } from '../Routes/Coordinator'




export const login = (body, navigate)  =>{
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      goToFeed(navigate)
    })
    .catch((err) => {
      alert(err.response.data.message)
    })


}

export const signUp = (body, navigate)  =>{
  axios.post(`${BASE_URL}/users/signup`, body)
  .then((res) => {
    localStorage.setItem('token', res.data.token)
    goToFeed(navigate)
  })
  .catch((err) => {
    alert(err.response.data.message)
  })


}

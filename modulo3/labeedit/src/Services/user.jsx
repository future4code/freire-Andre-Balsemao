import axios from 'axios'
import { BASE_URL } from '../Constants/urls'
import { goToFeed } from '../Routes/Coordinator'
// import { useContext } from 'react'

//, setRTextButton


export const login = (body, navigate, setIsLoading)  =>{
  setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      setIsLoading(false)
      goToFeed(navigate)
    })
    .catch((err) => {
      setIsLoading(false)
      alert(err.response.data.message)
    })


}

export const signUp = (body, navigate, setIsLoading)  =>{
  setIsLoading(true)
  axios.post(`${BASE_URL}/users/signup`, body)
  .then((res) => {
    localStorage.setItem('token', res.data.token)
    setIsLoading(false)
    goToFeed(navigate)
  })
  .catch((err) => {
    setIsLoading(false)
    alert(err.response.data.message)
  })


}

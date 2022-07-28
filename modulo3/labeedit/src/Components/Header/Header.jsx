import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { StyledToolbar } from "./styled";
import Button from "@mui/material/Button";
import { goToHome, goToLogin } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate ()
    const token = localStorage.getItem("token")
    const [rTextButton, setRTextButton] = useState(token && token ? "Logout" : "Login")

    const logout = () =>{
      localStorage.removeItem('token')
    }
    const rButtonAction = () =>{
      if (token){
        logout()
        setRTextButton('Login')
        goToLogin(navigate)
      } 
      else{
        goToLogin(navigate)
      }
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToHome(navigate)} color="inherit">LabeEdit</Button>
          <Button onClick={rButtonAction} color="inherit">{rTextButton}</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

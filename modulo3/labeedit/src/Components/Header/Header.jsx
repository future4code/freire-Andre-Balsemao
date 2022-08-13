import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { StyledToolbar } from "./styled";
import Button from "@mui/material/Button";
import { goToHome, goToLogin } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate ()
    const token = localStorage.getItem("token")
    
    const logout = () =>{
      localStorage.removeItem('token')
    }
    const loginButtonAction = () =>{
      if (token){
        logout()
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
          <Button onClick={loginButtonAction} color="inherit">{token && token ? "Logout" : "Login"}</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

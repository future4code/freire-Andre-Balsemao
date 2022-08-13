import { createTheme } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import gray from '@mui/material/colors/grey';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
          
    },
    secondary: {
      main: green[500],
    },

    text: {
        primary: gray[500],
        secondary: gray[600],
    },
      
    
  },
});
export default theme
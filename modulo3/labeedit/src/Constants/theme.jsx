import { createTheme } from '@mui/material/styles';
import purple from '@mui/material/colors/purple';
import green from '@mui/material/colors/green';
import gray from '@mui/material/colors/grey';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },

    text: {
        primary: gray[500],
    }
  },
});
export default theme
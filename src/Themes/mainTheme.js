import { createTheme } from "@mui/material";

const myTheme = createTheme({
  palette: {
    primary: {
      light: '#347055',
      main: '#024D2B',
      dark:'#01351e'
    },
    secondary: {
      dark: '#b28900',
      main: '#ffc400',
      light: '#ffcf33'
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: '55rem',
          margin: '2rem',
        }
      }
    },
    MuiButton: {
    }
  }
});
  
export default myTheme;
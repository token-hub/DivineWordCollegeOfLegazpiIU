import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#5F5AEF',
        main: '#1D17CE',
        dark: '#2B333E'
      }
    },
    overrides: {
      MuiTypography: {
        h6: {
          fontSize: "1.25rem",
          [breakpoints.down("xs")]: {
            fontSize: "1rem"
          }
        },
        h4: {
          fontSize: "2.125rem",
          [breakpoints.down("xs")]: {
            fontSize: "1.3rem"
          }
        },
      }
    }
  });

export default theme
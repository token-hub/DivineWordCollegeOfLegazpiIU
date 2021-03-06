import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#5F5AEF',
        main: '#1D17CE',
        dark: '#2B333E'
      },
      secondary: {
        main: '#5F5AEF',
        dark: '#413E92'
      },
      sidebar: {
        main: '#414A76',
        dark: '#2B333E'
      }
    },
    overrides: {
      MuiListItemIcon:{
        root: {
          minWidth: '35px',
          color: 'white'
        }
      },
      MuiTypography: {
        h6: {
          fontSize: "1.25rem",
          [breakpoints.down("xs")]: {
            fontSize: "1rem"
          }
        },
        h5: {
          fontSize: "1.8rem",
          [breakpoints.down("xs")]: {
            fontSize: "1.2rem"
          }
        },
        h4: {
          fontSize: "2.125rem",
          [breakpoints.down("xs")]: {
            fontSize: "1.3rem"
          }
        },
        h3: {
          fontSize: "3rem",
          [breakpoints.down("xs")]: {
            fontSize: "1.4rem"
          }
        },
        subtitle1: {
          fontSize: "1rem",
        },
      }
    }
  });

export default theme
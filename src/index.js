import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Theme from './theme';
import {ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { HashRouter as Router, } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {SnackbarProvider} from 'notistack';
import {DashboardProvider} from './contexts';
import CssBaseline from '@material-ui/core/CssBaseline';
import CloseIcon from '@material-ui/icons/Close';

const notistackRef = React.createRef();
const onClickDismiss = key => () => { 
    notistackRef.current.closeSnackbar(key);
}

ReactDOM.render(
  // <Router basename='/dwc-legazpi.edu'>
  <Router >
    {/* <React.StrictMode> */}
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <SnackbarProvider 
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          ref={notistackRef}
          action={(key) => (
            <Button onClick={onClickDismiss(key)} style={{color: 'white', outline: 'none'}}>
              <CloseIcon  />
            </Button>
          )}
          >
          <DashboardProvider>
            <App />
          </DashboardProvider>
        </SnackbarProvider>
      </ThemeProvider>
    {/* </React.StrictMode>, */}
  </Router>,
  document.getElementById('root')
);

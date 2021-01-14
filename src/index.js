import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
// import { HashRouter as Router, } from 'react-router-dom';
import { BrowserRouter as Router, } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {DashboardProvider} from './contexts';

ReactDOM.render(
  // <Router basename='/dwc-legazpi.edu'>
  <Router >
    {/* <React.StrictMode> */}
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <DashboardProvider>
          <App />
        </DashboardProvider>
      </ThemeProvider>
    {/* </React.StrictMode>, */}
  </Router>,
  document.getElementById('root')
);

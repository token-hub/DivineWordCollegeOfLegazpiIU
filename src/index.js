import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  </Router>,
  document.getElementById('root')
);

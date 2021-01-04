import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Header from '../header/Header';
import Sidebar from '../sidebar.js/Index';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    backgroundColor: '#E3E3FE'
  },
  toolbar: {
    minHeight: '70px',
  },
  paper:{
    padding: '1.5rem 2rem',
    minHeight: '80vh',
    height: 'auto',
  },
  paper:{
    padding: '1.5rem 2rem',
    minHeight: '81vh',
    height: 'auto'
  },
}));

const DashboardLayout =  ({ children }) => {
  const {root ,content, toolbar, paper} = useStyles();
  
  return (
    <div className={root}>
      <Header />
      <Sidebar />
      <main className={content}>
        <Toolbar classes={{ regular: toolbar }} />
        <Paper variant='elevation' className={paper}>
            { children }
        </Paper>
      </main>
    </div>
  );
}

export default DashboardLayout;
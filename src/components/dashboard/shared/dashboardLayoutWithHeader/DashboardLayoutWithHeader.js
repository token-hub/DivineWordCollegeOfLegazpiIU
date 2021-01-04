import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Header from '../header/Header';
import Sidebar from '../sidebar.js/Index';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    backgroundColor: '#E3E3FE',
    minHeight: '100vh',
    height: 'auto'
  },
  toolbar: {
    minHeight: '70px',
  },
  paper:{
      padding: '1.5rem 2rem',
      minHeight: '82vh',
      height: 'auto'
      
  },
  divider: {
      margin: '1rem 0'
  },    
  title : {
    lineHeight: 1,
    flex: 1
  }
}));

const DashboardLayoutWithHeader = ({ header, link, linkTitle, children }) => {
  const {root, content, toolbar, paper, divider, title} = useStyles();
  
  return (
    <div className={root}>
      <Header />
      <Sidebar />
      <main className={content}>
        <Toolbar classes={{ regular: toolbar }} />
        <Paper variant='elevation' className={paper}>
            <Grid container direction='row' alignItems='flex-end'>
                <Typography variant='h5' className={title}> {header} </Typography>
                <Button component='a' href={link} variant='contained' color='secondary'>{linkTitle}</Button>
            </Grid>
            <Divider className={divider} />
            { children }
        </Paper>
      </main>
    </div>
  );
}

export default DashboardLayoutWithHeader;
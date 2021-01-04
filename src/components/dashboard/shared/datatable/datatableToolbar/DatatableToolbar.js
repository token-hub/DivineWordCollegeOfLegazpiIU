import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    title: {
      flex: '1 1 100%',
    },
  }));
  

const DatatableToolbar = ({ header }) => {

    const {root, title} = useStyles()

    return (
        <Toolbar
          className={root}
        >
          {
            header ? 
              <Typography className={title} variant="h6" id="tableTitle" component="div">
                { header }
              </Typography>
                : ''
          }
        
        </Toolbar>
      );
}

export default DatatableToolbar

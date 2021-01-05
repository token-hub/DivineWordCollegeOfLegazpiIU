import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    title: {
      flex: '1 1 100%',
    },
    icon: {
      "&:focus": {
        outline: 'none',
      }
    }
  }));
  

const DatatableToolbar = ({ header, numSelected }) => {

    const {root, title, icon} = useStyles()

    return (
        <Toolbar
          className={root}
        >
          {
            header ?
              numSelected > 0 ? 
                <Typography className={title} color="inherit" variant="subtitle1" component="div">
                  {numSelected} selected
              </Typography> : 
              <Typography className={title} variant="h6" id="tableTitle" component="div">
                { header }
              </Typography>
              : <Typography className={title} color="inherit" variant="subtitle1" component="div">
              {numSelected} selected
              </Typography>  
          }
          {numSelected > 0 ? (
            <>
             <Tooltip title="Edit">
              <IconButton aria-label="edit" disableFocusRipple classes={{ root: icon }}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton aria-label="delete" disableFocusRipple classes={{ root: icon }}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            </>
          ) : ''}
        
        </Toolbar>
      );
}

export default DatatableToolbar

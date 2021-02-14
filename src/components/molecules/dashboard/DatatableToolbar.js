import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {renderIconFromObject} from '../../../helpers';

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
  

const DatatableToolbar = ({header, selected, selectedLink = null, toolbar = []}) => {

    const {root, title, icon} = useStyles()
    const numSelected = selected.length;

    const iconObject = {
      edit: EditIcon,
      delete: DeleteIcon,
    }
    
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
          {numSelected === 1 && selectedLink &&
            <>
              <Tooltip title="show">
                <Link to={`${selectedLink}/${selected}`}>
                <IconButton aria-label="show" disableFocusRipple classes={{ root: icon }}>
                  <VisibilityIcon />
                </IconButton>
                </Link>
              </Tooltip>
            </>
          }
          {numSelected > 0 && toolbar.length > 0 &&
            <>
              {toolbar.map((item, index) => {
                return (
                  <Tooltip key={index} title={item}>
                    <IconButton aria-label={item} disableFocusRipple classes={{ root: icon }}>
                      {renderIconFromObject(item, iconObject)}
                    </IconButton>
                  </Tooltip>
                )
              })}
            </>
          }
        
        </Toolbar>
      );
}

export default DatatableToolbar

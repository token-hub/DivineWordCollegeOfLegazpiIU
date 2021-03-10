import React, { Fragment } from 'react'
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
  

const DatatableToolbar = ({header, selected, link = null, toolbar = [], handleDelete }) => {

    const {root, title, icon} = useStyles()
    const numSelected = selected.length;
  
    const iconObject = {
      edit: EditIcon,
      delete: DeleteIcon,
      show: VisibilityIcon,
    }

    const renderIconTooltipLink = (title, iconObject, selectedItem) => {

      const linkTo = title === 'show' ? `${link}/${selectedItem}` : `${link}/${selectedItem}/edit`;

      return (
        <Tooltip title={title}>
          {isDelete(title)
            ? <IconButton onClick={handleDelete(selected)} aria-label={title} disableFocusRipple classes={{ root: icon }}>
              {renderIconFromObject(title, iconObject)}
            </IconButton>
            : <Link to={linkTo}>
              <IconButton aria-label={title} disableFocusRipple classes={{ root: icon }}>
                {renderIconFromObject(title, iconObject)}
              </IconButton>
            </Link>
          }
        </Tooltip>
      )
    }

    const isDelete = item => {
      return item === 'delete';
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
          {numSelected > 1 && toolbar.includes('delete') 
            ? renderIconTooltipLink('delete', iconObject, selected)
            : numSelected == 1 && toolbar.length > 0 && toolbar.map((item, index) =>
              <Fragment key={index}>
                {renderIconTooltipLink(item, iconObject, selected)}
              </Fragment>
            )}  
        </Toolbar>
      );
}

export default DatatableToolbar

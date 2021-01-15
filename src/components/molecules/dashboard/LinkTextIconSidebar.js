import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {makeStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import {
    renderIconFromObject,
    textTransformCamelCase,
} from '../../../helpers';
import {sidebar} from '../../../data/dashboard';

const useStyles = makeStyles(theme => ({
    listButton: {
        color: 'white',
        "&:focus": {
        outline: 'none',
        }
    },
    muiButtonCurrent: {
        background: theme.palette.secondary.dark,
        marginBottom: ".5rem",
        borderRadius: '5%',
        "&:hover": {
          background: theme.palette.secondary.dark,
        }
      },
      muiButton: {
        marginBottom: ".5rem",
        "&:hover": {
          background: theme.palette.secondary.dark,
          borderRadius: '5%',
        }
      },
      muiButtonIndented: {
        paddingLeft: '2rem',
        marginBottom: ".5rem",
        "&:hover": {
          background: theme.palette.secondary.dark,
          borderRadius: '5%',
        }
      },
      muiButtonIndentedCurrent: {
        paddingLeft: '2rem',
        borderRadius: '5%',
        marginBottom: ".5rem",
        background: theme.palette.secondary.dark,
        "&:hover": {
          background: theme.palette.secondary.dark,
        }
      },
}));

const LinkTextIconSidebar = ({link = '#', title, sidebarItem, isCurrentPageValue, notEmptySublinks, handleListDrawerClick, collapsed = false}) => {

    const {menuIconObject} = sidebar;
    const {listButton, muiButtonCurrent, muiButton,muiButtonIndentedCurrent, muiButtonIndented} = useStyles();

    const setMuiButton = collapsed
      ? isCurrentPageValue 
        ? muiButtonIndentedCurrent
        : muiButtonIndented
      : isCurrentPageValue
        ? muiButtonCurrent
        : muiButton;

    return (
        <ListItem button component='a' href={link} classes={{ button: setMuiButton }}>
            <ListItemIcon>{renderIconFromObject(textTransformCamelCase(title), menuIconObject)}</ListItemIcon>
            <ListItemText primary={title} />
            {notEmptySublinks ?
            <ListItemSecondaryAction onClick={ () => handleListDrawerClick(title) }>
                <IconButton disableFocusRipple disableRipple edge="end" aria-label="delete" classes={{ root: listButton }}>
                { sidebarItem[title] ?  <ExpandLessIcon /> : <ExpandMoreIcon /> }
                </IconButton>
            </ListItemSecondaryAction> : ''
            }
      </ListItem>
    )
}

export default LinkTextIconSidebar

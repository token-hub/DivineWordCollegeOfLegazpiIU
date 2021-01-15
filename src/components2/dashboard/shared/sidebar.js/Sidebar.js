import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import {
   renderIconFromObject,
   textTransformCamelCase,
   isCurrentPage,
   isHomePage,
   stringTransform
  } from '../../../../helpers';
import {menus, menuIconObject} from '../../data/appbar';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      background: theme.palette.sidebar.dark
    },
    drawerPaper: {
      width: drawerWidth,
      background: theme.palette.sidebar.dark,
      color: 'white'
    },
    drawerContainer: {
      overflow: 'auto',
      marginTop: '1rem',
      padding: '0 1rem'
    },
    toolbar: {
      minHeight: '80px',
    },
    muiButton: {
      marginBottom: ".5rem",
      "&:hover": {
        background: theme.palette.secondary.dark,
        borderRadius: '5%',
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
    listButton: {
      color: 'white',
      "&:focus": {
        outline: 'none',
      }
    }
  }));

const Sidebar = () => {

    const {drawer, drawerPaper, drawerContainer, toolbar,  muiButton, muiButtonIndented, listButton, muiButtonCurrent, muiButtonIndentedCurrent} = useStyles();
  
    let initialState = {};
  
    const [sidebarItem, setsidebarItem] = useState(initialState);

    useEffect( () => {
      setsidebarItem({...initialState});
    }, [] );

    const handleListDrawerClick = key => {
      setsidebarItem({...sidebarItem, [key]: !sidebarItem[key]});
    };

    const {pathname} = useLocation();

    const path = stringTransform(pathname,'-', '_').toLowerCase();

    return (
        <Drawer
        className={drawer}
        variant="permanent"
        classes={{
          paper: drawerPaper,
        }}
      >
        <Toolbar classes={{ regular: toolbar }} />
        <div className={drawerContainer}>

            <div style={{ padding: '0 1.2rem' }}>
              <Typography variant='h6' color='secondary'>
              DASHBOARD
              </Typography>
            </div>
            <List disablePadding>
              {menus.map(({title, link, sublinks}, index) => {
                const notEmptySublinks = sublinks !== undefined;
                const isCurrentPageValue = isCurrentPage(path, stringTransform(title).toLowerCase());
                const setMuiButton = isCurrentPageValue ? muiButtonCurrent: muiButton;
                let sublink = '';

                if (notEmptySublinks) {
                  Object.assign(initialState, {[title]: false})
                  sublink = menus[index].title;
                }
                return (
                  <div key={index}>

                    <ListItem button component='a' href={link} classes={{ button: setMuiButton }}  key={title}>
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

                   {
                    <Collapse in={sidebarItem[title]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {notEmptySublinks ?
                            sublinks.map(({title, link}, index) => {

                              let setMuiButtonIndented = muiButtonIndented;
                              
                              if (isCurrentPage(path, stringTransform(title).toLowerCase())) {
                                setMuiButtonIndented = muiButtonIndentedCurrent;
                                initialState = {[sublink]: true};
                              }

                              return (
                                <ListItem button component='a' href={link} classes={{ button: setMuiButtonIndented }}  key={index}>
                                    <ListItemIcon>{renderIconFromObject(textTransformCamelCase(title), menuIconObject)}</ListItemIcon>
                                    <ListItemText primary={title} />
                                </ListItem>
                            )
                          }) : ''
                        }
                      </List>
                    </Collapse>
                   }
                  </div>
                )
              })}
            </List>
     
        </div>
      </Drawer>
    )
}

export default Sidebar

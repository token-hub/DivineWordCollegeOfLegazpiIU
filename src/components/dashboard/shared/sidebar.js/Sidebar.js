import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
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

import {renderIconFromObject, TextTransformCamelCase} from '../../../../helpers';
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
    },
    toolbar: {
      minHeight: '80px',
    },
    sidebarGroup: {
      marginTop: '1rem',
      padding: '0 1rem'
    },
    muiButton: {
      "&:hover": {
        background: theme.palette.secondary.dark,
        borderRadius: '5%',
      }
    },
    muiButtonIndented: {
      paddingLeft: '2rem',
      "&:hover": {
        background: theme.palette.secondary.dark,
        borderRadius: '5%',
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



    const {drawer, drawerPaper, drawerContainer, toolbar, sidebarGroup, muiButton, muiButtonIndented, listButton} = useStyles();
  
    let initialState = {};
  
    const [sidebarItem, setsidebarItem] = useState(initialState);
  
    const handleListDrawerClick = key => {
      setsidebarItem({...sidebarItem, [key]: !sidebarItem[key]});
    };

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
          <div className={sidebarGroup}>
            <div style={{ padding: '0 1.2rem' }}>
              <Typography variant='h6' color='secondary'>
              DASHBOARD
              </Typography>
            </div>
            <List disablePadding>
              {menus.map(({title, link, sublinks}, index) => {
                const notEmptySublinks = sublinks !== undefined;
                
                if (notEmptySublinks) Object.assign(initialState, {[title]: false});
                return (
                  <div key={index}>
                    <ListItem button component='a' href={link} classes={{ button: muiButton }}  key={title}>
                      <ListItemIcon>{renderIconFromObject(TextTransformCamelCase(title), menuIconObject)}</ListItemIcon>
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
                          { notEmptySublinks ?
                              sublinks.map(({title, link}, index) => (
                                  <ListItem button component='a' href={link} classes={{ button: muiButtonIndented }}  key={index}>
                                      <ListItemIcon>{renderIconFromObject(TextTransformCamelCase(title), menuIconObject)}</ListItemIcon>
                                      <ListItemText primary={title} />
                                  </ListItem>
                              )) : ''
                          }
                      </List>
                    </Collapse>
                   }
                  </div>
                )
              })}
            </List>
          </div>
        </div>
      </Drawer>
    )
}

export default Sidebar

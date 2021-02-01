import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import {Paragraph} from '../../atoms/dashboard';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import {sidebar} from '../../../data/dashboard';
import {LinkTextIconSidebar} from '../../molecules/dashboard';
import {
  isCurrentPage,
  stringTransform
 } from '../../../helpers';

const drawerWidth = 280;
const useStyles = makeStyles(theme=> ({
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
}));

const Sidebar = () => {

    const {drawer, drawerPaper, drawerContainer, toolbar, muiButtonCurrent, muiButton} = useStyles();
    const {menus} = sidebar;

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
            classes={{paper: drawerPaper}}
        >
          <Toolbar classes={{ regular: toolbar }} />
          <div className={drawerContainer}>
              <div style={{ padding: '0 1.2rem' }}>
                  <Paragraph variant='h6' color='secondary'>DASHBOARD</Paragraph>
              </div>
              <List disablePadding>
                  {menus.map( ({title, link, sublinks}, index) => {
                        const notEmptySublinks = sublinks !== undefined;
                        const isCurrentPageValue = isCurrentPage(path, stringTransform(title).toLowerCase());
                        // const setMuiButton = isCurrentPageValue ? muiButtonCurrent: muiButton;
                        let sublink = '';
                        if (notEmptySublinks) {
                          Object.assign(initialState, {[title]: false})
                          sublink = menus[index].title;
                        }
                        return (
                          <div key={index}>
                            <LinkTextIconSidebar               
                              link={link} 
                              title={title} 
                              sidebarItem={sidebarItem}
                              isCurrentPageValue={isCurrentPageValue}
                              notEmptySublinks={notEmptySublinks}
                              handleListDrawerClick={handleListDrawerClick} 
                            />
                            {
                              notEmptySublinks && <Collapse in={sidebarItem[title]} timeout="auto" unmountOnExit>
                                 <List component="div" disablePadding>
                                   {
                                     sublinks.map(({title, link},index) => {

                                      const isCurrentPageValue2 = isCurrentPage(path, stringTransform(title).toLowerCase());

                                      if (isCurrentPageValue2) initialState = {[sublink]: true};
                                      
                                      return (
                                        <LinkTextIconSidebar               
                                          link={link} 
                                          title={title} 
                                          key={index}
                                          collapsed
                                          sidebarItem={sidebarItem}
                                          isCurrentPageValue={isCurrentPageValue2}
                                          handleListDrawerClick={handleListDrawerClick} 
                                        />
                                      )
                                     })
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

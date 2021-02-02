import React, {useState} from 'react'
import {useLocation} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {navlinks} from '../../../data/web'; 
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {makeStyles} from '@material-ui/core/styles';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { 
    stringTransform,
    isCurrentPage,
} from '../../../helpers';
 

const useStyles = makeStyles(theme => ({
    listItem: {
        paddingLeft: '1.5rem',
        "&:hover" : {
            backgroundColor: theme.palette.primary.main
        }
    },
    listItemCurrent: {
        backgroundColor: theme.palette.primary.main,
        paddingLeft: '1.5rem',
        "&:hover" : {
            backgroundColor: theme.palette.primary.main
        }
    },
    listItemNested: {
        backgroundColor: '#232a33',
        paddingLeft: theme.spacing(6),
    
        "&:hover" : {
            backgroundColor: theme.palette.primary.main
        }
    },
    white: {
        color: 'white'
    },
}));

const AppBarContent = () => {

    const {listItem, listItemCurrent, listItemNested} = useStyles();
    const {pathname} = useLocation();
    const path = stringTransform(pathname,'-', '_').toLowerCase();       

    const [listDrawer, setListDrawer] = useState({
        about_us: false,
        admission: false,
        academics: false,
        student_services: false,
        updates: false
    });

    const handleListDrawerClick = item => {
        setListDrawer({[item]: !listDrawer[item]});
    };

    return (
        <List>
            {Object.keys(navlinks).map((text, index) => { 
                
                const {link, items} = navlinks[text]

                const hasItems = items !== undefined;     

                let setLinkItem = listItem;

                if (isCurrentPage(path, text)) {
                    setLinkItem = listItemCurrent;
                }

                return hasItems 
                        ?   <div key={index}>
                                <ListItem button component='a' href={link} key={text} className={setLinkItem}>
                                    <ListItemText  primary={stringTransform(text, '_', ' ')} />
                                    {/* {listDrawer[text] ? <ExpandLess /> : <ExpandMore />} */}

                                    <ListItemSecondaryAction onClick={() => handleListDrawerClick(text)}>
                                        {listDrawer[text] ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemSecondaryAction>
                                </ListItem>
                                
                                <Collapse in={listDrawer[text]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        { 
                                            items.map(({title, link}, index) =>(
                                                <ListItem button component='a' href={link} key={index} className={listItemNested}>
                                                    <ListItemText primary={stringTransform(title, '_', ' ')} />
                                                </ListItem>
                                            ))
                                        }
                                        </List>
                                </Collapse>
                            </div>
                        : <div key={index}>
                            <ListItem button component='a' href={link} key={text} className={setLinkItem}>
                                <ListItemText  primary={stringTransform(text, '_', ' ')} />
                            </ListItem>
                        </div>
                }
            )}
        </List> 
    )
}

export default AppBarContent

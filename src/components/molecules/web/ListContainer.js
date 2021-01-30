import React, {useState, useEffect} from 'react'
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import {
    isCurrentPage, 
    stringTransform,
    isNeedTextTransform,
    isBlock
} from '../../../helpers';

const useStyles = makeStyles(theme => ({ 
    listContainer: {
        width: '100%',
        height: 'auto',
        marginBottom: '2rem',

        [theme.breakpoints.down('sm')] : {
            width: '100%',
        }
    },
    listContainerTitle: {
        padding: '1rem',
        backgroundColor: '#1D17CE',
        color: 'white',
    },
    bold: {
        fontWeight: 600,
    },
    listItem: {
        paddingLeft: '2rem',
        border: '1px solid #d3d1d1',
        borderTop: 'none',
        color: '#1D17CE',
    },
    listItemNested: {
        paddingLeft: '3rem',
        border: '1px solid #d3d1d1',
        borderTop: 'none',
        color: '#1D17CE',
        background: '#ededed'
    },
    listItemNestedCurrent: {
        paddingLeft: '3rem',
        border: '1px solid #d3d1d1',
        borderTop: 'none',
        color: '#1D17CE',
        borderLeft: '4px solid #1D17CE',
        background: '#ededed'
    },
    listItemCurrent: {
        paddingLeft: '2rem',
        border: '1px solid #d3d1d1',
        borderTop: 'none',
        borderLeft: '4px solid #1D17CE',
        color: '#1D17CE'
    },
    dateAndTimeClass: {
        color: 'black',
    },
    block: {
        display: 'block',
    },
    alignCenter: {
        textAlign: 'center',
        color: 'black',
    },
    cursor: {
        cursor: 'pointer',
        color: '#1D17CE'
    }
}));

const ListContainer = ({data = null, header, type}) => {

    const {
        listContainer,
        listContainerTitle,
        bold,
        listItem,
        listItemCurrent,
        dateAndTimeClass, 
        block, 
        alignCenter,
        listItemNested,
        cursor,
        listItemNestedCurrent
    } = useStyles();
    
    let initialState = {};

    const [listDrawer, setListDrawer] = useState(initialState);
    
    const {pathname} = useLocation();

    const path = stringTransform(pathname,'-', ' ').toLowerCase();

    const setListItem = (path, pageName) => {
        return isCurrentPage(path, pageName.toLowerCase()) ? listItemCurrent : listItem
    }

    const handleListDrawerEvent = item => {
        setListDrawer({...listDrawer, [item]: !listDrawer[item] })
    };
    
    useEffect(() => {
        setListDrawer({...initialState});
    }, [])

    return (
        <Grid container item justify='center'>
            <Grid item className={listContainer}>
                <Grid className={listContainerTitle}>
                    <Typography variant='h6' align='center' className={bold}>
                        {header}
                    </Typography>
                </Grid>
                <List component="div" disablePadding>
                    {data ? data.map(({ title, link, dateAndTime, sublinks },index) => {
                            
                            let date = {
                                year: 0,
                                month: 0,
                                day: 0,
                                hours: 0,
                                minutes: 0
                            };

                            const isDateAndTimeNotEmpty = dateAndTime !== null;

                            if (isDateAndTimeNotEmpty) {
                                date = {...dateAndTime};
                            }

                            const {year, month, day, hours, minutes} = date;
                            const amOrPm = hours > 12 ? 'PM' : 'AM';
                            const postedDate = `${month} ${day}, ${year} | ${hours}:${minutes} ${amOrPm}`;

                            const setListClass = isBlock(dateAndTime, setListItem(path, title), block);
                            if (sublinks !== undefined) initialState = {...initialState, [title]: false};
                            return (<div key={index}>
                                    <ListItem button 
                                        component='a' 
                                        href={link}  
                                        className={setListClass} 
                                    >
                                        <ListItemText primary={isNeedTextTransform(type, title)} />
                            {isDateAndTimeNotEmpty && <Typography variant='subtitle2' className={dateAndTimeClass}>{postedDate}</Typography>}
                                        <ListItemSecondaryAction onClick={ () => handleListDrawerEvent(title) }>
                                            {sublinks !== undefined 
                                                ?   listDrawer[title]
                                                        ? <ExpandLess className={cursor} /> 
                                                        : <ExpandMore className={cursor} />
                                                : ''
                                            }
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    {sublinks !== undefined &&
                                        <Collapse in={listDrawer[title]} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {sublinks.map(({title:sublinkTitle, link}, index) => {
                                                    
                                                    let setNestedListClass = listItemNested;
                                                    if (isCurrentPage(path, sublinkTitle.toLowerCase())) {
                                                        initialState = {...initialState, [title]: !initialState[title]};
                                                        setNestedListClass = listItemNestedCurrent;
                                                    }

                                                    return (
                                                        <ListItem button component='a' href={link} key={index} className={setNestedListClass}>
                                                            <ListItemText primary={isNeedTextTransform(type, sublinkTitle)} />
                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </Collapse>     
                                    }
                                </div>)
                            })
                        :   <ListItem className={clsx(listItem, alignCenter)}>
                                <ListItemText primary={`No ${header}`} />
                            </ListItem>
                    }
                </List>
            </Grid>
        </Grid>
    )
}

export default ListContainer

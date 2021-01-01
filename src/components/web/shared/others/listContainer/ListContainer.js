import React, {useState} from 'react'
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
    capitalizeAllFirstLetter,
    isNeedTextTransform,
    isBlock
} from '../../../../../helpers';

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
        cursor: 'pointer'
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
        cursor
    } = useStyles();

    const [listDrawer, setListDrawer] = useState({});

    const {pathname} = useLocation();

    const path = stringTransform(pathname,'-', ' ').toLowerCase();

    const setListItem = (path, pageName) => {
        return isCurrentPage(path, pageName.toLowerCase()) ? listItemCurrent : listItem
    }

    const handleListDrawerClick = item => {
        const isExist = Object.keys(listDrawer).indexOf(item) !== -1;

        isExist 
            ? setListDrawer({...listDrawer, [item]: !listDrawer[item] })
            : setListDrawer({...listDrawer, [item]: true })
    };

    return (
        <Grid container item justify='center'>
            <Grid item className={listContainer}>
                <Grid className={listContainerTitle}>
                    <Typography variant='h6' align='center' className={bold}>
                        {header}
                    </Typography>
                </Grid>
                <List component="div" disablePadding>
                    {
                        data 
                            ?   data.map(({ title, link, dateAndTime, sublinks },index) => {
                                    const setListClass = isBlock(dateAndTime, setListItem(path, title), block);
                                    return (
                                        <>
                                            <ListItem button 
                                                key={index} 
                                                component='a' 
                                                href={link}  
                                                className={setListClass} 
                                            >
                                                <ListItemText primary={isNeedTextTransform(type, title)} />
                                                {
                                                dateAndTime 
                                                    ? 
                                                        <Typography variant='subtitle2' className={dateAndTimeClass}>
                                                            {dateAndTime}
                                                        </Typography>
                                                    : ''
                                                }
                                                <ListItemSecondaryAction onClick={ () => handleListDrawerClick(title) }>
                                                    {
                                                    sublinks !== undefined 
                                                        ?   listDrawer[title]
                                                                ? <ExpandLess button color='primary' className={cursor} /> 
                                                                : <ExpandMore button color='primary' className={cursor} />
                                                        : ''
                                                    }
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                                
                                            {
                                                sublinks !== undefined 
                                                    ?   <Collapse in={listDrawer[title]} timeout="auto" unmountOnExit>
                                                            <List component="div" disablePadding>
                                                                { 
                                                                    sublinks.map(({title, link}, index) =>(
                                                                        <ListItem button component='a' href={link} key={index} className={listItemNested}>
                                                                            <ListItemText primary={isNeedTextTransform(type, title)} />
                                                                        </ListItem>
                                                                    ))
                                                                }
                                                            </List>
                                                        </Collapse>
                                                    : ''
                                            }
                                        </>
                                    )
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

import React from 'react'
import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import {
    isCurrentPage, 
    stringTransform,
    capitalizeAllFirstLetter
} from '../../../../../helpers';
import clsx from 'clsx';


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
    }
}));

const ListContainer = ({data = null, header, type}) => {

    const {listContainer, listContainerTitle, bold, listItem, listItemCurrent, dateAndTimeClass, block, alignCenter} = useStyles();

    const {pathname} = useLocation();

    const path = stringTransform(pathname,'-', ' ').toLowerCase();

    const setListItem = (path, pageName) => {
        return isCurrentPage(path, pageName.toLowerCase()) ? listItemCurrent : listItem
    }

    const isBlock = (item, className) => {
        return item ? clsx(className, block) : className;
    }

    const isNeedTextTransform = (type, text) => {
        const met =  capitalizeAllFirstLetter(text);

        return type === 'overview' ? met : text;
    }

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
                            ?   data.map(({ title, link, dateAndTime },index) => {

                                    const setListClass = isBlock(dateAndTime, setListItem(path, title));

                                    return (
                                            <ListItem button key={index}  component='a' href={link} className={setListClass}>
                                                <ListItemText primary={isNeedTextTransform(type, title)} />
                                                {
                                                dateAndTime 
                                                    ? 
                                                        <Typography variant='subtitle2' className={dateAndTimeClass}>
                                                            {dateAndTime}
                                                        </Typography>
                                                    : ''
                                            }
                                            </ListItem>
                                    )
                                })
                            :   <ListItem alignItems className={clsx(listItem, alignCenter)}>
                                    <ListItemText primary={`No ${header}`} />
                                </ListItem>
                    }
                </List>
            </Grid>
        </Grid>
    )
}

export default ListContainer

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
} from '../../../../../../helpers';


const useStyles = makeStyles(theme => ({ 
    sidenav: {
        width: '100%',
        height: 'auto',

        [theme.breakpoints.down('sm')] : {
            width: '100%',
        }
    },
    sidenavTitle: {
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
        color: '#1D17CE'
    },
    listItemCurrent: {
        paddingLeft: '2rem',
        border: '1px solid #d3d1d1',
        borderTop: 'none',
        borderLeft: '4px solid #1D17CE',
        color: '#1D17CE'
    }
}));

const Overview = ({data}) => {

    const {sidenav, sidenavTitle, bold, listItem, listItemCurrent} = useStyles();

    const {pathname} = useLocation();

    const path = stringTransform(pathname,'-', ' ').toLowerCase();

    return (
        <Grid container item justify='center'>
            <Grid item className={sidenav}>
                <Grid className={sidenavTitle}>
                    <Typography variant='h6' align='center' className={bold}>
                        OVERVIEW
                    </Typography>
                </Grid>
                <List component="div" disablePadding>
                    {
                        data.map(({ title, link },index) => {

                            let setListItem = listItem;
                                
                            if (isCurrentPage(path, title.toLowerCase())) {
                                setListItem = listItemCurrent
                            }

                            return (
                                <ListItem button key={index} component='a' href={link} className={setListItem}>
                                    <ListItemText primary={capitalizeAllFirstLetter(title)} />
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Grid>
        </Grid>
    )
}

export default Overview

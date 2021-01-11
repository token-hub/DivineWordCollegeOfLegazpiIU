import React from 'react'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import {
    HomeHeaderLeft,
    HomeHeaderRight
} from '../../molecules/web/index';

const useStyles = makeStyles(theme => ({
    header: {
        height: '110px',
        width: '100%',
        backgroundColor: theme.palette.primary.main,
    },
    headerContent: {
        height: '100%',
    },
    headerLeft: {
        height: '100%',

        [theme.breakpoints.down('md')]: {
            width: '100%',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0',
            width: '60%',
            height: '100%',
        }
    },
    headerRight: {
        width: '40%',
        height: '100%',
        color: 'white',
        padding: '1rem 0',
    },
}))

const HomeHeader = () => {

    const {header, headerContent, headerLeft, headerRight} = useStyles();
    
    return (
        <Grid container justify="center" className={header}>
            <Grid item sm={false} md={1} xl={3}></Grid>
            <Grid container item direction="column" sm={12} md={10} xl={6} className={headerContent}>
                <Grid container item alignItems="center" className={headerLeft}>
                    <HomeHeaderRight />
                </Grid>

                <Hidden smDown>
                    <Grid container item className={headerRight}>
                        <HomeHeaderLeft />
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item sm={false} md={1} xl={3}></Grid>
        </Grid>
    )
}

export default HomeHeader

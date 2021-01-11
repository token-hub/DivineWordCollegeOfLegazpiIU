import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    right: {
        paddingLeft: '2rem',
        height: 'auto',

        [theme.breakpoints.down('sm')] : {
            paddingLeft: 0,
        }
    },
    header: {
        fontWeight: 600,
        borderBottom: '1px solid #d3d1d1',
        paddingBottom: '1rem'
    },
    paddingTop: {
        paddingTop: '1rem'
    }
}));

const BannerWithOverviewMain = ({ title, children }) => {

    const {right, header, paddingTop} = useStyles();

    return (
        <Grid item className={right}>
            <Typography variant='h4' color='primary' className={header}>
                {title}
            </Typography>
            <Grid item className={paddingTop}>
                {children}
            </Grid>
    </Grid>
    )
}

export default BannerWithOverviewMain

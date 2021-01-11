import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SharedGrid from '../../shared/others/sharedGrid';
import UpdateContainer from '../../shared/others/UpdateContainer';
import { announcements } from "../../data/announcements";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#F5F5F5',
        height: 'auto',
        padding: '4rem 0'
    }, 
    title: {
        marginBottom: '3rem',
        fontWeight: 600,
        color: '#1D17CE'
    },
    announcementContainer: {
        [theme.breakpoints.down('sm')]:{
            padding: '0 2rem'
        }
    }
 }));

const Announcement = () => {

    const { root, title, announcementContainer } = useStyles();

    return (
        <SharedGrid root={root}>
            <Grid item >
                <Typography gutterBottom variant="h4" align='center' className={title}>
                    ANNOUNCEMENT
                </Typography>
            </Grid>

            <Grid container item className={announcementContainer}>
                {
                    announcements.map((data, index) => 
                        <UpdateContainer 
                            key={index}
                            width='50%'
                            {...data}
                        /> 
                    )
                }
            </Grid> 
        </SharedGrid> 
    )
}

export default Announcement

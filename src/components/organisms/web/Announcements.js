import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {SharedGrid, UpdateContainer} from '../../molecules/web';
import {makeStyles} from '@material-ui/core/styles';
import {announcements} from '../../../data/web';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#F5F5F5',
        height: 'auto',
        padding: '4rem 0',
        [theme.breakpoints.down('sm')]: {
            padding: '3rem 0'
        }
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
}))

const Announcements = () => {

    const {root, announcementContainer, title} = useStyles();

    return (
        <SharedGrid root={root}>
            <Grid item >
                <Typography gutterBottom variant="h4" align='center' className={title}>
                    ANNOUNCEMENTS
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

export default Announcements

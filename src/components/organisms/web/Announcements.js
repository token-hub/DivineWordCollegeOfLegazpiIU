import React, {useContext, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {SharedGrid, UpdateContainer} from '../../molecules/web';
import {makeStyles} from '@material-ui/core/styles';
import {WebContext} from '../../../contexts';
import {getDateObj} from '../../../helpers';

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
    const {states:{updates:{announcements}}, getAnnouncements} = useContext(WebContext);
    const isAnnouncementIsEmpty = Object.keys(announcements).length < 1;

    useEffect(()=>{
        if(isAnnouncementIsEmpty) {
          getAnnouncements()
        }
      }, []);

    return (
        <SharedGrid root={root}>
            <Grid item >
                <Typography gutterBottom variant="h4" align='center' className={title}>
                    ANNOUNCEMENTS
                </Typography>
            </Grid>
            <Grid container item className={announcementContainer}>
                {!isAnnouncementIsEmpty && 
                    announcements.filter((data, index) => index < 4)
                        .map(({category, title, subtitle, created_at}, index) => {
                            const link = `/updates/${category}/${title}`;
                            const data = {dateAndTime: getDateObj(created_at), title, subtitle, link}
                        return <UpdateContainer color='primary' width='50%' key={index} {...data} /> 
                        })
                }
            </Grid> 
        </SharedGrid>
    )
}

export default Announcements

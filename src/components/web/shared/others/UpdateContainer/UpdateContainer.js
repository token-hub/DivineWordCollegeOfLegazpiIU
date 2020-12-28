import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    announcementContent: {
        width: '50%',
        height: 'auto',
        color: 'white',
        padding: '1rem',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            padding: '1rem .3rem',
        }
    },
    date: {
        height: '100px',
        width: '15%',
        padding: '1rem',
        backgroundColor: '#1D17CE',

        [theme.breakpoints.down('md')]:{
            padding: '.5rem',
        },

        [theme.breakpoints.only('xs')]:{
            height: '70px',
        }

        
    },
    content: {
        height: 'auto',
        width: '85%',
        padding: '0 1rem',
        color: 'black',
        borderBottom: '1px solid #1D17CE',
        "&:hover" : {
           fontStyle: 'italic'
        }
    }
 }));

const UpdateContainer = ({ month, day, title, subtitle = null, link = '#', color = 'inherit' }) => {

    const { announcementContent, content, date, } = useStyles();

    return (
        <Grid item container className={announcementContent}  direction='row'>
            <Grid item className={date}>
                <Typography variant="h6" align='center' gutterBottom={false}>
                    {month}
                </Typography>
                <Typography gutterBottom variant="h4" align='center'>
                    {day}
                </Typography>
            </Grid>
            <Grid item className={content}>
                <Typography gutterBottom variant="h6" align='justify'>
                    <Link href={link} underline='none' color={color} >
                    {title}
                    </Link>
                </Typography>
                <Typography variant="subtitle2" gutterBottom={false}>
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default UpdateContainer

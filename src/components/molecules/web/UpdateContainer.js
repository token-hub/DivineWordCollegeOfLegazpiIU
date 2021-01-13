import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    announcementContent: {
        width: width => width.width,
        height: 'auto',
        color: 'white',
        padding: '1rem',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            padding: '1rem .3rem',
        },
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
        borderRight: '1px solid #1D17CE',
    },
    header: {
        "&:hover" : {
            fontStyle: 'italic'
         }
    }
 }));

const UpdateContainer = ({ month, day, title, subtitle = null, link = '#', color = 'inherit', width ='100%', dateOverwrite }) => {
    
    const { announcementContent, content, date, header} = useStyles({width: width});

    return (
        <Grid item container className={announcementContent} direction='row'>
            <Grid item className={date} style={{ dateOverwrite }}>
                <Typography variant="h6" align='center' gutterBottom={false}>
                    {month}
                </Typography>
                <Typography gutterBottom variant="h4" align='center'>
                    {day}
                </Typography>
            </Grid>
            <Grid item className={content}>
                <Typography gutterBottom variant="h6">
                    <Link href={link} underline='none' className={header} color={color} >
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

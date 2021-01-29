import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Image} from '../components/atoms/web';
import {logo} from '../assets/images';

const useStyles = makeStyles(theme =>({
    root: {
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        background: '#f1f1f1',
    },
    TextAndLogo: {
        height: '15rem',
        width: '15rem',

        [theme.breakpoints.only('xs')]:{
            height: '10rem',
            width: '10rem',
        },
        [theme.breakpoints.up('lg')]:{
            height: '20rem',
            width: '20rem',
        }
    },
    message: {
        fontSize: '3rem',
        textAlign: 'center',

        [theme.breakpoints.only('xs')]:{
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]:{
            fontSize: '4rem',
        }
    },
    image: {
        height: '100%',
        width: '100%',
    }
}))
const PageNotFound = () => {

    const {root, TextAndLogo, message, image} = useStyles();
    const {alt, img} = logo;
    
    return (
        <Grid container justify='center' direction='column' alignItems='center' className={root}>
            <Grid container direction='column' className={TextAndLogo}>
                <img src={img} alt={alt} className={image} />
            </Grid>
            <Typography className={message}>Sorry, page could not be found</Typography>
        </Grid>
    )
}

export default PageNotFound

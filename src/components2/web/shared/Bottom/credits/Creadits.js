import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#000000',
        color: 'white',
        padding: '1rem 2rem',
        width: '100%',
    }
});

const Creadits = () => {

    const getYear = () => {
       return (new Date().getFullYear());
    }
    
    const {root} = useStyles();

    return (
        <Grid container justify='center' className={root}>
            <Typography variant='subtitle1'>
                Divine Word College of Legazpi © {getYear()}
            </Typography>
        </Grid>
    )
}

export default Creadits

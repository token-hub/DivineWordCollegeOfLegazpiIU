import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '200px',
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
        background: 'cover'
    }
});

const Banner = ({ img, alt }) => {
    const {root, image} = useStyles();

    return (
        <Grid container className={root}>
            <img src={img} alt={alt} className={image} />
        </Grid>
    )
}

export default Banner

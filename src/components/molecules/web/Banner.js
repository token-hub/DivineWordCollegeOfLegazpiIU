import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Image} from '../../atoms/web';

const useStyles = makeStyles({
    root: {
        height: '200px',
        width: '100%',
    },
});

const Banner = ({ img, alt }) => {
    const {root} = useStyles();

    return (
        <Grid container className={root}>
            <Image source={img} alt={alt} />
        </Grid>
    )
}

export default Banner

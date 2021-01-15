import React from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    fontFamily: {
        fontFamily: 'Nunito, sans-serif',
    },
    background: {
        backgroundColor: '#E3E3FE',
    }
});

const Base = ({root, children }) => {

    const {fontFamily, background} = useStyles();

    return (
        <Grid container className={clsx(root, fontFamily, background)}>
            {children}
        </Grid>
    )
}

export default Base

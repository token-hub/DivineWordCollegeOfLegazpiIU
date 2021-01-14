import React from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    fontFamily: {
        fontFamily: 'Nunito, sans-serif'
    },
}))

const Base = ({ root, children }) => {

    const { fontFamily } = useStyles();

    return (
        <Grid container className={clsx(root, fontFamily)}>
            {children}
        </Grid>
    )
}

export default Base

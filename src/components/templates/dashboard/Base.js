import React, {useContext}  from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import LinearProgress from '@material-ui/core/LinearProgress';
import {makeStyles} from '@material-ui/core/styles';
import {DashboardContext} from '../../../contexts';

const useStyles = makeStyles({
    fontFamily: {
        fontFamily: 'Nunito, sans-serif',
    },
    background: {
        backgroundColor: '#E3E3FE',
    },
    progress: {
        zIndex: '1500',
    }
});

const Base = ({root, children }) => {

    const {fontFamily, background, progress} = useStyles();
    const {states: {isLoading}} = useContext(DashboardContext); 

    return (
        <>
         {isLoading && <LinearProgress color='secondary' classes={{ root: progress }} />}
         <Grid container className={clsx(root, fontFamily, background)}>
            {children}
         </Grid>
        </>
    )
}

export default Base

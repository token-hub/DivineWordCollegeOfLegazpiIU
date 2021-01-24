import React, {useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import LinearProgress from '@material-ui/core/LinearProgress';
import {makeStyles} from '@material-ui/core/styles';
import {DashboardContext} from '../../../../contexts';

const useStyles = makeStyles(theme => ({
    fontFamily: {
        fontFamily: 'Nunito, sans-serif'
    },
}))

const Base = ({ root, children }) => {

    const {fontFamily} = useStyles();
    const {isLoading} = useContext(DashboardContext); 

    return (
        <Grid container className={clsx(root, fontFamily)}>
            <LinearProgress />
            {/* {children} */}
        </Grid>
    )
}

export default Base

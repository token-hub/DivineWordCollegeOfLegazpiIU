import React from 'react'
import Grid from '@material-ui/core/Grid';

const SharedGrid = ({ root, children,  full = false }) => {
    const setMd = full ? 12 : 10;

    return (
        <Grid container className={root} >
            <Grid item sm={false} md={1} xl={3}></Grid>
            <Grid container item sm={12} md={setMd} xl={6} justify='center'>
                { children }
            </Grid>
            <Grid item sm={false} md={1} xl={3}></Grid>
        </Grid>
    )
}

export default SharedGrid

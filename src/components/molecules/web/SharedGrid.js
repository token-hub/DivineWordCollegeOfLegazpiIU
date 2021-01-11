import React from 'react'
import Grid from '@material-ui/core/Grid';

const SharedGrid = ({ root, children }) => {
    return (
        <Grid container className={root} >
            <Grid item sm={false} md={1} xl={3}></Grid>
            <Grid container item sm={12} md={10} xl={6} justify='center'>
                { children }
            </Grid>
            <Grid item sm={false} md={1} xl={3}></Grid>
        </Grid>
    )
}

export default SharedGrid

import React from 'react'
import Grid from '@material-ui/core/Grid';

const SharedGrid = ({ root, children, noRightGrid = false,  full = false }) => {
    const setMd = full ? 12 : 10;
    const setXl = noRightGrid ? {xlSide: false, xlMain: 12} : {xlSide: 2, xlMain: 8}
    const {xlSide, xlMain} = setXl;
    return (
        <Grid container className={root} >
            <Grid item sm={false} md={1} xl={xlSide}></Grid>
            <Grid container item sm={12} md={setMd} xl={xlMain} justify='center'>
                { children }
            </Grid>
            <Grid item sm={false} md={1} xl={xlSide}></Grid>
        </Grid>
    )
}

export default SharedGrid

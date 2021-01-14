import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({ 
    googleMap: {
        height: '60vh',
        width: '100%'
    },
    iframe: {
        width: '100% !important',
        height: '100% !important'
    }
})

const GoogleMap = () => {

    const { googleMap, iframe } = useStyles();

    return (
        <Grid className={googleMap}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.384204799812!2d123.73349231490738!3d13.13814819074676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a101803834bb93%3A0x8bfe7abecdb00187!2sDivine%20Word%20College%20of%20Legazpi%20-%20South%20Campus!5e0!3m2!1sen!2sph!4v1609584992422!5m2!1sen!2sph" className={iframe}></iframe>
        </Grid>
    )
}

export default GoogleMap

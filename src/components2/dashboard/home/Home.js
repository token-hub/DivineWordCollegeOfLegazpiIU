import React from 'react'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import DashboardLayout from '../shared/dashboardLayout';
import {dwclLogo} from '../data/images';

const useStyles = makeStyles({
    container: {
        height: '75vh',
    },
    logo: {
        height: '100%',
        width: '100%',
        background: 'cover'
    },
    imgContainer: {
        height: '40vh',
        width: '350px',
        opacity: '.4'
    }
});

const Home = () => {

    const {imgContainer, container, logo} = useStyles();
 
    return (
        <DashboardLayout>
            <Grid container className={container} justify='center' alignItems='center'>
                <Grid item className={imgContainer}>
                    <img src={dwclLogo} alt='DWCL Logo' className={logo}/>
                </Grid>
            </Grid>
            
        </DashboardLayout>
    )
    
}

export default Home

import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {BaseWithHeaderAndSidebar} from '../../components/templates/dashboard';
import {DWCLLogo} from '../../assets/images/others';

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

const HomeDashboard = () => {

    const {imgContainer, container, logo} = useStyles();

    return (
        <BaseWithHeaderAndSidebar>
            <Grid container className={container} justify='center' alignItems='center'>
                <Grid item className={imgContainer}>
                    <img src={DWCLLogo} alt='DWCL Logo' className={logo}/>
                </Grid>
            </Grid>
        </BaseWithHeaderAndSidebar>
    )
}

export default HomeDashboard

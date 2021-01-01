import React from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DashboardLayout from '../shared/dashboardLayout';


const useStyles = makeStyles({

});

const HomeDashboard = () => {

    const {bold, paragraph} = useStyles();

    return (
        <DashboardLayout>
            <Grid container>
                {/* hello
                hello
                hello */}
            </Grid>
        </DashboardLayout>
    )
}

export default HomeDashboard

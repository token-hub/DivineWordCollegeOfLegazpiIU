import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { menus } from '../../data/navlinks';
import SharedLayout from '../../shared/others/sharedLayout';
import { AcademicsBannerObj } from '../../data/banners';

const FreeSecondaryDisntaceProgramDepartment = () => {
    return (
        <Grid container>
            <SharedLayout data={menus.academics.items} title='Free Secondary Distance Program' banner={AcademicsBannerObj}>
                <Typography variant='subtitle1'>
                    Please visit us again as we are currently updating information on this page. <br />
                    Thank you.
                </Typography>

            </SharedLayout>
        </Grid>
    )
}

export default FreeSecondaryDisntaceProgramDepartment

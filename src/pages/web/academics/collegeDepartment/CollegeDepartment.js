import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { menus } from '../../data/navlinks';
import SharedLayout from '../../shared/others/sharedLayout';
import { AcademicsBannerObj } from '../../data/banners';

const CollegeDepartment = () => {
    return (
        <Grid container>
            <SharedLayout data={menus.academics.items} title='College' banner={AcademicsBannerObj}>
                <Typography variant='subtitle1'>
                    The Divine Word College of Legazpi offers different courses that prospective students can choose and are relevant and responsive to the demands of business and industry.
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default CollegeDepartment

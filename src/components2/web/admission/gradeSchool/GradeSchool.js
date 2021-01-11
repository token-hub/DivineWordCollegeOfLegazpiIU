import React from 'react';
import Grid from '@material-ui/core/Grid';
import RenderList from '../../shared/others/renderList';
import SharedLayout from '../../shared/others/sharedLayout';
import { menus } from '../../data/navlinks';
import { AdmissionBannerObj } from '../../data/banners';

const GradeSchool = () => {

    return (
        <Grid container>
            <SharedLayout data={menus.admission.items} title='The seal' banner={AdmissionBannerObj}>
                <RenderList  header='Admission Requirements' data={['Reading assessment', 'Admission form filled-out']} />
            </SharedLayout>
        </Grid>
    )
}

export default GradeSchool

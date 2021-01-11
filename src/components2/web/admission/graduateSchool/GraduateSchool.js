import React from 'react';
import Grid from '@material-ui/core/Grid';
import RenderList from '../../shared/others/renderList';
import { menus } from '../../data/navlinks';
import SharedLayout from '../../shared/others/sharedLayout';
import { AdmissionBannerObj } from '../../data/banners';
import { requirements } from '../../data/admission/graduateSchool';

const GraduateSchool = () => {
    return (
        <Grid container>
            <SharedLayout data={menus.admission.items} title='Graduate School' banner={AdmissionBannerObj}>
                <RenderList header='Admission Requirements' data={requirements} />
            </SharedLayout>
        </Grid>
    )
}

export default GraduateSchool

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import Banner from '../shared/Top/banner';
import AdmissionBanner from '../../../assets/images/banners/admission.jpg';

const Admission = () => {
    return (
        <Grid container>
            <Top />
            <Banner img={AdmissionBanner} alt='Admission banner' />
            <Bottom />
        </Grid>
    )
}

export default Admission

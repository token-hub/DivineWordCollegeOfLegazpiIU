import React from 'react';
import Grid from '@material-ui/core/Grid';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import Banner from '../shared/Top/banner';
import StudentServicesBanner from '../../../assets/images/banners/student-services.jpg';

const StudentServices = () => {
    return (
        <Grid container>
            <Top />
            <Banner img={StudentServicesBanner} alt='Student services banner' />
            <Bottom />
        </Grid>
    )
}

export default StudentServices

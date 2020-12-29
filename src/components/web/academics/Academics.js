import React from 'react';
import Grid from '@material-ui/core/Grid';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import Banner from '../shared/Top/banner';
import AcademicsBanner from '../../../assets/images/banners/academics.jpg';

const Academics = () => {
    return (
        <Grid container>
            <Top />
            <Banner img={AcademicsBanner} alt='Academics banner' />
            <Bottom />
        </Grid>
    )
}

export default Academics

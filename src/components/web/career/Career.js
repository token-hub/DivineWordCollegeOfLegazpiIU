import React from 'react';
import Grid from '@material-ui/core/Grid';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import Banner from '../shared/Top/banner';
import CareerBanner from '../../../assets/images/banners/career.jpg';

const Career = () => {
    return (
        <Grid container>
            <Top />
            <Banner img={CareerBanner} alt='Career banner' />
            <Bottom />
        </Grid>
    )
}

export default Career

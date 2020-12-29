import React from 'react';
import Grid from '@material-ui/core/Grid';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import Banner from '../shared/Top/banner';
import UpdatesBanner from '../../../assets/images/banners/updates.jpg';

const Updates = () => {
    return (
        <Grid container>
            <Top />
            <Banner img={UpdatesBanner} alt='Updates banner' />
            <Bottom />
        </Grid>
    )
}

export default Updates

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import Banner from '../shared/Top/banner';
import AlumniBanner from '../../../assets/images/banners/alumni.jpg';

const Alumni = () => {
    return (
        <Grid container>
            <Top />
            <Banner img={AlumniBanner} alt='Alumni banner' />
            <Bottom />
        </Grid>
    )
}

export default Alumni

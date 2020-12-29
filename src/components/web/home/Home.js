import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '../shared/others/slider';
import QuickLinks from './quicklinks';
import PresidentMessage from './presidentMessage';
import NewsAndEvents from './newsAndEvents';
import Announcement from './announcement';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import {images} from '../data/images';
import Hidden from '@material-ui/core/Hidden';

const Home = () => {

    return (
        <Grid container>
            <Top />
            <Hidden smDown><Slider data={images.sliderImages} /></Hidden>
            <QuickLinks />
            <PresidentMessage />
            <NewsAndEvents />
            <Announcement />
            <Bottom />
        </Grid>
    )
}

export default Home

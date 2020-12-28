import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from './slider';
import QuickLinks from './quicklinks';
import PresidentMessage from './presidentMessage';
import NewsAndEvents from './newsAndEvents';
import Announcement from './announcement';
import Top from '../shared/Top';

import Hidden from '@material-ui/core/Hidden';

const Home = () => {

    return (
        <Grid container>
            <Top />
            <Hidden smDown><Slider /></Hidden>
            <QuickLinks />
            <PresidentMessage />
            <NewsAndEvents />
            <Announcement />
        </Grid>
    )
}

export default Home

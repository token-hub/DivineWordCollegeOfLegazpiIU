import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from './slider';
import QuickLinks from './quicklinks';
import Top from '../shared/Top';

import Hidden from '@material-ui/core/Hidden';

const Home = () => {

    return (
        <Grid container>
            <Top />
            <Hidden smDown><Slider /></Hidden>
            <QuickLinks />
        </Grid>
    )
}

export default Home

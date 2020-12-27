import React from 'react';
import Header from '../header/';
import Navbar from '../navbar/';
import Appbar from '../appbar/';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

const Home = () => {

    return (
        <Grid container>
            <Header />
            <Hidden mdDown><Navbar /></Hidden>
            <Hidden mdUp><Appbar /></Hidden>
        </Grid>
    )
}

export default Home

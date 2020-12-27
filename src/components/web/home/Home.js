import React from 'react';
import Header from '../header/';
import Navbar from '../navbar/';
import Appbar from '../appbar/';
import Slider from '../slider';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import {images} from '../data/images';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme =>({
    paper: {
        height: '60vh',
        width: '100%',
    },
    image: {
        maxHeight: '100%',
        width: '100vw',
        background: 'cover'
    }
}));

const Home = () => {

    const {paper, image} = useStyle();

    const { others } = images;
        
    console.log(others);

    return (
        <Grid container>
            <Header />

            <Hidden mdDown><Navbar /></Hidden>
            <Hidden mdUp><Appbar /></Hidden>

            <Hidden only={['xs','md','lg','xl']}> 
                <Grid container className={paper}>
                    <img src={others[0].img} alt={others[0].alt} className={image} />
                </Grid>
            </Hidden>

            <Hidden smDown><Slider /></Hidden>
            <Hidden only={['sm','md','lg','xl']}> 
                <Grid container className={paper}>
                    <img src={others[1].img} alt={others[1].alt} className={image} />
                </Grid>
            </Hidden>
        </Grid>
    )
}

export default Home

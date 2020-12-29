import React from 'react';
import Grid from '@material-ui/core/Grid';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import Banner from '../shared/Top/banner';
import GalleryBanner from '../../../assets/images/banners/gallery.jpg';

const Gallery = () => {
    return (
        <Grid container>
            <Top />
            <Banner img={GalleryBanner} alt='Gallery banner' />
            <Bottom />
        </Grid>
    )
}

export default Gallery

import React from 'react';
import Grid from '@material-ui/core/Grid';
import SharedLayout from '../../shared/others/sharedLayout';
import { menus } from '../../data/navlinks';
import { AboutUsBannerObj } from '../../data/banners';
import {images} from '../../data/images';
import Slider from '../../shared/others/slider';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    size: {
        width: '60%',
        height: '100%',

        [theme.breakpoints.only('xs')] : {
            width: '100%',
        }
    }
}));

const Facilities = () => {

    const {size} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.about_us.items} title='Facilities' banner={AboutUsBannerObj}>
                <Grid container justify='center'>
                    <Slider data={images.facilities} size={size} />
                </Grid>
            </SharedLayout>
        </Grid>
    )
}

export default Facilities

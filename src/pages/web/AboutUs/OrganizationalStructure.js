import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import SharedLayout from '../../shared/others/sharedLayout';
import { menus } from '../../data/navlinks';
import { AboutUsBannerObj } from '../../data/banners';
import { images } from '../../data/images';

import { makeStyles } from '@material-ui/core/styles';

const {img, alt} = images.orgChart; 

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    imgContainer: {
        height: '100%',
        width: '100%',
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
    image: {
        maxHeight: '100%',
        widht: '100%',
        backgroundSize: 'cover'
    }
});

const History = () => {

    const {bold, paragraph, image, imgContainer} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.about_us.items} title='The seal' banner={AboutUsBannerObj}>
                <Grid container justify='center' className={imgContainer}>
                    <img src={img} alt={alt} className={image}/>
                </Grid>
            </SharedLayout>
        </Grid>
    )
}

export default History

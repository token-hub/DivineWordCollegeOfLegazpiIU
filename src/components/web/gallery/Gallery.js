import React from 'react';
import Typography from '@material-ui/core/Typography';
import { GalleryBannerObj } from '../data/banners';
import SharedLayout2 from '../shared/others/sharedLayout2';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paragraph: {
        marginBottom: '1.5rem'
    }
})

const Gallery = () => {

    const {paragraph} = useStyles();

    return (
        <SharedLayout2 banner={GalleryBannerObj}>
            <Typography variant='subtitle1' className={paragraph}>
                Please visit us again as we are currently updating information on this page. <br />
                Thank you.
            </Typography>
        </SharedLayout2>
    )
}

export default Gallery

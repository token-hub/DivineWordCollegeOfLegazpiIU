import React from 'react';
import clsx from  'clsx';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import SharedLayout from '../../shared/others/sharedLayout';
import { menus } from '../../data/navlinks';
import { AboutUsBannerObj } from '../../data/banners';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const TheHymn = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.about_us.items} title='The Hymn' banner={AboutUsBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                    Lyrics by: Dr. Rod Salazar 
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    All hail, Divine Word College <br />
                    Our Alma Mater dear,  <br />
                    Pure fount of truth and knowledge  <br />
                    Where God is always near.  <br />
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    Through fair and stormy weather <br />
                    Wherever we may be <br />
                    We’ll do our best together <br />
                    To live for eternity. <br />
                </Typography>
                <Typography variant='subtitle1' className={clsx(paragraph, bold)}>
                    Refrain:
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    With every breath of song we sing <br />
                    We pledge thee all our love <br />
                    And pray that God to thee may bring <br />
                    More blessings from above. <br />
                </Typography>
                <Typography variant='subtitle1' className={clsx(paragraph, bold)}>
                    (Repeat refrain)
                </Typography>
                <Typography variant='subtitle1'>
                    <Link href='#' underline='none'>DWC-Legazpi Hymn(Audio)</Link>
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default TheHymn

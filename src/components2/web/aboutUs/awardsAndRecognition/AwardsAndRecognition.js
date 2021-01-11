import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SharedLayout from '../../shared/others/sharedLayout';
import { menus } from '../../data/navlinks';
import { AboutUsBannerObj } from '../../data/banners';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const History = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.about_us.items} title='Awards & Recognition' banner={AboutUsBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                     Please visit us again as we are currently updating information on this page.
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    Thank you. 
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default History

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
    bold: {
        fontWeight: 600
    },
});

const MissionVisionGoal = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.about_us.items} title='Mission , Vision & Goal' banner={AboutUsBannerObj}>
                <Typography variant='h6' color='primary' className={bold}>
                    MISSION
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    As witness to the word, DWCL provides quality education and service and pursues a culture of excellence towards holistic human development.
                </Typography>
                <Typography variant='h6' color='primary' className={bold}>
                    VISION
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    A prestigious service-oriented Catholic educational institution with qualified, competent and committed academic and administrative personnel producing globally competitive graduates guided by moral values.
                </Typography>
                <Typography variant='h6' color='primary' className={bold}>
                    Goal
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    To become a center of Development and/or attain Level III accredicatation status for all programs/levels.
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default MissionVisionGoal

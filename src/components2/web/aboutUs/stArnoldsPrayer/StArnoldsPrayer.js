import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
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

const StArnoldsPrayer = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.about_us.items} title={`St.arnold's Prayer`}  banner={AboutUsBannerObj}>
                <Typography variant='h6' color='primary' className={ clsx(bold, paragraph) }>
                    ST.ARNOLD'S JEWEL (OPENING PRAYER)
                </Typography>
                {
                    [  
                        'L. God, Eternal truth',
                        'A. We Believe in you',
                        'L. God, our Strength and salvation',
                        'A. We trust in you',
                        'L. God, infinite goodness',
                        'A. We love you with all our heart',
                        'L. You sent the WORD into the world as our savior.',
                        'A. Make us all one in Him',
                        'L. Fill us with the Spirit of Christ',
                        'A. That we may glorify your Name. Amen',
                        'L. May the Holy Triune God Live and Reign in our Hearts',
                        'A. And in the hearts of all. Amen'
                    ].map(line => (
                        <Typography variant='subtitle1' className={paragraph}>
                            {line}
                        </Typography>
                    ))
                }
                <Typography variant='h6' color='primary' className={ clsx(bold, paragraph) }>
                    ST.ARNOLD'S MOTTO (CLOSING PRAYER)
                </Typography>
                {
                    [
                        'L. May the darkness of sin and the night of unbelief vanish before the light of the WORD and the spirit of Grace!',
                        'A. And may the Heart of Jesus live in every heart. Amen',
                        'L. Sts. Arnold Janssen and Joseph Freinademetz',
                        'A. Pray for us'
                    ].map(line => (
                        <Typography variant='subtitle1' className={paragraph}>
                            {line}
                        </Typography>
                    ))
                }

            </SharedLayout>
        </Grid>
    )
}

export default StArnoldsPrayer

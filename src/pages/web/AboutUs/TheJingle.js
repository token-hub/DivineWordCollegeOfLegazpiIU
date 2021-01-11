import React from 'react';
import clsx from  'clsx';
import Grid from '@material-ui/core/Grid';
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

const TheJingle = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.about_us.items} title='The Jingle' banner={AboutUsBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                    Composed By: Anne Kathrine A. Francia <br />
                    Arranger: James Andrew Atos <br />
                    Singer: Dianne Deang <br />
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    Our dreams are there to weave <br />
                    Our hopes are there to achieve <br />
                    There is so much time to give <br />
                    So much life to live <br />
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    <span className={bold}> Refrain </span> <br />
                    We can soar high <br />
                    So high, <br />
                    Witnessing to the word anew <br />
                    At Divine Word College <br />
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    Our dreams come true <br />
                    In excellence we yearn to see <br />
                    Persons in future we want to be <br />
                    This is a clear reality <br />
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    With Education in quality <br />
                    In this place of learning we’ll <br />
                    Realize, clearly <br />
                </Typography>
                <Typography variant='subtitle1' className={clsx(paragraph,bold)}>
                    (Repeat refrain then Bridge)
                </Typography>
                <Typography variant='subtitle1' className={clsx(paragraph,bold)}>
                    Bridge:
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    Reaching farther, it will be <br />
                    Searching harder, you will see <br />
                    Aiming higher, we will be… <br />
                    Soaring high <br />
                    So high <br />
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    Witnessing to the word anew <br />
                    At Divine Word College <br />
                    Our dreams come true(2x) <br />
                    At Divine Word College… <br />
                    Our Dreams do come true… <br />
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default TheJingle

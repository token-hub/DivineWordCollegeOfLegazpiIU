import React from 'react'
import Grid from '@material-ui/core/Grid';
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Slider} from '../../../components/molecules/web';
import { makeStyles } from '@material-ui/core/styles';
import {facilities} from '../../../assets/images';

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
        <BaseWithBannerAndOverview data={navlinks.about_us.items} title='Facilities' banner={banners.AboutUsBannerObj}>
            <Grid container justify='center'>
                <Slider data={facilities} size={size} />
            </Grid>
        </BaseWithBannerAndOverview>
    )
}

export default Facilities

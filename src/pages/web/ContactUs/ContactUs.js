import React from 'react'
import {BaseWithBanner} from '../../../components/templates/web';
import {banners} from '../../../data/web';
import {RenderUpdateForm, GoogleMap, GetInTouch} from '../../../components/molecules/web';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    left: {
        padding: '4rem 2rem 2rem'
    },
    right: {
        backgroundColor: '#1D17CE' ,
        padding: '4rem 2rem 2rem 4rem',
        width: '100%',

        [theme.breakpoints.down('sm')]: {
            paddingLeft: '2rem',
        }
    },
}))

const ContactUs = () => { 

    const {left, right} = useStyles();

    return (
        
        <BaseWithBanner full noRightGrid banner={banners.ContactUsBannerObj}>
            <Grid container item md={6} className={left} >
                <GetInTouch />
            </Grid>
            <Grid item md={6} className={right} color='primary'>
                <RenderUpdateForm />
            </Grid>
            <GoogleMap />
        </BaseWithBanner>
    )
}

export default ContactUs

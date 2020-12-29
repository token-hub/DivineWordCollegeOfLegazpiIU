import React from 'react';
import Grid from '@material-ui/core/Grid';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import Banner from '../shared/Top/banner';
import ContactUsBanner from '../../../assets/images/banners/contact-us.jpg';

const ContactUs = () => {
    return (
        <Grid container>
            <Top />
            <Banner img={ContactUsBanner} alt='Contact Us banner' />
            <Bottom />
        </Grid>
    )
}

export default ContactUs

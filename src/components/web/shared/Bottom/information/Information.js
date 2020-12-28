import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import SharedGrid from '../../others/sharedGrid';
import OurContacts from './ourContacts';
import OurAddress from './ourAddress';
import OurPortals from './ourPortals';
import OurSocialMedialinks from './ourSocialMedialinks';
import OurQuicklinks from './ourQuickLinks';

const useStyles = makeStyles(theme => ({
   root: {
       backgroundColor: '#110d7a',
       height: 'auto',
       padding: '4rem 0',
       color: 'white'
   },
   padding: {
       padding: '0 2rem',
   }
}));

const Information = () => {
    
    const { root, padding } = useStyles();

    return (
        <SharedGrid root={root}>
            <Grid container className={padding}>
                <Grid item xs={12} md={3}>
                    <OurAddress />
                </Grid>
                <Grid item xs={12} md={3}>
                    <OurContacts />
                </Grid>
                <Grid item xs={12} md={3}>
                    <OurPortals />
                    <OurSocialMedialinks />
                </Grid>
                <Grid item xs={12} md={3}>
                    <OurQuicklinks />
                </Grid>
            </Grid>
        </SharedGrid>   
    )
}

export default Information

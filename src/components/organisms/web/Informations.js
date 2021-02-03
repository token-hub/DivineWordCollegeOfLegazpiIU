import React from 'react'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {
    SharedGrid,
    OurAddress,
    OurContacts,
    OurPortals,
    OurSocialMedialinks,
    OurQuicklinks
} from '../../molecules/web';

const useStyles = makeStyles({
   root: {
       backgroundColor: '#110d7a',
       height: 'auto',
       color: 'white',
       padding: '1.5rem 0'
   },
   padding: {
       padding: '0 2rem',
   },
   spaces: {
       margin: '1rem 0',
       padding: '0 .5rem'
   }
});

const Information = () => {
    
    const {root, padding, spaces} = useStyles();

    return (
        <SharedGrid root={root}>
            <Grid container className={padding}>
                <Grid item xs={12} md={3} className={spaces}>
                    <OurAddress />
                </Grid>
                <Grid item xs={12} md={3} className={spaces}>
                    <OurContacts />
                </Grid>
                <Grid item xs={12} md={3} className={spaces}>
                    <OurPortals />
                    <OurSocialMedialinks />
                </Grid>
                <Grid item xs={12} md={3} className={spaces}>
                    <OurQuicklinks />
                </Grid>
            </Grid>
        </SharedGrid>   
    )
}

export default Information

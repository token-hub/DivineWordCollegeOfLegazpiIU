import React from 'react'
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import {BackToTop} from '../../molecules/web';
import {
    Header,
    Navbar,
    Appbar,
    Informations,
    Credits
} from '../../organisms/web';

const Base = ({ children }) => {
    return (
        <Grid container>
            <span id='very-top' />
            {/* Top  */}
            <Header />
            <Hidden smDown><Navbar /></Hidden>
            <Hidden mdUp><Appbar /></Hidden>
            
            { children }

            {/* Bottom */}
            <Informations />
            <Credits />
            <BackToTop />
        </Grid>
    )
}

export default Base

import React from 'react'
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
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
             {/* Top  */}
            <Header />
            <Hidden smDown><Navbar /></Hidden>
            <Hidden mdUp><Appbar /></Hidden>
            
            { children }

            {/* Bottom */}
            <Informations />
            <Credits />
        </Grid>
    )
}

export default Base

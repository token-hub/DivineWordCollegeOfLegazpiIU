import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { menus } from '../../data/navlinks';
import SharedLayout from '../../shared/others/sharedLayout';
import { StudentServicesBannerObj } from '../../data/banners';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const Canteen = () => {

    const {paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.student_services.items} title='Canteen' banner={StudentServicesBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                    The DWCL school canteen serves the DWCL community on “pay-as-you-order” and “self-service” basis. It ensures that healthy and affordable meals are available to students and personnel. Concessionaires are required to submit periodic documents such as sanitation permit and health records of food handlers. It is fully airconditioned.
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default Canteen

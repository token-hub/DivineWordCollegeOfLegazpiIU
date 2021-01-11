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

const Registrar = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.student_services.items} title='Registrar' banner={StudentServicesBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                    The Registrar’s Office coordinates and controls all activities involving student registration (validation of credentials and enrolment) transfer, and graduation. The office maintains a Records Section. The services of the Records Section include issuance of transcript of records, certifications of academic status and other related documents.
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default Registrar

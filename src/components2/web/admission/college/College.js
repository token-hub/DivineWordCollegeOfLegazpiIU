import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import RenderList from '../../shared/others/renderList';
import { menus } from '../../data/navlinks';
import SharedLayout from '../../shared/others/sharedLayout';
import { AdmissionBannerObj } from '../../data/banners';
import { procedureA, procedureB } from '../../data/admission/college';


const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const College = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.admission.items} title='College' banner={AdmissionBannerObj}>
                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    ENROLLMENT PROCEDURE
                </Typography>

                <RenderList header='A. NEW STUDENTS (TRANSFEREES)' data={procedureA} />
                <RenderList header='B. OLD STUDENTS' data={procedureB} />
            </SharedLayout>
        </Grid>
    )
}

export default College

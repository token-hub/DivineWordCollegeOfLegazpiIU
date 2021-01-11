import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import RenderList from '../../shared/others/renderList';
import SharedLayout from '../../shared/others/sharedLayout';
import { menus } from '../../data/navlinks';
import { AdmissionBannerObj } from '../../data/banners';
import { requirements } from '../../data/admission/seniorHighSchool';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const History = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.admission.items} title='Senior High School' banner={AdmissionBannerObj}>
                <RenderList header='Admission Requirements' data={requirements} />
            </SharedLayout>
        </Grid>
    )
}

export default History

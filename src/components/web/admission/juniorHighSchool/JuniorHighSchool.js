import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import SharedLayout from '../../shared/others/sharedLayout';
import { menus } from '../../data/navlinks';
import { AdmissionBannerObj } from '../../data/banners';
import RenderList from '../../shared/others/renderList';
import { grade7, transferees } from '../../data/admission/juniorHighSchool';
import { makeStyles } from '@material-ui/core/styles';

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
            <SharedLayout data={menus.admission.items} title='Junior High School' banner={AdmissionBannerObj}>
                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    Admission Requirements
                </Typography>
                <RenderList header='For Incoming Grade 7:' data={grade7} />
                <RenderList header='For Transferees:' data={transferees} />
            </SharedLayout>
        </Grid>
    )
}

export default History

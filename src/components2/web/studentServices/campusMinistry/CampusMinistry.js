import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import RenderList from '../../shared/others/renderList';
import RenderTable from '../../shared/others/renderTable';

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

const CampusMinistry = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.student_services.items} title='Campus Ministry' banner={StudentServicesBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                    This office is concerned with the pastoral needs of the school community. It is in-charge of the different religious activities, such as masses, recollections and retreats, etc. and ministers to the spiritual needs of the students, faculty and non-teaching personnel.
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    The Campus Ministry Office is primarily tasked with the building of relationships in the school community and acts as agent of reconciliation. It also monitors the witnessing, worshipping and serving aspects of the community’s faith life. This office is headed by the Campus Chaplain, assisted by the SVD priests, regents, theology teachers, and student assistants.
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default CampusMinistry

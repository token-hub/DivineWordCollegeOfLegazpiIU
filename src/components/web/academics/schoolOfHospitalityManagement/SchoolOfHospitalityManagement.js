import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import RenderList from '../../shared/others/renderList';
import { menus } from '../../data/navlinks';
import SharedLayout from '../../shared/others/sharedLayout';
import RenderTable from '../../shared/others/renderTable/RenderTable';

import { AcademicsBannerObj } from '../../data/banners';
import {
    objectives,
    programs,
    facultyAndStaff
} from '../../data/academics/schoolOfHospitalityManagement';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const SchoolOfHospitalityManagement = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.academics.items} title='School of Hospitality Management' banner={AcademicsBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                    The School of Hospitality Management (SOHM) through its three sections, namely: Hotel and Restaurant Management, Culinary Arts, and Travel and Tourism, commits itself to the Vision, Mission, and Goal of Divine Word College of Legazpi through the holistic development of its students for a wide range of professional positions in the hospitality industry. It seeks to provide hands-on experiences emphasizing the acquisition of proficiency in service management, tourism management, and culinary skills.
                </Typography>
                <RenderList header='Programs Offered:' data={objectives} />

                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    Programs Offered:
                </Typography>

                <RenderList header='Bachelor of Science in Hospitality Management (BSHM)' data={programs} />

                <RenderTable tableBody={facultyAndStaff} size='small' />
            </SharedLayout>
        </Grid>
    )
}

export default SchoolOfHospitalityManagement

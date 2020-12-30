import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import RenderList from '../../shared/others/renderList';
import { menus } from '../../data/navlinks';
import SharedLayout from '../../shared/others/sharedLayout';
import { AcademicsBannerObj } from '../../data/banners';

import {
    objectives,
    courses,
    vocational,
    facultyAndStaff
} from '../../data/academics/seniorHighSchoolDepartment';
import RenderTable from '../../shared/others/renderTable/RenderTable';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const SeniorHighSchoolDepartment = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.academics.items} title='Senior High School Department' banner={AcademicsBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                    The Senior High School Department aims to develop and enhance the talents and skills of the students to be locally and globally competitive; to prepare them for work, entrepreneurship, or higher education; and to mold them so that they may become citizens who have a heart for service and a dream for the Filipino nation.
                </Typography>

                <RenderList header='Specific Objectives' data={objectives} />

                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    COURSES OFFERED:
                </Typography>

                <RenderList header='ACADEMIC TRACK' data={courses} />

                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    TECHNICAL VOCATIONAL TRACK
                </Typography>
                <RenderList header='HE – Home Economics' data={vocational} />


                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    List of Faculty and Staff (S.Y. 2019-2020)
                </Typography>
                <RenderTable tableBody={facultyAndStaff} size='small' /> 
            </SharedLayout>
        </Grid>
    )
}

export default SeniorHighSchoolDepartment

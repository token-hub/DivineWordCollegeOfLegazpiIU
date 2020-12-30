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
    program,
    facultyAndStaff
} from '../../data/academics/gradeSchoolDepartment';
import RenderTable from '../../shared/others/renderTable/RenderTable';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const GradeSchoolDepartment = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.academics.items} title='Grade School Department' banner={AcademicsBannerObj}>
                 <Typography variant='subtitle1' className={paragraph}>
                    In line with the educational mission of the Divine Word College of Legazpi and its goal to fully develop the students, the Grade School Department aims to set the foundation to educate the young towards integral Christian formation and to prepare them for secondary education.
                </Typography>

                <RenderList header='Specific Objectives:' data={objectives} />
                <RenderList header='PROGRAMS OFFERED:' data={objectives} />
                <Typography variant='subtitle1' color='primary' className={paragraph}>
                    List of Faculty and Staff (S.Y. 2019-2020)
                </Typography>
                <RenderTable tableBody={facultyAndStaff} size='small' />
            </SharedLayout>
        </Grid>
    )
}

export default GradeSchoolDepartment

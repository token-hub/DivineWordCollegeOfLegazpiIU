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
    newStudents,
    programs,
    facultyAndStaff
} from '../../data/academics/juniorHighSchool';

import RenderTable from '../../shared/others/renderTable/RenderTable';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const JuniorHighSchoolDepartment = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.academics.items} title='The seal' banner={AcademicsBannerObj}>
                 <Typography variant='subtitle1' className={paragraph}>
                    In keeping with the vision, mission and goals of the Divine Word College of Legazpi, the general objective of the school is the total and integral integral development of the individual through the integration of Catholic moral education in the curriculum for constructive ethical leadership in the community in particular, and in the society in general.
                </Typography>

                <RenderList header='A. NEW STUDENTS (TRANSFEREES)' data={newStudents} />
                <RenderList header='PROGRAMS OFFERED:' data={programs} />
                <RenderTable tableBody={facultyAndStaff} size='small' header='List of Faculty and Staff (S.Y. 2019-2020)' />
            </SharedLayout>
        </Grid>
    )
}

export default JuniorHighSchoolDepartment

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
    courses, 
    facultyAndStaff
} from '../../data/academics/schoolOfEducationArtsAndSciences';
import RenderTable from '../../shared/others/renderTable/RenderTable';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const SchoolOfEducationArtsAndSciences = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.academics.items} title='School of Education, Arts and Sciences' banner={AcademicsBannerObj}>
                <RenderList header='Courses Offered:' data={courses} />
                <Typography variant='subtitle1' className={paragraph}>
                    Non Degree courses: Certificate in College Teaching (CCT)
                </Typography>
                <RenderTable tableBody={facultyAndStaff} size='small' header='List of Faculty and Staff (S.Y. 2019-2020)'/>
            </SharedLayout>
        </Grid>
    )
}

export default SchoolOfEducationArtsAndSciences

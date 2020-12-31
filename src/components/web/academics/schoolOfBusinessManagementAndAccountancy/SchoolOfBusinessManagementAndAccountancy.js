import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import RenderList from '../../shared/others/renderList';
import RenderTable from '../../shared/others/renderTable';
import { menus } from '../../data/navlinks';
import SharedLayout from '../../shared/others/sharedLayout';
import { AcademicsBannerObj } from '../../data/banners';
import {
    objectives,
    courses,
    facultyAndStaff
} from '../../data/academics/schoolOfBusinessManagementAndAccountancy';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const SchoolOfBusinessManagementAndAccountancy = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.academics.items} title='School of Business Management & Accountancy' banner={AcademicsBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                    The School of Business Management and Accountancy (SBMA) is committed to excellence and dynamism in teaching-learning-research processes across all areas of discipline in business and public. It seeks to produce socially responsible and service-oriented graduates, imbued with the DWCL core values.
                </Typography>

                <RenderList header='Specific Objectives:' data={objectives} />
                <RenderList header='Courses Offered:' data={courses} />
                <RenderTable tableBody={facultyAndStaff} size='small' />
            </SharedLayout>
        </Grid>
    )
}

export default SchoolOfBusinessManagementAndAccountancy

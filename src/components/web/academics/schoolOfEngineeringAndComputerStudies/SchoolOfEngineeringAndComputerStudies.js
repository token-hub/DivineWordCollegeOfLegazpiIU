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
    objectivesIT,
    facultyAndStaff,
    courses
} from '../../data/academics/schoolOfEngineeringAndComputerStudies';
import RenderTable from '../../shared/others/renderTable/RenderTable';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const SchoolOfEngineeringAndComputerStudies = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.academics.items} title='School of Engineering & Computer Studies' banner={AcademicsBannerObj}>
                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    Engineering Programs
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    The engineering programs (civil and electrical engineering) aim to prepare the graduates for a professional engineering career in infrastructure, planning, and development in the built environment. The graduates must not only have the basic foundation of the civil engineering or electrical engineering profession but they should also be responsive to the economic, social and environmental demands of their work.
                </Typography>
                <RenderList header='Specific Objectives:' data={objectives} />

                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    Computer Studies Programs
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    The computer studies programs aim to produce globally competitive information technology (IT) professionals and socially responsible technopreneurs guided by the Divinian core values. The computer studies programs prepare students to become IT professionals and researchers who are proficient in designing and developing computing solutions, well-versed in application installation, operation, development, maintenance and administration, and familiar with hardware installation, operation, and maintenance.
                </Typography>
                <RenderList header='Specific Objectives: Develop IT professionals who can:' data={objectivesIT} />

                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    Courses Offered:
                </Typography>
                <RenderList header='Courses Offered:' data={courses} />

                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    List of Faculty and Staff (S.Y. 2019-2020)
                </Typography>
                
                <RenderTable tableBody={facultyAndStaff} size='small' />
               
            </SharedLayout>
        </Grid>
    )
}

export default SchoolOfEngineeringAndComputerStudies

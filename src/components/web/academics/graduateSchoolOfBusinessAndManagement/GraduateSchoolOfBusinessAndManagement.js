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
    programs, 
    requirements,
    facultyAndstaff
} from '../../data/academics/graduateSchoolOfBusinessAndManagement';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const GraduateSchoolOfBusinessAndAccountancy = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.academics.items} title='Graduate School of Business and Management' banner={AcademicsBannerObj}>
                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    Being the highest level in the institution, the Graduate School of Business and Management aims to develop leadership and expertise in business, management and community development as a competent human resource base, needed for regional and national development.
                </Typography>

                <RenderList header='Specific objectives:' data={objectives} />
                <RenderList header='Programs Offered:' data={programs} />
                <RenderList header='Admission Requirements' data={requirements} />

                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    List of Faculty and Staff (S.Y. 2019-2020)
                </Typography>
                <RenderTable tableBody={facultyAndstaff} size='small' />
            </SharedLayout>
        </Grid>
    )
}

export default GraduateSchoolOfBusinessAndAccountancy

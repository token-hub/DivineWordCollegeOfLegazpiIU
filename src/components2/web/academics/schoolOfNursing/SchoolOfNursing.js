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
    facultyAndStaff
} from '../../data/academics/schoolOfNursing';
import RenderTable from '../../shared/others/renderTable/RenderTable';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const SchoolOfNursing = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.academics.items} title='School of Nursing' banner={AcademicsBannerObj}>
                <Typography variant='subtitle1' className={paragraph} >
                    The School of Nursing (SON) aims to develop highly competent beginning nurse clinicians able to work in any healthcare setting and cater to various clientele: individual, family, and community.
                </Typography>
               
                <RenderList header='Specific Objectives:' data={objectives} />
                <RenderList header='Course Offered:' data={courses} />
        

                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    List of Faculty and Staff (S.Y. 2019-2020)
                </Typography>

                <RenderTable tableBody={facultyAndStaff} size='small' />
            </SharedLayout>
        </Grid>
    )
}

export default SchoolOfNursing

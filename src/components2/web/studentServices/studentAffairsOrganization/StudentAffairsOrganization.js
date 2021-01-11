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

const StudentAffairsOrganization = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.student_services.items} title='Student Affairs Organization' banner={StudentServicesBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                    This office is devoted to creating an integrated learning experience that will help students reach their educational, social, personal, and professional aspirations. In consonance with the institution’s vision mission, the Office aims to provide occasions for growth and advancement through cultural, spiritual, athletic, co-curricular, and extra-curricular activities with the end in view that students may develop into well-rounded individuals. It endeavors to nurture a campus environment where academic and non-academic pursuits are balanced thereby making campus life more enriching, interesting, and worthwhile for students.
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    The role of the Student Affairs Office is twofold. First, it functions as an administrative office and secondly, it aims to serve the needs of students in the many aspects of campus life. Consequently, in addition to its function of overseeing student activities and interests, the office operates to promulgate and/or enforce institutional and/or CHED policies, rules and regulations concerning student organizations, programs, activities, student comportment, and student discipline.
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default StudentAffairsOrganization

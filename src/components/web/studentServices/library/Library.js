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
import {
    objectives, 
    collection,
    rulesAndRegulations
} from '../../data/studentServices/library';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const Library = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.student_services.items} title='Library' banner={StudentServicesBannerObj}>
                <Typography variant='h6' color='primary' className={clsx(paragraph, bold)}>
                    The Mission of the DWCL Library
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    DWCL Library is committed to provide dynamic learning environment that supports the educational, intellectual and spiritual development of its academic community through systematic and easy access to variety of information sources
                </Typography>
                <Typography variant='h6' color='primary' className={clsx(paragraph, bold)}>
                    General Objective:
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    To provide responsive, systematic and effective means of acquiring, storing, organizing and preserving documentary references for easy access and retrieval of information by the students, faculty, staff, and administration.
                </Typography>
                <Typography variant='h6' color='primary' className={clsx(paragraph, bold)}>
                    Specific objectives:
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    Provide current and appropriate library materials and databases that support the academic curriculum;
                </Typography>
                <RenderList data={objectives} />
                <Typography variant='h6' color='primary' className={clsx(paragraph, bold)}>
                    Library Service Hours
                </Typography>
                <Typography variant='h6' color='primary' className={clsx(paragraph, bold)}>
                    COLLEGE LIBRARY
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    Regular Days – Monday to Friday – 8:00 – 7:00 <br />
                    Saturday – 8:00 – 12:00 <br />
                    Summer & Term Breaks – Monday to Friday – 8:00 – 12:00 to 1:00 – 5:00 <br />
                    Saturday – 8:00 – 12:00 <br />
                </Typography>
                <Typography variant='h6' color='primary' className={clsx(paragraph, bold)}>
                    GRADUATE LIBRARY
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    Regular Days- Monday to Friday – 8:00 – 12:00 to 1:30 – 6:00 <br />
                    Saturday – 8:00 – 5:00 <br />
                </Typography>
                <RenderList header='Access to DWCL Libraries’ Collection' data={collection} />
                <RenderList header='RULES AND REGULATIONS' data={rulesAndRegulations} />
            </SharedLayout>
        </Grid>
    )
}

export default Library

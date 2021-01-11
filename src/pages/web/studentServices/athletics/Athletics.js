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

const Athletics = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.student_services.items} title='Athletics' banner={StudentServicesBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                    This unit stresses wider participation of students in intramural games, promotes sports through organized matches in both indoor and outdoor games, maintains and lends sports equipment.
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default Athletics

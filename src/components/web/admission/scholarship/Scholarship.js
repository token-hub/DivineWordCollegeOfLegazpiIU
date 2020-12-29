import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import RenderList from '../../shared/others/renderList';
import { menus } from '../../data/navlinks';
import SharedLayout from '../../shared/others/sharedLayout';
import { AdmissionBannerObj } from '../../data/banners';

import {
    programs,
    loans,
    ched,
    unifast
} from '../../data/admission/scholarship';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const Scholarship = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.admission.items} title='Scholarship' banner={AdmissionBannerObj}>
                <RenderList header='Scholarship Program' data={programs} />
                <RenderList header='Other Scholarship grants and loans' data={loans} />
                <RenderList header='CHED Scholarship Programs' data={ched} />
                <RenderList header='UNIFAST (Republic Act 10931)' data={unifast} />
                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    TUITION FEE DISCOUNTS ARE NOT TO BE PRESUMED.
                </Typography>
                <Typography variant='subtitle1'>
                    All scholarship grants are to be applied or renewed every semester during enrollment time. The members of the Scholarship Committee are most willing to assist and entertain inquiries anytime during office hours.
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default Scholarship

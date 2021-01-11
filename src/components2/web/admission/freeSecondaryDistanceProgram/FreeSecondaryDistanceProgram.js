import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import SharedLayout from '../../shared/others/sharedLayout';
import { menus } from '../../data/navlinks';
import { AdmissionBannerObj } from '../../data/banners';
import RenderList from '../../shared/others/renderList';
import {
    minAge,
    requirements
} from '../../data/admission/freeSecondaryDistanceProgram';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const FreeSecondaryDistanceProgram = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.admission.items} title='Free Secondary Distance Program' banner={AdmissionBannerObj}>
                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    Requirements for the Incoming First Year and Transferees qweqw
                </Typography>
                <Typography variant='subtitle1' className={clsx(paragraph, bold)}>
                    Basic Requirements
                </Typography>

                <RenderList header='Minimum age required for:' data={minAge} />
                <RenderList header='Other Requirements::' data={requirements} />

            </SharedLayout>
        </Grid>
    )
}

export default FreeSecondaryDistanceProgram

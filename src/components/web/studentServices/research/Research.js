import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { StudentServicesBannerObj } from '../../data/banners';

import SharedLayout2 from '../../shared/others/sharedLayout2';

const useStyles = makeStyles(theme =>({
    paragraph: {
        marginBottom: '1.5rem'
    },
}));

const Research = () => {

    const {paragraph} = useStyles();

    return (
        <SharedLayout2 banner={StudentServicesBannerObj} >
            <Typography variant='subtitle1' className={paragraph} >
                Please visit us again as we are currently updating information on this page. <br />
                Thank you.
            </Typography>
        </SharedLayout2>
    )
}

export default Research

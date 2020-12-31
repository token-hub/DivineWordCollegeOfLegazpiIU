import React from 'react';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import { AlumniBannerObj } from '../data/banners';
import SharedLayout2 from '../shared/others/sharedLayout2';
import { makeStyles } from '@material-ui/core/styles';
import RenderTable from '../shared/others/renderTable';
import { officers } from '../data/alumni';

const useStyles = makeStyles({
    paragraph: {
        marginBottom: '1.5rem'
    },
    bold: {
        fontWeight: 600
    },
})

const Alumni = () => {

    const {paragraph, bold} = useStyles();

    return (
        <SharedLayout2 banner={AlumniBannerObj}>
            <Typography variant='h6' color='primary' className={clsx(paragraph, bold)}>
                LIST OF DWCL GENERAL ALUMNI ASSOCAITION INC.
            </Typography>
        
        <RenderTable header='DWCL GAA OFFICERS (SY 2018-2020)' tableBody={officers} size='small' />
        </SharedLayout2>
    )
}

export default Alumni

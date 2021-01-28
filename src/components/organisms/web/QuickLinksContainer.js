import React from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import {Quicklinks} from '../../molecules/web';
import {makeStyles} from '@material-ui/core/styles';
import {quicklinks} from '../../../data/web/index';

const useStyles = makeStyles({
    quickLinksContainer: {
        width: '33.33%',
        padding: '2rem 2rem',
    },
    containerLeft: {
        backgroundColor: '#389e61',
        "&:hover": {
            backgroundColor: '#34905A',  
        }
    },
    containerMiddle: {
        backgroundColor: '#5b5959',
        "&:hover": {
            backgroundColor: '#4F4D4D',  
        }
    },
    containerRight: {
        backgroundColor: '#1D17CE',
        "&:hover": {
            backgroundColor: '#1411af',  
        }
    },
})
const QuickLinksContainer = () => {
    
    const { academicPrograms, whyChoose, admission} = quicklinks;

    const {quickLinksContainer, containerLeft, containerRight, containerMiddle} = useStyles();

    return (
        <>
         <Grid item xs={12} md={4} className={clsx(quickLinksContainer, containerLeft) }>
            <Quicklinks title='Why Choose Divine Word' data={whyChoose} />
         </Grid>
         <Grid item xs={12} md={4} className={clsx(quickLinksContainer, containerMiddle)}>
             <Quicklinks title='Academic Programs' data={academicPrograms} />
        </Grid>
        <Grid item xs={12} md={4} className={clsx(quickLinksContainer, containerRight)}>
            <Quicklinks title='Admissions' data={admission} />
            </Grid>
        </>
    )
}

export default QuickLinksContainer

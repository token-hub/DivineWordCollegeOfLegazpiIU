import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import Banner from '../shared/Top/banner';
import CareerBanner from '../../../assets/images/banners/career.jpg';
import SharedGrid from '../shared/others/sharedGrid';
import { makeStyles } from '@material-ui/core/styles';
import JobStreet from '../../../assets/images/others/jobstreet.jpg';
import Jobs180 from '../../../assets/images/others/jobs180.jpg';
import clsx from  'clsx';

const useStyles = makeStyles(theme =>({
    root: {
		width: '100%',
        height: 'auto',
        padding: '2rem',

        [theme.breakpoints.only('xs')]: {
            padding: '2rem 0'
        }
    },
    image: {
        maxHeight: '100%',
        width: '100%',
        background: 'cover'
    },
    left: {
        heigth: 500,
        padding: '0 2rem',
    },
    right: {
        heigth: 500,
        padding: '0 2rem',

        [theme.breakpoints.only('md')] : {
            padding: '0',
        },
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
    bold: {
        fontWeight: 600
    },
    imageContainer : {
        height: '100%',
    }
}));

const Career = () => {
    
    const { root, image, left, right, paragraph, bold } = useStyles();

    return (
        <Grid container>
            <Top />
            <Banner img={CareerBanner} alt={'Career'} />
           <SharedGrid root={root} >
            <Grid item md={8} className={left} >
                <Typography variant='h5' color='primary' className={clsx(paragraph, bold)}>
                    Job Oppotunities
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    Please visit us again as we are currently updating information on this page. <br />
                    Thank you.
                </Typography>
            </Grid>
            <Grid item md={4} className={right}> 
                <img src={JobStreet} alt='Jobs Street image' className={image} />
                <img src={Jobs180} alt='Jobs 180 image' className={image} />
            </Grid>
            </SharedGrid>
            <Bottom />
        </Grid>
    )
}

export default Career

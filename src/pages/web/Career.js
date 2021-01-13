import React from 'react'
import {BaseWithBanner} from '../../components/templates/web';
import {banners} from '../../data/web';
import {Paragraph, Image} from '../../components/atoms/web';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {jobstreet, jobs180} from '../../assets/images';

const useStyles = makeStyles(theme => ({
    root: {
		width: '100%',
        height: 'auto',
        padding: '2rem',

        [theme.breakpoints.only('xs')]: {
            padding: '2rem 0'
        }
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
}));

const Career = () => { 

    const {left, right, root} = useStyles();

    return (
        <BaseWithBanner root={root} banner={banners.CareerBannerObj}>
            <Grid item md={8} className={left} >
                <Paragraph variant='h4' color='primary' bold>Job Oppotunities</Paragraph>
                <Paragraph>
                    Please visit us again as we are currently updating information on this page. <br />
                    Thank you.
                </Paragraph>
            </Grid>
            <Grid item md={4} className={right}> 
                <Image source={jobstreet} alt='Jobs Street image'/>
                <Image source={jobs180} alt='Jobs 180 image'/>
                </Grid>
        </BaseWithBanner>
    )
}

export default Career

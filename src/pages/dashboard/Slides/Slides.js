import React, {useContext, useEffect} from 'react'
import {SlideContainer} from '../../../components/organisms/dashboard';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {setObjects} from '../../../helpers';
import {DashboardContext} from '../../../contexts';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import { Paragraph } from '../../../components/atoms/dashboard';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    deleteButton: {
        background: '#e50000',
        color: 'white',
        "&:hover":{
            background: '#c10000',
        }
    }
}))

const Slides = () => {
    const {deleteButton} = useStyles();
    const {states:{slides}, getSlides, deleteSlide} = useContext(DashboardContext);
    const isSlidesEmpty = Object.keys(slides.all).length < 1;

    useEffect(()=>{
        if (isSlidesEmpty) {
            getSlides();
        }
    }, []);

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header='Slides' link='/dashboard/slide' linkTitle='Add slide'>
            <>
               {!isSlidesEmpty && slides.all.map((slides, index) => <SlideContainer key={index} slides={slides}/>)}
               {!isSlidesEmpty && <Grid container item justify='flex-end'>
                    <Button variant='contained' onClick={deleteSlide} className={deleteButton}>Delete</Button>
                </Grid>}
                {isSlidesEmpty && <p style={{ textAlign: 'center' }}><i> -- No slides yet --</i> </p>}
            </>
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default Slides

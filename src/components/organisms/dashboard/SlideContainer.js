import React from 'react'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {RenderSlide} from '../../molecules/dashboard';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    container: {
        width: '100%',
        height: '100%',
        margin:' .3rem 0'
    },
});

const SlideContainer = ({slides}) => {

    const {root, container} = useStyles();
    
    return (
        <>
            <Grid container direction='column' className={root}>
                <Grid container item className={container}>
                {slides.length > 0 && slides.map((slide, index) => 
                    <RenderSlide key={index} {...slide} />
                )}
                </Grid>
            </Grid>
        </>
    )
}

export default SlideContainer

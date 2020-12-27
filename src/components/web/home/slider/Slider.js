import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core';
import {images} from '../../data/images';
import {makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme =>({
    paper: {
        width: '100%',
    },
    image: {
        maxHeight: '100%',
        width: '100vw',
        background: 'cover'
    },
    indicators: {
        marginTop: '-3rem'
    },
    indicatorContainer: {
        position: 'absolute',
        margin: 0
    }
}));

const Slider = () => {

    const {paper, image, indicators, indicatorContainer} = useStyle();

    const { sliderImages } = images;

    return (
        <Carousel
            autoPlay={false}
            indicators={true}
            animation="slide"
            navButtonsAlwaysVisible={true}
            indicatorProps={{ className: indicators }}
            activeIndicatorProps={{ className: indicators }}
            indicatorContainerProps={{ className: indicatorContainer }}
            next={()=>{}}
            prev={()=>{}}
        >
             {
                sliderImages.map( ({alt, img}, index) => {
                    return (
                        <Paper key={index} className={paper}>
                            <img alt={alt} src={img} className={image} />
                        </Paper>
                    )
                } )
            }
           
        </Carousel>
    )
}
export default Slider

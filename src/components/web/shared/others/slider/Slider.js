import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Grid, Paper} from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme =>({
    paper: {
        width: '100%',
        height: '100',
    },
    image: {
        height: '100%',
        width: '100%',
        backgroundSize: 'cover'
    },
    indicators: {
        marginTop: '-3rem'
    },
    indicatorContainer: {
        position: 'absolute',
        margin: 0
    },
    carousel: {
        height: '100%',
        width: '100%',
    }
}));

const Slider = ({ data, size = null }) => {

    const {paper, image, indicators, indicatorContainer, carousel} = useStyle();

    const setSize = size ? size : carousel;

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
            className={setSize}
        >
            {
                data.map( ({alt, img}, index) => {
                    return (
                        <img alt={alt} src={img} key={index} className={image} />
                    )
                } )
            }
        </Carousel>
    )
}
export default Slider

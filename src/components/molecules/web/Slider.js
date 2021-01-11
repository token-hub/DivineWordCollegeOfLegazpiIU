import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {makeStyles } from '@material-ui/core/styles';
import {Image} from '../../atoms/web';

const useStyle = makeStyles(theme =>({
    image: {
        height: '100%',
        width: '100%',
        backgroundSize: 'cover',
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
        backgroundSize: 'cover',
    }
}));

const Slider = ({ data, size = null }) => {

    const {image, indicators, indicatorContainer, carousel} = useStyle();

    const setSize = size ? size : carousel;

    return (
          <Carousel
            autoPlay={true}
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
                        <Image alt={alt} source={img} key={index} />
                    )
                } )
            }
        </Carousel>
    )
}
export default Slider

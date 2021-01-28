import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {makeStyles} from '@material-ui/core/styles';
import {Image} from '../../atoms/web';
import {EnrollmentPortal} from '../../molecules/web';

const useStyle = makeStyles({
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
        position: 'relative'
    },
});

const Slider = ({ data, size = null }) => {

    const {indicators, indicatorContainer, carousel, portal, link} = useStyle();

    const setSize = size ? size : carousel;

    return (
        <div className={setSize}>
            <EnrollmentPortal />
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
            >          
                {
                    data.map( ({alt, img}, index) => {
                        return (
                            <Image alt={alt} source={img} key={index} />
                        )
                    } )
                }
            </Carousel>
        </div>
    )
}
export default Slider

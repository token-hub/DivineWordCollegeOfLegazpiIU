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
    
    carousel: {
        height: '100%',
        width: '100%',
        backgroundSize: 'cover',
        position: 'relative'
    },
});

const Slider = ({ data, size = null }) => {

    const {indicators, indicatorContainer, carousel} = useStyle();

    const setSize = size ? size : carousel;

    return (
        <div className={setSize}>
            <EnrollmentPortal />
            <Carousel
                autoPlay={false}
                indicators={false}
                animation="slide"
                navButtonsAlwaysVisible={true}
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

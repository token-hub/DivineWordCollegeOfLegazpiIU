import React, {useContext, useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import {makeStyles} from '@material-ui/core/styles';
import {Image} from '../../atoms/web';
import {EnrollmentPortal} from '../../molecules/web';
import {WebContext} from '../../../contexts';
import systemCover from '../../../assets/images/others/SYSTEMCOVER.jpg';
import {unchunkArrayValues} from '../../../helpers';

const useStyle = makeStyles({
    image: {
        height: '450px',
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

    const {carousel, image} = useStyle();

    const {getSlides, states:{slides:{all}}} = useContext(WebContext);

    const setSize = size ? size : carousel;

    const isSlidesIsEmpty = Object.keys(all).length < 1;

    useEffect(()=> {
        if (isSlidesIsEmpty) {
            getSlides();
        }
    });

    const renderCorousel = () => {
        return (
            <Carousel
                autoPlay={false}
                indicators={false}
                animation="slide"
                navButtonsAlwaysVisible={true}
                next={()=>{}}
                prev={()=>{}}
            >          
                {!isSlidesIsEmpty && unchunkArrayValues(all).map(({alt, src}, index) => {
                   return (
                       <div className={image} key={index}>
                        <Image alt={alt} source={src}  />
                       </div>
                   ) 
                })}
            </Carousel>
        )
    }

    const renderDefaultSlide = () => {
        return (
            <Image alt='default slide' source={systemCover} />
        )
    }

    return (
        <div className={setSize}>
            <EnrollmentPortal />
            {isSlidesIsEmpty ? renderDefaultSlide() : renderCorousel()}
        </div>
    )
}
export default Slider

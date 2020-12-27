import systemCover from '../../../../assets/images/others/SYSTEMCOVER.jpg';
import systemCoverTablet from '../../../../assets/images/others/SYSTEMCOVER-TABLET.jpg';
import psychometrician from '../../../../assets/images/others/PSYCHOMETRICIAN.jpg';
import cpa from '../../../../assets/images/others/CPA.jpg';
import librarian from '../../../../assets/images/others/librarian.jpg';

const setImage = (alt, img) => {
    return { alt, img };
}

const sliderImages = [
    setImage('System cover', systemCover),
    setImage('Psychometrian', psychometrician),
    setImage('CPA', cpa),
    setImage('Librarian', librarian),
]

const others = [
    setImage('System cover', systemCover),
    setImage('System cover tablet', systemCoverTablet),
]

export const images = { 
    sliderImages,
    others
}
import React from 'react'
import {Paragraph} from '../../../../components/atoms/web';
import image1 from '../../../../assets/images/announcements/june-16-2020 administrative-guidelines-on-entry-01.jpg';
import image2 from '../../../../assets/images/announcements/june-16-2020 administrative-guidelines-on-entry-02.jpg';


const Administrative = () => {
    return <>
        <img src={image1} alt='image 1' style={{ margin: '1rem 0' }} />
        <img src={image2} alt='image 2' style={{ margin: '1rem 0' }} />
    </>
}

export default Administrative

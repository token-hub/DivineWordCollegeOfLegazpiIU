import React from 'react'
import {Image} from '../../../../components/atoms/web';
import image1 from '../../../../assets/images/announcements/june-16-2020 administrative-guidelines-on-entry-01.jpg';
import image2 from '../../../../assets/images/announcements/june-16-2020 administrative-guidelines-on-entry-02.jpg';

const Administrative = () => {
    return <>
        <Image source={image1} alt='1' style={{ margin: '1rem 0' }} />
        <Image source={image2} alt='2' style={{ margin: '1rem 0' }} />
    </>
}

export default Administrative

import React from 'react'
import {Paragraph} from '../../../../components/atoms/web';

import image1 from '../../../../assets/images/announcements/june-23-2020 school-year-2020-2021-basic-ed-01.jpg';
import image2 from '../../../../assets/images/announcements/june-23-2020 school-year-2020-2021-basic-ed-02.jpg';
import image3 from '../../../../assets/images/announcements/june-23-2020 school-year-2020-2021-basic-ed-03.jpg';

const BasicEducation = () => {
    return <>
        <img src={image1} alt='image 1' style={{ margin: '1rem 0' }} />
        <img src={image2} alt='image 2' style={{ margin: '1rem 0' }} />
        <img src={image3} alt='image 3' style={{ margin: '1rem 0' }} />
    </>
}

export default BasicEducation

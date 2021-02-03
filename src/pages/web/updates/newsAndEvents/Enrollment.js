import React from 'react'
import {Paragraph} from '../../../../components/atoms/web';
import {Image} from '../../../../components/atoms/web';

import image from '../../../../assets/images/newsAndEvents/july-01-2020 college-and-graduate-school-enrollment.jpg';

const Enrollment = () => {
    return <>
        <Paragraph>
            The College Department and Graduate School will be accepting enrollment for Old, New, Transferees and Returning Students on July 6 - 31, 2020.
        </Paragraph>
        <Paragraph>Let DWCLegazpi help you to prepare for a brighter future.</Paragraph>
        <Paragraph>Your Success... Our Word!</Paragraph>
        <Image source={image} style={{ marginBottom: '1rem' }} alt='enrollment' />
    </>
}

export default Enrollment
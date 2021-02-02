import React from 'react'
import {Paragraph} from '../../../../components/atoms/web';
import {Image} from '../../../../components/atoms/web';

import image1 from '../../../../assets/images/newsAndEvents/july-12-2020 training-online-class-01.jpg';
import image2 from '../../../../assets/images/newsAndEvents/july-12-2020 training-online-class-02.jpg';
import image3 from '../../../../assets/images/newsAndEvents/july-12-2020 training-online-class-03.jpg';
import image4 from '../../../../assets/images/newsAndEvents/july-12-2020 training-online-class-04.png';


const DigitalTools = () => {

    const images = [
        image1,
        image2,
        image3,
        image4,
    ];

    return <>
        <Paragraph>
            Divine Word College of Legazpi organized a seminar entitled “Faculty Training on Digital Tools for Online Classes" in the DWCL Gymnasium last June 17-July 2 in preparation for new normal teaching.
        </Paragraph>
        <Paragraph>
            The seminar was facilitated by the Department Heads and the Dean of School of Engineering and Computer Studies (SOECS), Alicia M. Nieto, MIT as the trainer, with the help of ICTC personnel. It was held with the participation of the teaching personnel of the institution from grade school to college level.
        </Paragraph>
        <Paragraph>
            The seminar trained the participants to create lesson presentations, post instructional materials and assignments on Google classroom with the use of their digital devices like laptop, phone, and the like, to be able to share knowledge and information to their students.
        </Paragraph>
        <Paragraph>
            As we face the challenges of this pandemic, we, at Divine Word College of Legazpi, would like to prioritize the safety and health of our students and employees. Thus, we came up with the idea of conducting a seminar to ensure that when classes start, the teachers would be skillful and knowledgeable about the flexible learning modalities that they will use in the new normal.
        </Paragraph>
        <Paragraph>Your Success…Our Word!</Paragraph>
        {
            images.map( (image, index) => (
                <div key={index}>
                    <Image source={image} style={{ marginBottom: '1rem' }} alt={index} />
                </div>
            ) )
        }
    </>
}

export default DigitalTools

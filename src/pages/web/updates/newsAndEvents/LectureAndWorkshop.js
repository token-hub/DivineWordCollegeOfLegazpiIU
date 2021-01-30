import React from 'react'
import {Paragraph} from '../../../../components/atoms/web';
import image1 from '../../../../assets/images/newsAndEvents/july-16-2020 lecture-and-workshop-on-technology-01.jpg';
import image2 from '../../../../assets/images/newsAndEvents/july-16-2020 lecture-and-workshop-on-technology-02.jpg';
import image3 from '../../../../assets/images/newsAndEvents/july-16-2020 lecture-and-workshop-on-technology-03.jpg';
import image4 from '../../../../assets/images/newsAndEvents/july-16-2020 lecture-and-workshop-on-technology-04.jpg';
import image5 from '../../../../assets/images/newsAndEvents/july-16-2020 lecture-and-workshop-on-technology-05.png';
import image6 from '../../../../assets/images/newsAndEvents/july-16-2020 lecture-and-workshop-on-technology-06.jpg';

const LectureAndWorkshop = () => {

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
    ];

    return <>
        <Paragraph>
          The Divine Word College of Legazpi commits itself to providing quality education to its clientele; thus, it has ascertained that despite the challenges brought about by the COVID-19 pandemic, education continues through FLEXIBLE LEARNING. Hence, training for the faculty was conducted to equip them with the necessary knowledge and skills to allow them to effectively deliver content and attain the outcomes for the respective courses they are handling. The series of seminars and workshops commenced on March 14, 2020, which focused on technology for teaching and learning. Lecture and workshop on various instructional technologies were participated in by the faculty, who were provided hands-on experiences on the use of Zoom, Edmodo, and Google classroom. The said seminar-workshop was facilitated by the School of Engineering and Computer Studies.
        </Paragraph>
        <Paragraph>
          The experiences earned during the first month of the implementation of the online classes from March 16, 2020 to April 15, 2020 afforded the institution information necessary for the improvement of its instructional delivery. The hiatus of the online classes from April 16, 2020 to May 31, 2020 provided the time to address the issues encountered in the one-month online class implementation. Hence, on May 18, 2020, the faculty returned to training, now zeroing in on further advancing their skills in the utilization of virtual platforms for learning. Other apps, such Icecream and Google Jamboard were introduced. In addition to the training on technology, a seminar-workshop on pedagogy was held to further equip the faculty to effectively marry pedagogy and technology for successful instruction. As they returned to online teaching on June 1, 2020, the faculty was ready to utilize the virtual space in their instructional delivery.
        </Paragraph>
        <Paragraph>
          The culmination of the school year did not end the quest for betterment. Seeing the daunting task that lies ahead in the succeeding school year, the institution continued to arm its teaching force, this time with knowledge in skills in creating learning materials, particularly learning modules. On July 8-10, 2020, the faculty attended the seminar-workshop on the domains of learning, creating learning outcomes, writing skills enhancement, and assessment of learning. All of these topics were a prelude to module writing training, which was done on July 13, 2020.
        </Paragraph>
        <Paragraph>
          Teaching in the “new normal” is undoubtedly challenging, but Divine Word College of Legazpi has prepared its teaching force for the challenging task ahead. They say, “Nothing beats preparation”.
        </Paragraph>
        {
            images.map( (image, index) => (
                <img key={index} style={{ margin: '1rem 0' }} src={image} alt={index} />
            ) )
        }
    </>
}

export default LectureAndWorkshop

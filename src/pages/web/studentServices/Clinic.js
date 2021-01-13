import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const Clinic = () => { 

    return (
        <BaseWithBannerAndOverview data={navlinks.student_services.items} title='Clinic' banner={banners.StudentServicesBannerObj}>

            <Paragraph color='primary' variant='h6' bold>Medical Care</Paragraph>
            <Paragraph>
                The College Medical Clinic is open during school days to provide the students, faculty, and non-teaching personnel medical and first aid services. Common medicines are available at the clinic. New students and transferees including old students should submit themselves to physical assessment and medical check-up during enrollment period. The clinic also gives free consultations on family planning and other medical needs. Clinic hours on schools days, from 8:00 a.m. to 8:30 p.m. except Saturday which is 8:00 a.m.-12:00 noon only. In attendance is a full-time school nurse who renders medical and first-aid services in the absence of the school physician.
            </Paragraph>

            <Paragraph color='primary' variant='h6' bold>Dental Care</Paragraph>
            <Paragraph>
                Adjacent to the Medical Clinic is the Dental Clinic, which employs a dentist who is in charge of the dental services such as tooth extraction and oral prophylaxis of all students. Each student can avail of one treatment per semester (tooth extraction and oral prophylaxis).
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default Clinic

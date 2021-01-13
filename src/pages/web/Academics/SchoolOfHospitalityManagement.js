import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList, RenderTable} from '../../../components/molecules/web';
import {schoolOfHospitalityManagement} from '../../../data/web/Academics';


const SchoolOfHospitalityManagement = () => { 

    const {objectives, programs, facultyAndStaff} = schoolOfHospitalityManagement;

    return (
        <BaseWithBannerAndOverview data={navlinks.academics.items} title='School of Hospitality Management' banner={banners.AcademicsBannerObj}>
            <Paragraph>
                The School of Hospitality Management (SOHM) through its three sections, namely: Hotel and Restaurant Management, Culinary Arts, and Travel and Tourism, commits itself to the Vision, Mission, and Goal of Divine Word College of Legazpi through the holistic development of its students for a wide range of professional positions in the hospitality industry. It seeks to provide hands-on experiences emphasizing the acquisition of proficiency in service management, tourism management, and culinary skills.
            </Paragraph>
            
            <RenderList header='Programs Offered:' data={objectives} />
            <Paragraph color='primary' variant='h6' bold>Programs Offered:</Paragraph>
            <RenderList header='Bachelor of Science in Hospitality Management (BSHM)' data={programs} />
            <RenderTable tableBody={facultyAndStaff} size='small' />

        </BaseWithBannerAndOverview>
    )
}

export default SchoolOfHospitalityManagement

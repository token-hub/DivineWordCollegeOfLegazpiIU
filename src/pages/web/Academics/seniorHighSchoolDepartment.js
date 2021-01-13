import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList, RenderTable} from '../../../components/molecules/web';
import {seniorHighSchoolDepartment} from '../../../data/web/Academics';


const SeniorHighSchoolDepartment = () => { 

    const {objectives, courses, vocational, facultyAndStaff} = seniorHighSchoolDepartment;

    return (
        <BaseWithBannerAndOverview data={navlinks.academics.items} title='Senior High School Deparment' banner={banners.AcademicsBannerObj}>
            <Paragraph>
                The Senior High School Department aims to develop and enhance the talents and skills of the students to be locally and globally competitive; to prepare them for work, entrepreneurship, or higher education; and to mold them so that they may become citizens who have a heart for service and a dream for the Filipino nation.
            </Paragraph>

            <RenderList header='Specific Objectives' data={objectives} />

            <Paragraph color='primary' variant='h6' bold>COURSES OFFERED:</Paragraph>
            <RenderList header='ACADEMIC TRACK' data={courses} />
            <RenderList header='TECHNICAL VOCATIONAL TRACK' data={vocational} />

            <Paragraph color='primary' variant='h6' bold>List of Faculty and Staff (S.Y. 2019-2020)</Paragraph>
            <RenderTable tableBody={facultyAndStaff} size='small' /> 
        </BaseWithBannerAndOverview>
    )
}

export default SeniorHighSchoolDepartment

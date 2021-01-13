import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList, RenderTable} from '../../../components/molecules/web';
import {schoolOfEducationArtsAndSciences} from '../../../data/web/Academics';


const SchoolOfEducationArtsAndSciences = () => { 

    const {courses, facultyAndStaff} = schoolOfEducationArtsAndSciences;

    return (
        <BaseWithBannerAndOverview data={navlinks.academics.items} title='School of Education Arts and Sciences' banner={banners.AcademicsBannerObj}>
            <RenderList header='Courses Offered:' data={courses} />
            <Paragraph>
                Non Degree courses: Certificate in College Teaching (CCT)
            </Paragraph>
            <RenderTable tableBody={facultyAndStaff} size='small' header='List of Faculty and Staff (S.Y. 2019-2020)'/>
        </BaseWithBannerAndOverview>
    )
}

export default SchoolOfEducationArtsAndSciences

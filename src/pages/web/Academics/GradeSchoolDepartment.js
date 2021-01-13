import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList, RenderTable} from '../../../components/molecules/web';
import {gradeSchoolDepartment} from '../../../data/web/Academics';

const GradeSchool = () => {

    const {objectives, program, facultyAndStaff} = gradeSchoolDepartment;
    
    return (
        <BaseWithBannerAndOverview data={navlinks.academics.items} title='Grade School Department' banner={banners.AcademicsBannerObj}>
            <Paragraph>
                In line with the educational mission of the Divine Word College of Legazpi and its goal to fully develop the students, the Grade School Department aims to set the foundation to educate the young towards integral Christian formation and to prepare them for secondary education.
            </Paragraph>
            <RenderList header='Specific Objectives:' data={objectives} />
            <RenderList header='Programs Offered:' data={program} />
            <RenderTable tableBody={facultyAndStaff} size='small' header='List of Faculty and Staff (S.Y. 2019-2020)' />
        </BaseWithBannerAndOverview>
    )
}

export default GradeSchool

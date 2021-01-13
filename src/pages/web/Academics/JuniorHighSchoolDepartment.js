import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList, RenderTable} from '../../../components/molecules/web';
import {juniorHighSchoolDepartment} from '../../../data/web/Academics';


const JuniorHighSchoolDepartment = () => { 

    const {newStudents, programs, facultyAndStaff} = juniorHighSchoolDepartment;

    return (
        <BaseWithBannerAndOverview data={navlinks.academics.items} title='Junior High School Department' banner={banners.AcademicsBannerObj}>
            <Paragraph>
                In keeping with the vision, mission and goals of the Divine Word College of Legazpi, the general objective of the school is the total and integral integral development of the individual through the integration of Catholic moral education in the curriculum for constructive ethical leadership in the community in particular, and in the society in general.
            </Paragraph>

            <RenderList header='A. NEW STUDENTS (TRANSFEREES)' data={newStudents} />
            <RenderList header='PROGRAMS OFFERED:' data={programs} />
            <RenderTable tableBody={facultyAndStaff} size='small' header='List of Faculty and Staff (S.Y. 2019-2020)' />
        </BaseWithBannerAndOverview>
    )
}

export default JuniorHighSchoolDepartment

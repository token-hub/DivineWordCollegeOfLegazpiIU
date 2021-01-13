import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList, RenderTable} from '../../../components/molecules/web';
import {graduateSchoolOfBusinessAndManagement} from '../../../data/web/Academics';


const GraduateSchoolOfBusinessAndManagement = () => { 

    const {objectives, programs, requirements, facultyAndStaff} = graduateSchoolOfBusinessAndManagement;

    return (
        <BaseWithBannerAndOverview data={navlinks.academics.items} title='Graduate School of Business and Management' banner={banners.AcademicsBannerObj}>
            <Paragraph>
                Being the highest level in the institution, the Graduate School of Business and Management aims to develop leadership and expertise in business, management and community development as a competent human resource base, needed for regional and national development.
            </Paragraph>

            <RenderList header='Specific objectives:' data={objectives} />
            <RenderList header='Programs Offered:' data={programs} />
            <RenderList header='Admission Requirements' data={requirements} />
            <RenderTable tableBody={facultyAndStaff} size='small' header='List of Faculty and Staff (S.Y. 2019-2020)' />
        </BaseWithBannerAndOverview>
    )
}

export default GraduateSchoolOfBusinessAndManagement

import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList, RenderTable} from '../../../components/molecules/web';
import {schoolOfBusinessManagementAndAccountancy} from '../../../data/web/Academics';


const SchoolOfBusinessManagementAndAccountancy = () => { 

    const {objectives, courses, facultyAndStaff} = schoolOfBusinessManagementAndAccountancy;

    return (
        <BaseWithBannerAndOverview data={navlinks.academics.items} title='School of Business Management and Accountancy' banner={banners.AcademicsBannerObj}>
            <Paragraph>
                The School of Business Management and Accountancy (SBMA) is committed to excellence and dynamism in teaching-learning-research processes across all areas of discipline in business and public. It seeks to produce socially responsible and service-oriented graduates, imbued with the DWCL core values.
            </Paragraph>

            <RenderList header='Specific Objectives:' data={objectives} />
            <RenderList header='Courses Offered:' data={courses} />
            <RenderTable tableBody={facultyAndStaff} size='small' header='List of Faculty and Staff (S.Y. 2019-2020)' />
        </BaseWithBannerAndOverview>
    )
}

export default SchoolOfBusinessManagementAndAccountancy

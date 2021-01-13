import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList, RenderTable} from '../../../components/molecules/web';
import {schoolOfEngineeringAndComputerStudies} from '../../../data/web/Academics';


const SchoolOfEngineeringAndComputerStudies = () => { 

    const {objectives, objectivesIT, courses, facultyAndStaff} = schoolOfEngineeringAndComputerStudies;

    return (
        <BaseWithBannerAndOverview data={navlinks.academics.items} title='School of Engineering and Computer Studies' banner={banners.AcademicsBannerObj}>
            <Paragraph color='primary' variant='h6' bold>
                Engineering Programs
            </Paragraph>
            <Paragraph>
                The engineering programs (civil and electrical engineering) aim to prepare the graduates for a professional engineering career in infrastructure, planning, and development in the built environment. The graduates must not only have the basic foundation of the civil engineering or electrical engineering profession but they should also be responsive to the economic, social and environmental demands of their work.
            </Paragraph>
            <RenderList header='Specific Objectives:' data={objectives} />
            <Paragraph color='primary' variant='h6' bold>
                Computer Studies Programs
            </Paragraph>
            <Paragraph>
                The computer studies programs aim to produce globally competitive information technology (IT) professionals and socially responsible technopreneurs guided by the Divinian core values. The computer studies programs prepare students to become IT professionals and researchers who are proficient in designing and developing computing solutions, well-versed in application installation, operation, development, maintenance and administration, and familiar with hardware installation, operation, and maintenance.
            </Paragraph>
            <RenderList header='Specific Objectives: Develop IT professionals who can:' data={objectivesIT} />
            <RenderList header='Courses Offered:' data={courses} />
            <RenderTable tableBody={facultyAndStaff} size='small' header='List of Faculty and Staff (S.Y. 2019-2020)'/>
        </BaseWithBannerAndOverview>
    )
}

export default SchoolOfEngineeringAndComputerStudies

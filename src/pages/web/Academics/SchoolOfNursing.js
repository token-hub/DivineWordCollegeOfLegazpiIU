import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList, RenderTable} from '../../../components/molecules/web';
import {schoolOfNursing} from '../../../data/web/Academics';


const SchoolOfNursing = () => { 

    const {objectives, courses, facultyAndStaff} = schoolOfNursing;

    return (
        <BaseWithBannerAndOverview data={navlinks.academics.items} title='School of Nursing' banner={banners.AcademicsBannerObj}>
            <Paragraph>
                The School of Nursing (SON) aims to develop highly competent beginning nurse clinicians able to work in any healthcare setting and cater to various clientele: individual, family, and community.
            </Paragraph>

            <RenderList header='Specific Objectives:' data={objectives} />
            <RenderList header='Course Offered:' data={courses} />

            <Paragraph color='primary' varaint='h6' bold>
                List of Faculty and Staff (S.Y. 2019-2020)
            </Paragraph>

            <RenderTable tableBody={facultyAndStaff} size='small' />
        </BaseWithBannerAndOverview>
    )
}

export default SchoolOfNursing

import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const JuniorHighSchoolSao = () => { 

    return (
        <BaseWithBannerAndOverview data={navlinks.student_services.items} title='Junior High School' banner={banners.StudentServicesBannerObj}>
            <Paragraph>
                Please visit us again as we are currently updating information on this page. <br />
                Thank you.
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default JuniorHighSchoolSao

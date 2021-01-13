import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const FreeSecondaryDistanceProgramDepartment = () => { 

    return (
        <BaseWithBannerAndOverview data={navlinks.academics.items} title='Free Secondary Distance Program' banner={banners.AcademicsBannerObj}>
            <Paragraph>
                Please visit us again as we are currently updating information on this page. <br />
                Thank you.
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default FreeSecondaryDistanceProgramDepartment

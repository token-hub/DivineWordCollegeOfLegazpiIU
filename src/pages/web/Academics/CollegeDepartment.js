import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const CollegeDepartment = () => { 

    return (
        <BaseWithBannerAndOverview data={navlinks.academics.items} title='College' banner={banners.AcademicsBannerObj}>
            <Paragraph>
                The Divine Word College of Legazpi offers different courses that prospective students can choose and are relevant and responsive to the demands of business and industry.
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default CollegeDepartment

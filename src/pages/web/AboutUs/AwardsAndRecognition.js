import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const AwardsAndRecognition = () => { 
    return (
        <BaseWithBannerAndOverview data={navlinks.about_us.items} title='Awards and Recognition' banner={banners.AboutUsBannerObj}>
            <Paragraph>
                Please visit us again as we are currently updating information on this page. <br />
                Thank you.
            </Paragraph>            
        </BaseWithBannerAndOverview>
    )
}

export default AwardsAndRecognition

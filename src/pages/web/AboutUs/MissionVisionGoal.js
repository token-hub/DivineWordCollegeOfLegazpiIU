import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const MissionVisionGoal = () => { 
    
    return (
        <BaseWithBannerAndOverview data={navlinks.about_us.items} title='Mission Vision Goal' banner={banners.AboutUsBannerObj}>
            <Paragraph variant='h6' color='primary' bold>
                MISSION
            </Paragraph>
            <Paragraph>
                As witness to the word, DWCL provides quality education and service and pursues a culture of excellence towards holistic human development.
            </Paragraph>
            <Paragraph variant='h6' color='primary' bold>
                VISION
            </Paragraph>
            <Paragraph>
                A prestigious service-oriented Catholic educational institution with qualified, competent and committed academic and administrative personnel producing globally competitive graduates guided by moral values.
            </Paragraph>
            <Paragraph variant='h6' color='primary' bold>
                Goal
            </Paragraph>
            <Paragraph>
                To become a center of Development and/or attain Level III accredicatation status for all programs/levels.
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default MissionVisionGoal

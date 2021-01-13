import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const Athletics = () => { 

    return (
        <BaseWithBannerAndOverview data={navlinks.student_services.items} title='College School' banner={banners.StudentServicesBannerObj}>
            <Paragraph>
                This unit stresses wider participation of students in intramural games, promotes sports through organized matches in both indoor and outdoor games, maintains and lends sports equipment.
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default Athletics

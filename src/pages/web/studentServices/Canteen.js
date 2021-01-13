import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const Cannteen = () => { 

    return (
        <BaseWithBannerAndOverview data={navlinks.student_services.items} title='Canteen' banner={banners.StudentServicesBannerObj}>
            <Paragraph>
                The DWCL school canteen serves the DWCL community on “pay-as-you-order” and “self-service” basis. It ensures that healthy and affordable meals are available to students and personnel. Concessionaires are required to submit periodic documents such as sanitation permit and health records of food handlers. It is fully airconditioned.
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default Cannteen

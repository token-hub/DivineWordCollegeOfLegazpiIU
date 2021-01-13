import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const CampusMinistry = () => { 

    return (
        <BaseWithBannerAndOverview data={navlinks.student_services.items} title='Grade School' banner={banners.StudentServicesBannerObj}>
            <Paragraph>
                This office is concerned with the pastoral needs of the school community. It is in-charge of the different religious activities, such as masses, recollections and retreats, etc. and ministers to the spiritual needs of the students, faculty and non-teaching personnel.
            </Paragraph>
            <Paragraph>
                The Campus Ministry Office is primarily tasked with the building of relationships in the school community and acts as agent of reconciliation. It also monitors the witnessing, worshipping and serving aspects of the community’s faith life. This office is headed by the Campus Chaplain, assisted by the SVD priests, regents, theology teachers, and student assistants.
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default CampusMinistry

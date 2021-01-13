import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList, RenderTable} from '../../../components/molecules/web';
import {communityExtensionService} from '../../../data/web/StudentServices';

const CommunityExtensionServices = () => { 

    const {members, programs, coordinators} = communityExtensionService;

    return (
        <BaseWithBannerAndOverview data={navlinks.student_services.items} title='Community Extension Services' banner={banners.StudentServicesBannerObj}>
            <Paragraph>
                The DWCL Community Extension Service was created to serve the marginalized sector of the society through building Basic Ecclesial Communities (BEC’s) and educating the DWCL personnel and students on Christian – oriented service. The DWCL CES programs are designed to cater to communities that have high needs for basic services. Those programs are geared toward holistic and sustainable developments of BEC’s. In addition, the DWCL CES aims to kindle the spirit of genuine service among DWCL personnel and students, for they are the force that will ensure the attainment of the office’s objectives. They are, therefore provided direct exposures to the adopted communities.
            </Paragraph>
            <Paragraph>
                Through the Community Extension Service, the DWCL can make its program responsive to the needs of the people in the region that answers to the call and challenge for national developments.
            </Paragraph>

            <RenderList header='PROGRAMS & SERVICES' data={programs} />
            <RenderTable tableBody={members} size='small' header='CES COUNCIL MEMBERS S.Y 2017 — 2018' />
            <RenderTable tableBody={coordinators} size='small' header='CES Coordinators' />
        </BaseWithBannerAndOverview>
    )
}

export default CommunityExtensionServices

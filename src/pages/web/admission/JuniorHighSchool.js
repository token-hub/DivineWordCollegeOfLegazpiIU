import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList} from '../../../components/molecules/web';
import {juniorHighSchool} from '../../../data/web/Admission';

const JuniorHighSchool = () => { 

    const {grade7, transferees} = juniorHighSchool;

    return (
        <BaseWithBannerAndOverview data={navlinks.admission.items} title='Junior High School' banner={banners.AdmissionBannerObj}>
            <Paragraph color='primary' variant='h6' bold> Admission Requirements </Paragraph>
            <RenderList header='For Incoming Grade 7:' data={grade7} />
            <RenderList header='For Transferees:' data={transferees} />
        </BaseWithBannerAndOverview>
    )
}

export default JuniorHighSchool

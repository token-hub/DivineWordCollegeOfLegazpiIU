import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {seniorHighSchool} from '../../../data/web/Admission';
import {RenderList} from '../../../components/molecules/web';

const SeniorHighSchool = () => { 

    const {requirements} = seniorHighSchool;

    return (
        <BaseWithBannerAndOverview data={navlinks.admission.items} title='Senior High School' banner={banners.AdmissionBannerObj}>
            <RenderList header='Admission Requirements' data={requirements} />
        </BaseWithBannerAndOverview>
    )
}

export default SeniorHighSchool

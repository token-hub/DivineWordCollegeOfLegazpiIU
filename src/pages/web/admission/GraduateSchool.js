import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {RenderList} from '../../../components/molecules/web';
import {graduateSchool} from '../../../data/web/Admission';

const GraduateSchool = () => { 

    const {requirements} = graduateSchool;

    return (
        <BaseWithBannerAndOverview data={navlinks.admission.items} title='Graduate School' banner={banners.AdmissionBannerObj}>
            <RenderList header='Admission Requirements' data={requirements} />
        </BaseWithBannerAndOverview>
    )
}

export default GraduateSchool

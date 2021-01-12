import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {RenderList} from '../../../components/molecules/web';

const GradeSchool = () => { 
    return (
        <BaseWithBannerAndOverview data={navlinks.admission.items} title='Grade School' banner={banners.AdmissionBannerObj}>
            <RenderList header='Admission Requirements' data={['Reading assessment', 'Admission form filled-out']} />
        </BaseWithBannerAndOverview>
    )
}

export default GradeSchool

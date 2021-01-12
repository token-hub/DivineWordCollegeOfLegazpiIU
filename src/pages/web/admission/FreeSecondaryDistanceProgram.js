import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {freeSecondaryDistanceProgram} from '../../../data/web/Admission';
import {RenderList} from '../../../components/molecules/web';

const FreeSecondaryDistanceProgram = () => { 

    const {minAge, requirements} = freeSecondaryDistanceProgram;

    return (
        <BaseWithBannerAndOverview data={navlinks.admission.items} title='Free Secondary Distance Program' banner={banners.AdmissionBannerObj}>
            <Paragraph variant='h6' color='primary' bold>Requirements for the Incoming First Year and Transferees</Paragraph>
            <RenderList header='Minimum age required for:' data={minAge} />
            <RenderList header='Other Requirements:' data={requirements} />
        </BaseWithBannerAndOverview>
    )
}

export default FreeSecondaryDistanceProgram

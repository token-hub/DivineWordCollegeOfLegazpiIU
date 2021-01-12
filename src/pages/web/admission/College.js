import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList} from '../../../components/molecules/web';
import {college} from '../../../data/web/Admission';

const College = () => { 

    const {procedureA, procedureB} = college;

    return (
        <BaseWithBannerAndOverview data={navlinks.admission.items} title='College' banner={banners.AdmissionBannerObj}>
            <Paragraph variant='h6' color='primary' bold>ENROLLMENT PROCEDURE</Paragraph>
            <RenderList header='A. NEW STUDENTS (TRANSFEREES)' data={procedureA} />
            <RenderList header='B. OLD STUDENTS' data={procedureB} />
        </BaseWithBannerAndOverview>
    )
}

export default College

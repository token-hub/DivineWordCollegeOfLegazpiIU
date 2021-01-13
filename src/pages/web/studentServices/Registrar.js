import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const Registrar = () => { 

    return (
        <BaseWithBannerAndOverview data={navlinks.student_services.items} title='Registrar' banner={banners.StudentServicesBannerObj}>
            <Paragraph>
                The Registrar’s Office coordinates and controls all activities involving student registration (validation of credentials and enrolment) transfer, and graduation. The office maintains a Records Section. The services of the Records Section include issuance of transcript of records, certifications of academic status and other related documents.
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default Registrar

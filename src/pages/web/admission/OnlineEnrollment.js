import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {LinkTextIcon} from '../../../components/atoms/web';
import {RenderList} from '../../../components/molecules/web';
import {onlineEnrollment} from '../../../data/web/Admission';
import Typography from '@material-ui/core/Typography';
import CommuteIcon from '@material-ui/icons/Commute';
import LanguageIcon from '@material-ui/icons/Language';
const OnlineEnrollment = () => { 

    const {edu, sched} = onlineEnrollment;

    return (
        <BaseWithBannerAndOverview data={navlinks.admission.items} title='Online Enrollment' banner={banners.AdmissionBannerObj}>
            <RenderList header='BASIC EDUCATION' data={edu} />
               
            <Typography color='primary'>ONLINE</Typography>
            <LinkTextIcon link='https://online.dwc-legazpi.edu/' title='Online Enrollment'>
                <LanguageIcon color='primary' />
            </LinkTextIcon> <br />

            <Typography color='primary'>ON-SITE</Typography>
            <LinkTextIcon title='Washington drive, Legazpi'>
                <CommuteIcon color='primary' />
            </LinkTextIcon>

            <RenderList data={[sched[0]]} />
            <RenderList data={[sched[1]]} />
        </BaseWithBannerAndOverview>
    )
}

export default OnlineEnrollment

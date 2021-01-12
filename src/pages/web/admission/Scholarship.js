import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList} from '../../../components/molecules/web';
import {scholarship} from '../../../data/web/Admission';

const Scholarship = () => { 

    const {programs, loans, ched, unifast} = scholarship;

    return (
        <BaseWithBannerAndOverview data={navlinks.admission.items} title='Scholarship' banner={banners.AdmissionBannerObj}>
            <RenderList header='Scholarship Program' data={programs} />
            <RenderList header='Other Scholarship grants and loans' data={loans} />
            <RenderList header='CHED Scholarship Programs' data={ched} />
            <RenderList header='UNIFAST (Republic Act 10931)' data={unifast} />
            <Paragraph color='primary' bold>TUITION FEE DISCOUNTS ARE NOT TO BE PRESUMED.</Paragraph>
            <Paragraph>All scholarship grants are to be applied or renewed every semester during enrollment time. The members of the Scholarship Committee are most willing to assist and entertain inquiries anytime during office hours.</Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default Scholarship

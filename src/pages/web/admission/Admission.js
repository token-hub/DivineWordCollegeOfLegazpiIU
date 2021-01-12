import React from 'react'
import {BaseWithBannerAndUpdates} from '../../../components/templates/web';
import {Paragraph, BoldSpan} from '../../../components/atoms/web';
import {RenderList} from '../../../components/molecules/web';
import {banners} from '../../../data/web';
import {admission} from '../../../data/web/Admission';

const Admission = () => {

    const {newStudents, oldStudents, guidanceServices} = admission;

    return (
        <BaseWithBannerAndUpdates banner={banners.AdmissionBannerObj}>
            <Paragraph align='justify'>
                <BoldSpan>Divine Word College of Legazpi (DWCL)</BoldSpan> maintains an open admission policy. This institution accepts qualified freshmen,Curricular Offering for Basic Education. The Divine Word College of Legazpi (DWCL) has been providing quality Christian Education in the Province of Albay for a little over 50 years. DWCL is dedicated in providing a caring environment where students are encourage to develop Christian values,strive for academic excellence and a holistic development consistent of the institution’s thrust of excellence,professionalism and service.
            </Paragraph>
            <Paragraph variant='h6' color='primary' bold>
                Admission Requirements
            </Paragraph>
            <RenderList header='New Students' data={newStudents} />
            <RenderList header='Old Students' data={oldStudents} />
            <RenderList header='GUIDANCE SERVICES' dense data={guidanceServices} />
            <Paragraph variant='h6' color='primary' bold>
                Admission Guidance and Testing Center
            </Paragraph>
            <Paragraph bold style={{ fontStyle: 'italic' }}>
                Rm 102 Ground Floor, Left Wing Divine Word College of Legazpi <br />
                Corner Fr. Bates and Rizal Street 4500 Legazpi City Albay, Philippines <br />
                Tel: (052)480-1239 & 820-4126 <br />
            </Paragraph>


        </BaseWithBannerAndUpdates>
    )
}

export default Admission

import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';

const StudentAffairsOrganization = () => { 

    return (
        <BaseWithBannerAndOverview data={navlinks.student_services.items} title='Student Affairs Organization' banner={banners.StudentServicesBannerObj}>
            <Paragraph>
                This office is devoted to creating an integrated learning experience that will help students reach their educational, social, personal, and professional aspirations. In consonance with the institution’s vision mission, the Office aims to provide occasions for growth and advancement through cultural, spiritual, athletic, co-curricular, and extra-curricular activities with the end in view that students may develop into well-rounded individuals. It endeavors to nurture a campus environment where academic and non-academic pursuits are balanced thereby making campus life more enriching, interesting, and worthwhile for students.     
            </Paragraph>
            <Paragraph>
                The role of the Student Affairs Office is twofold. First, it functions as an administrative office and secondly, it aims to serve the needs of students in the many aspects of campus life. Consequently, in addition to its function of overseeing student activities and interests, the office operates to promulgate and/or enforce institutional and/or CHED policies, rules and regulations concerning student organizations, programs, activities, student comportment, and student discipline.
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default StudentAffairsOrganization

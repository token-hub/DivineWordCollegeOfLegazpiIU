import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderList, RenderTable} from '../../../components/molecules/web';
import {library} from '../../../data/web/StudentServices';

const Library = () => { 

    const {objectives, collection, rulesAndRegulations} = library;

    return (
        <BaseWithBannerAndOverview data={navlinks.student_services.items} title='Library' banner={banners.StudentServicesBannerObj}>
            <Paragraph color='primary' variant='h6' bold>The Mission of the DWCL Library</Paragraph>
            <Paragraph>
                DWCL Library is committed to provide dynamic learning environment that supports the educational, intellectual and spiritual development of its academic community through systematic and easy access to variety of information sources
            </Paragraph>
            <Paragraph color='primary' variant='h6' bold>General Objective:</Paragraph>
            <Paragraph>
                To provide responsive, systematic and effective means of acquiring, storing, organizing and preserving documentary references for easy access and retrieval of information by the students, faculty, staff, and administration.
            </Paragraph>
            <Paragraph color='primary' variant='h6' bold>Specific objectives:</Paragraph>
            <Paragraph>
                Provide current and appropriate library materials and databases that support the academic curriculum;
            </Paragraph>

            <RenderList dense data={objectives} />
            <Paragraph color='primary' variant='h6' bold>Library Service Hours</Paragraph>
            <Paragraph color='primary' variant='h6' bold>COLLEGE LIBRARY</Paragraph>
            <Paragraph>
                Regular Days – Monday to Friday – 8:00 – 7:00 <br />
                Saturday – 8:00 – 12:00 <br />
                Summer & Term Breaks – Monday to Friday – 8:00 – 12:00 to 1:00 – 5:00 <br />
                Saturday – 8:00 – 12:00 <br />
            </Paragraph>
            <Paragraph color='primary' variant='h6' bold>GRADUATE LIBRARY</Paragraph>
            <Paragraph>
                Regular Days- Monday to Friday – 8:00 – 12:00 to 1:30 – 6:00 <br />
                Saturday – 8:00 – 5:00 <br />
            </Paragraph>
            <RenderList header='Access to DWCL Libraries’ Collection' data={collection} />
            <RenderList header='RULES AND REGULATIONS' data={rulesAndRegulations} />
        </BaseWithBannerAndOverview>
    )
}

export default Library

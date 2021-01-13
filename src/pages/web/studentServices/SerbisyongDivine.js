import React from 'react'
import {BaseWithBannerAndOverview} from '../../../components/templates/web';
import {navlinks, banners} from '../../../data/web';
import {Paragraph, BoldSpan} from '../../../components/atoms/web';
import {RenderList} from '../../../components/molecules/web';
import {serbisyongDivine} from '../../../data/web/StudentServices';

const SerbisyongDivine = () => { 

    const {program} = serbisyongDivine;

    return (
        <BaseWithBannerAndOverview data={navlinks.student_services.items} title='Serbisyong Divine' banner={banners.StudentServicesBannerObj}>
            <Paragraph color='primary' variant='h6' bold>BACKGROUND and HISTORY</Paragraph>
            <Paragraph>
                <BoldSpan> SERBISYONG DIVINE is a weekly Tele-radyo program of Divine Word College of Legazpi </BoldSpan>that can be heard simultaneously on radio through CMN- Veritas – Legazpi, and its television counterpart DCTV Channel 8 every Friday, 11:00 am to 12:00 noon. It is also broadcast overseas via livestreaming, www.veritaslegazpi.com. It is known for its tagline,”Nagwawaras nin impormasyon asin inspirasyon” since its inception on October 10, 2014. This is part of DWCL social responsibility to strengthen Divinian advocacies of excellence, professionalism and service.
            </Paragraph>
            <Paragraph color='primary' variant='h6' bold>PRE - LAUNCH</Paragraph>
            <Paragraph>
                In the 3nd quarter of 2014, the president of Divine Word College of Legazpi, Rev. Fr. Crispin A. Cordero initiated a project on having a tele-radyo program for the school. It aims to provide benefits to the institution through promotion and dissemination of its services and to reach out to the outside community. He entrusted the operation to the Marketing Department headed by Mr. Eymard J. Kallos who eventually scouted potential employees and students to host the program. The recruits were Miss Annie V. Lledo(English instructor of CAS), Miss Alice S. Mapa(Research Assistant of RPO), Miss Babielyn M. Nuarin(English instructor of CAS), Miss Preciosa Brizuella(Education Student), Mr. Cedric Celeste(Accountancy Student) and the Marketing staff, Mr. Jubert Belen, Mr. Eric Jaucian and Miss Maricel De Jesus and Mr. Allan Albaytar as the consultant. <BoldSpan>Mr. Jubert Belen </BoldSpan> was the originator of the known title, <BoldSpan>SERBISYONG DIVINE.</BoldSpan>
            </Paragraph>
            <Paragraph> 
                On September 2014, the recruits had attended a Seminar Workshop on Broadcasting spearheaded by the marketing department. Mr. Richard De Jesus(JOE BOUNCE) of Spirit FM Legazpi was the speaker 
            </Paragraph>
            <Paragraph color='primary' variant='h6' bold>LAUNCHING</Paragraph>
            <Paragraph>
                <BoldSpan> SERBISYONG DIVINE </BoldSpan>premiered on October 10, 2014 at 11:00 am. Co-anchoring the program were Mr. Allan Albaytar, Mr. Eymard J. Kallos and Miss Annie Lledo with the newly trained broadcaster of the said teleradyo show. They began the pilot and subsequent episodes with the newscasters Precious Brizuella and Cedric Celeste.
            </Paragraph>
            <Paragraph>
                Miss Annie Lledo, Cedric Celeste and Preciosa Brizuella eventually left the program for various substantial reasons on December, 2014. Miss Babielyn M. Nuarin and Miss Alice Mapa took over the anchor chair vacated by Annie Lledo and became the regular anchors. The other members of the group are assigned to work in the production team. <BoldSpan>Samahang A & B </BoldSpan> anchor the program with their signature line, “Ini ang samahang A & B- Alice and Babes para sa <BoldSpan>"SERBISYONG DIVINE, marhay na udto mga kaserbisyo" </BoldSpan>. This signature line went popularized.
            </Paragraph>
            <Paragraph>
                <BoldSpan>Program Format</BoldSpan> (Announcement, Talk Show, News Correspondence and Community-based radio)
            </Paragraph>
            <Paragraph color='primary' variant='h6' bold>SPONSORSHIP</Paragraph>
            <Paragraph>
                The first wave of sponsors for the program are, Alson’s Trading-Legazpi, Koffee Klatch De Legazpi, Cherryland Bakeshop, Bigg’s Diner Albay, Jolibee Albay, Rose & Pabs Beauty Parlor/Salon Fedelino, Uncle Ton’s Pizza Pasta and Grill, Kamilah Mae Clinic, Junior Jaycees, Junior Chamber International-Daraga, Bicol Food Delights and Catering Services.
            </Paragraph>
            <RenderList header='SERBISYONG DIVINE FIRST YEAR ANNIVERSARY' data={['October 8, 2015 At DWCL College Campus']} />
            <Paragraph>
                The <BoldSpan>SERBISYONG DIVINE</BoldSpan> Tele-radio Program of Divine Word College of Legazpi celebrated its First Year Anniversary with a theme: <BoldSpan>"Boses Divinian: Dalan Sa Katotoohan"</BoldSpan> on October 10, 2015. The celebration aims to participate in the rebuilding and strengthening of civil society and to support and help deepen the impact of other organizations working in the interests of the community and to celebrate the day to remember the unique power of touching the lives of people and bring them together across every corner of the globe.
            </Paragraph>
            <Paragraph>
                Commemorative activities include;
            </Paragraph>
            <Paragraph>
                SERBISYONG DIVINE SA BARANGAY, a community extension service ( July to September, 2015). It aims to increase radio listenership and TV viewership. This is one of the marketing school’s most time-honored advertising outlets. It's a lot easier to have them find us and get our program heard and viewed to get tons of our publicity and visibility This is also one way of expressing our gratitude to our listenerss/viewers and supporters. The team conducted the said community extension service at Bacolod, Tabaco City, Paulba, Ligao City and Cotmon, Camalig Albay. This activity is extended until December 2015 and the coming years. Depressed barangays of Albay and outside the province are our recipients with the generous support of SD Sponsors. Giving sustainable livelihood program is one of our projects for them aside from gift giving and feeding program.
            </Paragraph>
            <RenderList data={program} />
            <Paragraph variant='h6' color='primary' bold>
                PROGRAM REFORMAT( October, 2015)
            </Paragraph>
            <Paragraph>
                On October 16, 2015, Serbisyong Divine, reformatted its tagline from” Nagwawaras nin impormasyon asin inspirasyon” to “Boses Divinian: Dalan Sa Katotoohan”, it was the theme during the first year anniversary. Documentaries/Features and other spoken word formats needed in the program have been included to the show
            </Paragraph>
            <Paragraph variant='h6' color='primary' bold>
                DIVINIAN CORRESPONDENT BUREAU(August, 2015)
            </Paragraph>
            <Paragraph>
                The SD team headed by Babielyn M. Nuarin, a teleradyo program coordinator has organized a group of student volunteers for <BoldSpan>SERBISYONG DIVINE</BoldSpan> Tele-radio Program, entitled, <BoldSpan>“DIVINIAN CORRESPONDENT BUREAU”</BoldSpan> on August 10 2015 and it was approved by the DWCL president, Rev. Fr. Crispin A. Cordero. The objectives of this initiative are to encourage and help the students develop their skills and attitudes, enhance their knowledge on modern communication trends and to raise their awareness of social responsibilities and other values. They are the future researchers, writers, correspondents and hosts who can be the Samahang <BoldSpan>A & B</BoldSpan> successors.
            </Paragraph>
        </BaseWithBannerAndOverview>
    )
}

export default SerbisyongDivine

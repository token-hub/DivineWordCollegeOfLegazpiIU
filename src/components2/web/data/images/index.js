import { setImage } from '../../../../helpers'; 
import systemCover from '../../../../assets/images/others/SYSTEMCOVER.jpg';
import dwclLogo from '../../../../assets/images/others/dwcl-Logo.png';
import systemCoverTablet from '../../../../assets/images/others/SYSTEMCOVER-TABLET.jpg';
import psychometrician from '../../../../assets/images/others/PSYCHOMETRICIAN.jpg';
import cpa from '../../../../assets/images/others/CPA.jpg';
import librarian from '../../../../assets/images/others/librarian.jpg';
import president from '../../../../assets/images/others/president.jpg';
import vpaa from '../../../../assets/images/others/VPAA.jpg';
import vpa from '../../../../assets/images/others/VPA.jpg';
import vpf from '../../../../assets/images/others/VPF.jpg';
import orgchart from '../../../../assets/images/others/ORGCHART.jpg';

import a1 from '../../../../assets/images/facilities/1COL-SHS.png';
import a2 from '../../../../assets/images/facilities/2JHS-GS.png';
import a3 from '../../../../assets/images/facilities/3SC-chapel.png';
import a4 from '../../../../assets/images/facilities/4NC-chapel.png';
import a5 from '../../../../assets/images/facilities/5NC-GS-LIB.png';
import a6 from '../../../../assets/images/facilities/6NC-GS-PRINCIPAL.png';
import a7 from '../../../../assets/images/facilities/7NC-JHS-AGTC.png';
import a8 from '../../../../assets/images/facilities/8NC-JHS-LIB.png';
import a9 from '../../../../assets/images/facilities/9NC-Med.png';
import a10 from '../../../../assets/images/facilities/10NC-GYM.png';
import a11 from '../../../../assets/images/facilities/11NC-HM-LAB.png';
import a12 from '../../../../assets/images/facilities/12NC-SCI-LAB.png';
import a13 from '../../../../assets/images/facilities/13SC-AV-HALL.png';
import a14 from '../../../../assets/images/facilities/14social-hall.png';
import a15 from '../../../../assets/images/facilities/15SC-CLASSROOM.png';
import a16 from '../../../../assets/images/facilities/16SC-COLL-LIBRARY.png';
import a17 from '../../../../assets/images/facilities/17SC-COM-LAB.png';
import a18 from '../../../../assets/images/facilities/18SC-DRAW-LAB.png';
import a19 from '../../../../assets/images/facilities/20SC-CANTEEN.png';
import a20 from '../../../../assets/images/facilities/21SC-MED.png';
import a21 from '../../../../assets/images/facilities/22SC-GRAD-LIB.png';
import a22 from '../../../../assets/images/facilities/23SC-PRES-OFFICE.png';
import a23 from '../../../../assets/images/facilities/24SC-CES.png';
import a24 from '../../../../assets/images/facilities/25SC-GRAD-OFFICE.png';
import a25 from '../../../../assets/images/facilities/26SC-REG.png';
import a26 from '../../../../assets/images/facilities/27SC-SAO.png';
import a27 from '../../../../assets/images/facilities/NC-JHS-COM-LAB.png';

const sliderImages = [
    setImage('System cover', systemCover),
    setImage('Psychometrian', psychometrician),
    setImage('CPA', cpa),
    setImage('Librarian', librarian),
]

const others = [
    setImage('System cover', systemCover),
    setImage('System cover tablet', systemCoverTablet),
]

const administrators = {
    president: setImage('The president', president),
    vpaa: setImage('The Vice President for Academic Affairs', vpaa),
    vpa: setImage('The Vice President for Administration', vpa),
    vpf: setImage('The Vice President for Finance', vpf),
}

const facilities = [
    setImage('a1', a1),
    setImage('a2', a2),
    setImage('a3', a3),
    setImage('a4', a4),
    setImage('a5', a5),
    setImage('a6', a6),
    setImage('a7', a7),
    setImage('a8', a8),
    setImage('a9', a9),
    setImage('a10', a10),
    setImage('a11', a11),
    setImage('a12', a12),
    setImage('a13', a13),
    setImage('a14', a14),
    setImage('a15', a15),
    setImage('a16', a16),
    setImage('a17', a17),
    setImage('a18', a18),
    setImage('a19', a19),
    setImage('a20', a20),
    setImage('a21', a21),
    setImage('a22', a22),
    setImage('a23', a23),
    setImage('a24', a24),
    setImage('a25', a25),
    setImage('a26', a26),
    setImage('a27', a27),
];


const logo = setImage('DWCL logo', dwclLogo);
const orgChart = setImage('Organizational Chart', orgchart);

export const images = { 
    sliderImages,
    others,
    logo,
    administrators,
    facilities,
    orgChart
}
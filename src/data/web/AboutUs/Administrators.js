import {setImageWithParagraph, setObject} from '../../../helpers';
import {administrators} from '../../../assets/images'; 
const {president, vpaa, vpa, vpf} = administrators;

const admins = [
    setImageWithParagraph('The president', 'REV. FR. NEILO M. CANTILADO, SVD', 'The president is the Chief Executive Office at the Divine Word College of Legazpi. He represents the college in conferences meetings and other social functions; and promotes good relations with educational associations, government agencies, faculty, students, employees and the general public. He sees to it that general policies stablished by the Board of Trustees are implemented, that all legal requirements are observed and that everything is done to attain the stated vision, mission, and goals of the College to promote the best interest of students and staff.', president),
    setImageWithParagraph('The Vice President for Academic Affairs', 'DR. ROSE MARIE S. CLEMEÑA, RGC, RPsY', 'TThe Vice President for Academic Affairs is the executive officer of the college in academic matters. S/he is responsible for the development and enrichment of the academic life of the faculty members and the students of the whole institutions.', vpaa),
    setImageWithParagraph('The Vice President for Administration', 'REV. FR RICARDO FRANCISCO C. MIRANDA, SVD', 'The Vice President for Administration is the executive officer of the College on Adminstration matters. He assists the President in the implementation of all policies and programs regarding the administrative aspects of the schools operations. he plans, organizes coordinates and implements the programs of the administrative units and concerned with the mission, goals and objectives of the institution and attends to the needs of the administrative and academic departments.', vpa),
    setImageWithParagraph('The Vice President for Finance', 'REV. FR. PAULUS KARMANI, SVD', 'The Vice President for Finance assists the President in the implementation of all policies and programs regarding the financial aspect if the school operations. Among others, S/he handles requests of student for promissory notes bfore the designated examination dates and communicates with students, parents , and/ or guardians who fail to comply wit hthe agreements stipulated in the promissory notes. S/he signs admission slips for examinations , approves application on tuition fee discounts and/ or scholarship grants and issues statements of account and clearances of students at appropriate dates.', vpf),
];

const otherAdmins = [
    setObject('President', 'REV. FR. NIELO CANTILADO, SVD'),
    setObject('Vice President for Administration', 'REV. FR. RICARDO FRANCISCO C. MIRANDA, SVD'),
    setObject('Vice-President for Finance', 'REV. FR. PAULUS KARMANI, SVD'),
    setObject('Vice President for Basic Education', 'BR. YOSEP UNDUNG, SVD'),
    setObject('Director, Office of External Relations', 'REV. FR. REMIGIO B. DOMINO, SVD'),
    setObject('CMO Chaplain', 'REV. FR. RICO GERARDO J. JAZMIN, SVD'),
    setObject('Director, AGTC', 'Rev. Fr. BERNARDO R. COLLERA, SVD, RGC'),
];


export const administratorsData = {
    admins,
    otherAdmins
}


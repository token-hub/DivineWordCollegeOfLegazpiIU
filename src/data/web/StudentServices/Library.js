import { setObjectGen } from '../../../helpers';

const objectives = [
    'Provide access to information resources regardless of location through networking and the world wide web',
    'Preserve DWCL library collections, and maintain and upgrade physical and technological infrastructure to enhance the quality of services',
    setObjectGen('Enhance information literacy by developing effective plans aiming at improving student’s ability to:', [
        'Access information efficiently and effectively',
        'Evaluate and information and its sources critically',
        'Understand economic, legal and social issues when using information',
        'Access and use information critically and legally',
    ]),
    'Continue to strengthen and update all collection to meet the needs of DWCL Programs.'
];

const collection = [
    setObjectGen('library Catalog', [
       'http://10.2.1.4/app/catalog.cf(onsite)',
       'http://apps.dwcl-legazpi.edu/app/catalog.cf(offsite)',
    ]),
    setObjectGen('Databases ', 'http://infotrac.galegroup.com/itweb/phdwcl'),
];

const rulesAndRegulations = [
    'All students are required to secure LIBRARY CARD from the librarian. It is required for borrowing library materials and for clearance signing at the end of semester/school year',
    'Students and faculty must first swipe their ID’s at the ID Scanner located at the entrance of the library',
    'Bags and other personal belongings can be brought inside the library but must be presented for a security check upon going out',
    'Each student is allowed to borrow 5 books of different titles for 2 days. Overdue has the corresponding penalty',
    'To avoid unnecessary alarm from the security device, all library materials to be taken out must first be checked out at the Circulation Desk',
];

export const library = {
    objectives, 
    collection,
    rulesAndRegulations
}
import { setObjectGen } from '../../../helpers';

const objectives = [
    setObjectGen('', [
        'Broaden the students’ appreciation of the environment and economic, political, socio-cultural, and technology aspects of development at the practitioner and policy making levels through research oriented activities',
        'Produce graduates who will be business leaders, entrepreneurs, and educators imbued with Christian values',
        'Develop the managerial competencies and skills among students relevant for both personal and organizational development',
        'Provide a forum for exchange of ideas, experiences, expertise from among the students, faculty, staff and administrators, whose responsibilities are varied and diversified, inspiring them to practice self-reliance and independent thinking',
        'Serve as an avenue for students in the exchange, discovery, and exposure to the realities of the work environment in relating business and management knowledge, skills and attitude to self and/or corporate employment',
    ])
];

const programs = [
    setObjectGen('Master in Business Administration (MBA)', setObjectGen('Fields of Specialization:', [
        'Financial Management',
        'Executive Leadership Development',
        'Enterprise Development & Management',
        'Environment Management',
        'Business Education',
    ])),
    setObjectGen('Master in Public Management (MPM)', setObjectGen('Fields of Specialization', [
        'Public Administration',
        'Executive Leadership Development',
        'Development Management',
        'Environmental Management',
    ]))
];

const requirements = [
    'Transcript of Records',
    'NSO/PSA Birth Certificate',
    '2 pieces 2x2 ID size picture',
    'Marriage Certificate (Married)',
];

const facultyAndStaff = [
    setObjectGen('Nacion, Teresita L.'),
    setObjectGen('Ante, Carlos'),
    setObjectGen( 'Jenkin, Flor'),
    setObjectGen('Mirandilla, Jean'),
];

export const graduateSchoolOfBusinessAndManagement = {
    objectives,
    programs, 
    requirements,
    facultyAndStaff
}
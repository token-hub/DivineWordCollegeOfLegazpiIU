import {setObjectGen} from '../../../../../helpers';

const objectives = [
    'Develop a customer service orientation guided by principles of servant leadership',
    'Develop the students’ ability to determine and respond to guest preferences and industry trends',
    'Instill in the students a commitment to meeting safety and sanitation standards in the delivery of services',
    'Produce graduates who can plan, carry out, and evaluate various hospitality menus and events, using effective control systems and technologies, and guided by business ethics and moral values',
    'Stimulate the students to establish and maintain professional attitudes and appearance standards as service providers who go the extra mile',
    'Promote social awareness and expanded social involvement among the faculty, students, and personnel to enhance the community members’ knowledge and skills in the preparation of a balanced and nutritious diet',
    'Strengthen the research capacity and interest of faculty and students to generate new knowledge in the various fields of hospitality management',
    'Establish strong linkages and networks with HM related organizations, government and private agencies, and industry partners',
    'Introduce, as a way of life, the Divinian spirituality, and core values by integrating it into the curriculum and all activities of the HM Department; and',
    'Produce highly competitive graduates able to handle state-of-the-art facilities and equipment, including updated Information Technology support systems and services.',
];

const programs = [
    setObjectGen('Also offers with TVET Registered Programs:', [
        'Cookery NC II (316 hours)',
        'Food and Beverage Service NC II (356 hours)',
        'Bread and Pastry Production NC II ( 141 hours)',
    ]),
   
];

const facultyAndStaff = [
    setObjectGen('Ong, Vicky U.', 'DEAN'),
    setObjectGen('Reyes, Gwendon'),
    setObjectGen('Sarmiento, Shiedan'),
    setObjectGen('Lorena, Mark John'),
    setObjectGen('Malto, Eva'),
    setObjectGen('Tee, Diel'),
    setObjectGen('Uy, Jesse Emmanuel'),
];

export {
    objectives,
    programs,
    facultyAndStaff
}
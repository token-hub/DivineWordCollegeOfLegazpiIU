import {setObjectGen} from '../../../../../helpers';

const objectives = [
    'Develop engineers who possess basic knowledge and skills in the planning design, construction, management and operation, and maintenance of engineering works',
    'Develop engineers who take into account the effects to the environment of the infrastructure they will construct and the electrical system they will set up',
    'Develop engineers who are fully aware of their legal and ethical responsibilities',
    'Develop engineers who are knowledgeable in human, financial, physical energy and resource management; and',
    'Develop engineers who are fully oriented in the arts, science, technology, and engineering concepts.',
];

const objectivesIT = [
    'Apply mathematical concepts, algorithmic principles, and computer science theory in the modeling and design of ICT solutions',
    'Use analytical skills and appreciate the dynamic and collaborative nature of problem solving',
    'Handle moral, legal, and social responsibilities',
    'Recognize the need for continuing professional development and lifelong learning',
    'Engage in technopreneurial activities utilizing appropriate tools in the field of information technology and who are globally competitive technopreneurs',
    'Respond to innovations and diverse perspectives by using a wide range of ideas and techniques that will demonstrate originality and creativity in application development',
    'Increase accessibility of ICT resources that will promote efficient and effective communication to various clienteles',
    'Develop appropriate skills that are essential for independent learning in different areas of programming, networking, database management and troubleshooting',
    'Apply known methods and skills, and learn new approaches based on current trends in order to develop applications that are ready for deployment',
    'Understand the real world limits in order to evaluate and select new information resources and technological innovations based on the appropriate task that will demonstrate originality and creativity in application development'
];

const facultyAndStaff = [
    setObjectGen('Nieto, Alicia M.', 'DEAN'),     
    setObjectGen('Brosas, Rhodora Faye A.'),
    setObjectGen('Monreal, Richard'),
    setObjectGen('Parillas, Victor'),
    setObjectGen('Adupe, Mariano'),
    setObjectGen('Boringot, Allan'),
    setObjectGen('Esternon, Paulo Fortono'),
    setObjectGen('Imperial, Rovin Leian J.'),
    setObjectGen('Lladoc, Khryza Beth Tale'),
    setObjectGen('Nual, Maria Cristina Lota'),
    setObjectGen('Ramos, Marben'),
    setObjectGen('Serrano, JP Remar A.'),
    setObjectGen(' Suyang, John B.'),
    setObjectGen('Alamo, Dhan Davish'),
    setObjectGen('Austria, Alvin'),
    setObjectGen('Barajas, John Raymond'),
    setObjectGen('Burdeos, Gregel'),
    setObjectGen('Ebrada, Ronald'),
    setObjectGen('Iligan, Ma. Franhs'),
    setObjectGen('Laure, Michael M.'),
    setObjectGen('Morallos, Mike Joseph'),
    setObjectGen('Rontas, Jian Benedick Villegas'),
    setObjectGen('Valladolid, Randy'),
];

const courses = [
    setObjectGen('Bachelor of Science in Electrical Engineering (BSEE)'),
    setObjectGen(
        'Bachelor of Science in Civil Engineering (BSCE)',
        setObjectGen('Majors in:', ['Construction Engineering and Management', 'Structural Engineering'])
    ),
    setObjectGen(
        'Bachelor of Science in Computer Science (BSCS)',
        setObjectGen('Specialized in:', ['Robotics', 'Software Development'])
    ),
    setObjectGen(
        'Bachelor of Science in Information Technology (BSIT)',
        setObjectGen(null, ['Robotics', 'Software Development'])
    ),
    setObjectGen('Bachelor of Science in Electrical Engineering (BSEE)'),
];

export {
    objectives,
    objectivesIT,
    facultyAndStaff,
    courses
}
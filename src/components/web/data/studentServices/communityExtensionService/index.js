import { setObject, setObjectGen } from '../../../../../helpers';

const objectives = [
    'To involve all sectors of the academe in responding to the needs of the outside community',
    'To raise clientele consciousness and develop their skills and competence in their field of specializations along socio-economic, political & ecological/environmental aspects',
    'To provide and facilitate Livelihood Training and projects to the adopted and served communities',
    'To provide and facilitate the delivery of basic social services to the adopted and other served communities',
    'To undertake projects/activities for ecological and environmental preservation and protection',
    'To establish linkages/networks with other institutions for a more effective community extension service',
    'To provide and facilitate Christian Life Formation Activities'
];

// [ 
//     {
//         item: 'Education/ Training', 
//         value: { 
//                 item: '', 
//                 value: [
//                     'Free Secondary Distance Education Program (FSDEP) for the working OSY & Young Adults',
//                     { 
//                         item: 'Community-Based Literacy Projects',
//                         value: [
//                             'Pre-School Enhancement Classes',
//                             'Tutorial Classes for Elementary'
//                         ]
//                     },
//                     'Seminar/ Training on Social issues',
//                     'Basic Health Seminars',
//                     'Basic Computer Literacy Seminar'
//                 ] 
//             } 
//     }
//  ]

const programs = [
    setObjectGen('Education/ Training', setObjectGen('', [
            'Free Secondary Distance Education Program (FSDEP) for the working OSY & Young Adults',
            setObjectGen('Community-Based Literacy Projects', [
                'Pre-School Enhancement Classes',
                'Tutorial Classes for Elementary'
            ]),
            'Seminar/ Training on Social issues',
            'Basic Health Seminars',
            'Basic Computer Literacy Seminar'
        ]
    )),
    setObjectGen('Economic Development', [
        'Skills and Livelihood Training',
        'Livelihood Project',
    ]),
    setObjectGen('Social Services', [
        'Medical & Dental Mission',
        'Calamity Assistance Program',
        'Share to Care & Christmas Cheers Program',
    ]),
    setObjectGen('Christian Formation / Spiritual Enhancement', [
        'SVD Faith Catechesis',
        'Recollection',
        'Theology 6 Community Services',
    ]),
    setObjectGen('Ecological / Environmental Protection & Rehabilitation Program', [
        setObjectGen('Care for Mother Earth Program', [
            'Cleanliness',
            'Beautification',
            'Fund Raising – " Pera sa Basura "',
        ]),
        'Distribution of Trash bins to DWCL Adopted communities',
        setObjectGen('Gulayan sa Barangay', 'Gulayan sa Harong kan kada Divinian')
    ]),
    setObjectGen('Community Infrastructure Projects', 'One Peso Campaign Project (Theology Department)'),
    setObjectGen('Other Prog./ Proj./ Activities', [
        'SVD Cup 2k17 for DWCL Employees',
        'Community Profiling to CES new adopted communities',
        'Community Researchers',
        'Organization of CES Volunteers',
        'CES Journal',
    ]),
    setObjectGen('Networking / Linkages & Fund Sourcing', [
        'Establishing linkages with LGU’s, GO’s, HEI’s, Social Welfare Institutions, and concerned parishes',
        'Soliciting fund through submission of Project Proposals to local and foreign Funding agencies',
    ])
]

const communities = [
    setObjectGen('Present', 'Brgy. Taysan, Legazpi City'),
    setObjectGen('Served Barangay', [
        'Brgy. Matanag Legazpi City',
        'Brgy. San Roque Legazpi City',
    ]),
    setObjectGen('Former', [
        'Brgy. Mi—Isi, Daraga Albay',
        'Brgy. Malobago, Daraga Albay',
        'Brgy. Kinawitan, Daraga, Albay',
        'Brgy. Mabini, Daraga Albay',
        'Brgy. Bagong Abre, Leg. City',
        'Brgy. Dita, Leg. City',
        'Brgy. Lamba , Leg. City',
        'Brgy. Buraguis, Leg. City',
        'Brgy. Mariawa, Leg. City',
        'Brgy. Maslog, Leg. City',
        'Brgy. Bariis, Leg. City',
        'Brgy. Imalnod, Leg. City',
        'Brgy. Bagacay, Leg. City',
        'Brgy. Estanza, Leg. City',
        'Brgy. Buhatan Sto. Domingo',
    ])
];

const members = [
    setObjectGen('CES Office Manager: Ivy Bismonte'),
    setObjectGen('CES Field Specialist: Ramonelle Ala'),
    setObjectGen('CES Chairman of the Council: Melchor Borcelis')
]

const coordinators = [
    setObjectGen('GS: Dindo Mendivel'),
    setObjectGen('SHS: Antonio Bañares'),
    setObjectGen('SAS: Mylene Entia'),
    setObjectGen('SED: Christine Bautista'),
    setObjectGen('SBMA: Anne Tablizo'),
    setObjectGen('SoECS: Victor Parillas Jr.'),
    setObjectGen('SoN: Ma. Luz Maristela'),
    setObjectGen('SHOM: Jacqueline Segarra'),
    setObjectGen('OMPO: Dina Alfane'),
    setObjectGen('FSDEP: Adelaida Perez'),
];

export {
    objectives,
    programs,
    communities,
    members,
    coordinators
}
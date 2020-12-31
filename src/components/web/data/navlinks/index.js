import {setObject} from '../../../../helpers';

const colleges = [
    setObject('SCHOOL OF NURSING', '/academics/school-of-nursing'),
    setObject('SCHOOL OF HOSPITALITY MANAGEMENT', '/academics/school-of-hospitality-management'),
    setObject('SCHOOL OF EDUCATION, ARTS AND SCIENCES', '/academics/school-of-education-arts-and-sciences'),
    setObject('SCHOOL OF ENGINERRING AND COMPUTER STUDIES', '/academics/school-of-engineering-and-computer-studies'),
    setObject('SCHOOL OF BUSINESS MANAGEMENT AND ACCOUNTANCY', '/academics/school-of-business-management-and-accountancy'),
];

export const menus = {
    home: { 
        link: '/',
    },
    about_us: {
        link: '#',
        items: [
            setObject('HISTORY', '/about-us/history'),
            setObject('THE SEAL', '/about-us/the-seal'),
            setObject('MISSION, VISION & GOAL', '/about-us/mission,-vision-&-goal'),
            setObject('THE HYMN', '/about-us/the-hymn'),
            setObject('THE JINGLE', '/about-us/the-jingle'),
            setObject('ST.ARNOLD\'S PRAYER', '/about-us/st.arnold\'s-prayer'),
            setObject('ADMINISTRATORS', '/about-us/administrators'),
            setObject('FACILITIES', '/about-us/facilities'),
            setObject('ORGANIZATIONAL STRUCTURE', '/about-us/organizational-structure'),
            setObject('AWARDS & RECOGNITION', '/about-us/awards-&-recognition'),
        ]
    },
    admission: {
        link: '/admission',
        items: [
            setObject('ONLINE ENROLLMENT', '/admission/online-enrollment'),
            setObject('GRADE SCHOOL', '/admission/grade-school'),
            setObject('JUNIOR HIGH SCHOOL', '/admission/junior-high-school'),
            setObject('FREE SECONDARY DISTANCE PROGRAM', '/admission/free-secondary-distance-program'),
            setObject('SENIOR HIGH SCHOOL', '/admission/senior-high-school'),
            setObject('COLLEGE', '/admission/college'),
            setObject('GRADUATE SCHOOL', '/admission/graduate-school'),
            setObject('SCHOLARSHIP', '/admission/scholarship'),
        ]
    },
    academics: {
        link: '#',
        items: [
            setObject('GRADE SCHOOL DEPARTMENT', '/academics/grade-school-department'),
            setObject('JUNIOR HIGH SCHOOL DEPARTMENT', '/academics/junior-high-school-department'),
            setObject('FREE SECONDARY DISTANCE PROGRAM', '/academics/free-secondary-distance-program'),
            setObject('SENIOR HIGH SCHOOL DEPARTMENT', '/academics/senior-high-school-department'),
            setObject('COLLEGE', '/academics/college', colleges),
            setObject('GRADUATE SCHOOL OF BUSINESS AND MANAGEMENT', '/academics/graduate-school-of-business-and-management'),
        ]
    },
    student_services: {
        link: '#',
        items: [
            setObject('COMMUNITY EXTENSION SERVICES', '/student_services/community-extension-services'),
            setObject('STUDENT AFFAIRS ORGANIZATION', '/student_services/student-affairs-organization'),
            setObject('ATHLETICS', '/student_services/athletics'),
            setObject('PUBLICATION', '/student_services/publication'),
            setObject('CAMPUS MINISTRY', '/student_services/campus-ministry'),
            setObject('SERBISYONG DIVINE', '/student_services/serbisyong-divine'),
            setObject('REGISTRAR', '/student_services/registrar'),
            setObject('RESEARCH', '/student_services/research'),
            setObject('CLINIC', '/student_services/clinic'),
            setObject('CANTEEN', '/student_services/canteen'),
        ]
    },
    career: {
        link: '/career'
    },
    gallery: {
        link: '/gallery'
    },
    updates: {
        link: '/updates',
        items: [
            setObject('CALENDAR', '/updates/calendar'),
            setObject('ANNOUNCEMENT', '/updates/announcement'),
            setObject('NEWS AND EVENTS', '/updates/news-and-events'),
        ]
    },
    contact_us: {
        link: '/contact-us'
    },
    alumni: {
        link: '/alumni'
    }
};
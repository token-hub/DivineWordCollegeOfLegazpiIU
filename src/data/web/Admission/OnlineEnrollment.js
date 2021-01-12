import { setObjectGen } from '../../../helpers';

const enrollment = [
    {header: 'ONLINE', title: 'Online Enrollment', link: 'https://online.dwc-legazpi.edu/' },
    {header: 'ON-SITE', title: 'Washington drive, Legazpi', link: '#'}    
];

const sched = [
    setObjectGen('New Students and Transferee', 'JUNE 01, 2020 - AUGUST 20, 2020'),
    setObjectGen('Old Students', 'JUNE 15, 2020 - AUGUST 20, 2020'),
];

const edu = ['Pre-kinder', 'Kinder', 'Grade school', 'Junior high school', 'Senior high school'];

export const onlineEnrollment = {
    enrollment,
    sched,
    edu
}
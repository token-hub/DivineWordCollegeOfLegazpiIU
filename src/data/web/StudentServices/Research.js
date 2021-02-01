import { setUpdates } from '../../../helpers';

const date = new Date('Jun 07 2019');
date.setHours(9);
date.setMinutes(30);

const dateObj = {
    day: date.getDate(),
    month: date.toLocaleString('default', { month: 'short' }),
    year: date.getFullYear(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
}

const researchData = [
    setUpdates(dateObj, 'research', 'Banhi', 'A Research Monograph for the Grade School Department', '/student-services/research/Banhi'),
    setUpdates(dateObj, 'research', 'Kadunung', 'A Research Monograph of the Office of Research', '/student-services/research/Kadunung'),
    setUpdates(dateObj, 'research',  'Lampara', 'A Research Monograph for the School of Nursing', '/student-services/research/Lampara'),
    setUpdates(dateObj, 'research',  'Liyab', 'A Research Monograph for the Junior High School Department', '/student-services/research/Liyab'),
    setUpdates(dateObj, 'research',  'Namit', 'A Research Monograph for the School of Hospitality Management', '/student-services/research/Namit'),
    setUpdates(dateObj, 'research',  'Ningas', 'A Research Monograph for the School of Education, Arts and Sciences', '/student-services/research/Ningas'),
    setUpdates(dateObj, 'research',  'Panganganinag', 'A Research Monograph for the School of Business, Management and Accountancy', '/student-services/research/Panganganinag'),
    setUpdates(dateObj, 'research',  'Saliksik', 'A Research Monograph for the Graduate School of Business and Management', '/student-services/research/Saliksik'),
    setUpdates(dateObj, 'research',  'Tinta', 'A Research Monograph for the Senior High School Department', '/student-services/research/Tinta'),
]

export const research = {
    researchData
}

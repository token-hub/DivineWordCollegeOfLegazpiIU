import { setUpdates } from '../../../helpers';

const date = new Date();
date.setFullYear(2020, 6, 7);
date.setHours(9);
date.setMinutes(30);

const dateObj = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
}

const researchData = [
    setUpdates(dateObj, null, 'Banhi', 'A Research Monograph for the Grade School Department'),
    setUpdates(dateObj, null, 'Kadunung', 'A Research Monograph of the Office of Research'),
    setUpdates(dateObj, null,  'Lampara', 'A Research Monograph for the School of Nursing'),
    setUpdates(dateObj, null,  'Liyab', 'A Research Monograph for the Junior High School Department'),
    setUpdates(dateObj, null,  'Namit', 'A Research Monograph for the School of Hospitality Management'),
    setUpdates(dateObj, null,  'Ningas', 'A Research Monograph for the School of Education, Arts and Sciences'),
    setUpdates(dateObj, null,  'Panganganinag', 'A Research Monograph for the School of Business, Management and Accountancy'),
    setUpdates(dateObj, null,  'Saliksik', 'A Research Monograph for the Graduate School of Business and Management'),
    setUpdates(dateObj, null,  'Tinta', 'A Research Monograph for the Senior High School Department'),
]

export const research = {
    researchData
}

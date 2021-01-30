import {setUpdates} from '../../helpers';
import {president} from '../../assets/images';

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

export const announcements = [
    setUpdates(dateObj, 'announcement', 'MODES OF PAYMENT', '', '/updates/announcements/MODES OF PAYMENT', president),
    setUpdates(dateObj, 'announcement', 'ADMINISTRATIVE GUIDELINE ON ENTRY TO DWCL CAMPUS DURING THE COMMUNITY QUARANTINE', '', '/updates/announcements/ADMINISTRATIVE GUIDELINE ON ENTRY TO DWCL CAMPUS DURING THE COMMUNITY QUARANTINE', president),
    setUpdates(dateObj, 'announcement', 'SCHOOL YEAR 2020-2021 BASIC EDUCATION', '', '/updates/announcements/SCHOOL YEAR 2020-2021 BASIC EDUCATION', president),
    setUpdates(dateObj, 'announcement', 'ENTRY PROTOCOLS AT DWCL CAMPUS DURING THE RELEASE OF STUDENT\'S CARDS', '', '/updates/announcements/ENTRY PROTOCOLS AT DWCL CAMPUS DURING THE RELEASE OF STUDENT\'S CARDS', president),
]
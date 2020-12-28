const setAnnouncement = (month, day, title, subtitle = null, link = '#', color='inherit') => {
    return {month, day, title, subtitle, link, color};
}

export const announcements = [
    setAnnouncement('Jul', '17', 'MODES OF PAYMENT'),
    setAnnouncement('Jul', '17', 'ADMINISTRATIVE GUIDELINE ON ENTRY TO DWCL CAMPUS DURING THE COMMUNITY QUARANTINE'),
    setAnnouncement('Jul', '17', 'SCHOOL YEAR 2020-2021 BASIC EDUCATION'),
    setAnnouncement('Jul', '17', 'ENTRY PROTOCOLS AT DWCL CAMPUS DURING THE RELEASE OF STUDENTS\' CARDS'),
]
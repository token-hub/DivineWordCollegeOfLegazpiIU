import { setObjectGen } from '../../../helpers';

const newStudents = [
    'DWCL College Admission Test Result',
    'Original Form 138/Grade 12 Report Card',
    'Certificate of Good Moral Character',
    'NSO/PSA Birth Certificate',
    '2 pieces 2x2 and 1 piece ID size picture',
    '1 long white folder',
    'Photocopy of Requirements No. 1 to 4',
];

const oldStudents = [
    'Certificate of Transfer Credentials/Honorable Dismissal',
    'Certificate of Good Moral Character',
    'Transcript of Records or Certified List of Subjects taken from previous school',
    'NSO/PSA Birth Certificate',
    '2 pieces 2x2 and 1 piece ID size picture',
    '1 long white folder',
    'Photocopy of Requirements No. 1 to 4',
];

const guidanceServices = [
    setObjectGen('Individual Inventory'),
    setObjectGen('Counseling',  setObjectGen('', ['On Call', 'For individual and Groups'])),
    setObjectGen('Interviews',  setObjectGen('', ['Intake Interview', 'Monitoring', 'Exit'])),
    setObjectGen('Seminars/ Trainings for Personal- Social- Emotional Growth: Upcoming'),
    setObjectGen('Placement', setObjectGen('', ['Intake Interview', 'Monitoring', 'Exit'])),
    setObjectGen('Career Development Program'),
    setObjectGen('Research and Evaluation'),
];

export const admission = {
    newStudents,
    oldStudents,
    guidanceServices
}
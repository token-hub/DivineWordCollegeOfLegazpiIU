import {setObject} from '../../helpers';

const academicPrograms = [
    setObject('Grade School Department', '/academics/grade-school-department'),
    setObject('Junior High School Department', '/academics/junior-high-school-department'),
    setObject('Free Secondary Discount Program', '/academics/free-secondary-discount-program'),
    setObject('Senior High School Department', '/academics/senior-high-school-department'),
    setObject('College', '/academics/college'),
    setObject('Graduate School of Business and Management', '/academics/graduate-school-of-business-and-management'),
];

const whyChoose = [
    setObject('Mission, Vision, Goal, Values', '/about-us/mission,-vision-&-goal'),
    setObject('History', '/about-us/history'),    
    setObject('School Facilities', '/about-us/facilities'),    
];

const admission = [
    setObject('Grade School', '/admission/grade-school'),
    setObject('Junior High School', '/admission/junior-high-school'),
    setObject('Free Secondary Distance Program', '/admission/free-secondary-distance-program'),
    setObject('Senior High School', '/admission/senior-high-school'),
    setObject('College', '/admission/college'),
    setObject('Graduate School', '/admission/graduate-school'),
];

export const quicklinks = {
    academicPrograms,
    whyChoose,
    admission
}
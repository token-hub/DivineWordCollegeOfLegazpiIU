const setQuickLinks = (link, title) => {
    return {link, title};
}

const academicPrograms = [
    setQuickLinks('#', 'Grade School Department'),
    setQuickLinks('#', 'Junior High School Department'),
    setQuickLinks('#', 'Free Secondary Discount Program'),
    setQuickLinks('#', 'Senior High School Department'),
    setQuickLinks('#', 'College'),
    setQuickLinks('#', 'Graduate School of Business and Management'),
];

const whyChoose = [
    setQuickLinks('#', 'Our Mission, Vision, Goal, Values'),
    setQuickLinks('#', 'History'),    
    setQuickLinks('#', 'School Facilities'),    
];

const admission = [
    setQuickLinks('#', 'Grade School'),
    setQuickLinks('#', 'Junior High School'),
    setQuickLinks('#', 'Free Secondary Distance Program'),
    setQuickLinks('#', 'Senior High School'),
    setQuickLinks('#', 'College'),
    setQuickLinks('#', 'Graduate School'),
];

export const quickLinksData = {
    academicPrograms,
    whyChoose,
    admission
}
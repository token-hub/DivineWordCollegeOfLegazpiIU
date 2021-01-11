import presidentImg from '../../../../assets/images/others/president.jpg';

const setCard = (link, title, image) => {
    return {link, title, image};
}

export const cards = [
    setCard('#', 'LECTURE AND WORKSHOP ON VARIOUS INSTRUCTIONAL TECHNOLOGIES', presidentImg),
    setCard('#', 'FACULTY TRAINING ON DIGITAL TOOLS FOR ONLINE CLASSES', presidentImg),
    setCard('#', 'COLLEGE AND GRADUATE SCHOOL ENROLLMENT FOR SY 2020-2021', presidentImg),
];


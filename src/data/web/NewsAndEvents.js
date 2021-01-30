import {setUpdates} from '../../helpers';
import {president} from '../../assets/images';
import workshop from '../../assets/images/newsAndEvents/july-16-2020 lecture-and-workshop-on-technology-01.jpg';
import digital from '../../assets/images/newsAndEvents/july-12-2020 training-online-class-01.jpg';
import enrollment from '../../assets/images/newsAndEvents/july-01-2020 college-and-graduate-school-enrollment.jpg';

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

export const newsAndEvents = [
    setUpdates(dateObj, 'news-and-event', 'LECTURE AND WORKSHOP ON VARIOUS INSTRUCTIONAL TECHNOLOGIES', 'The Divine Word College of Legazpi commits itself to providing quality education to its clientele', '/updates/news-and-events/LECTURE AND WORKSHOP ON VARIOUS INSTRUCTIONAL TECHNOLOGIES', workshop),
    setUpdates(dateObj, 'news-and-event', 'FACULTY TRAINING ON DIGITAL TOOLS FOR ONLINE CLASSES', 'The Divine Word College of Legazpi commits itself to providing quality education to its clientele', '/updates/news-and-events/FACULTY TRAINING ON DIGITAL TOOLS FOR ONLINE CLASSES', digital),
    setUpdates(dateObj, 'news-and-event', 'COLLEGE AND GRADUATE SCHOOL ENROLLMENT FOR SY 2020-2021', 'The Divine Word College of Legazpi commits itself to providing quality education to its clientele', '/updates/news-and-events/COLLEGE AND GRADUATE SCHOOL ENROLLMENT FOR SY 2020-2021', enrollment),
];


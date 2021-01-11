import { setObjectGen } from '../../../../helpers'

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PhonelinkIcon from '@material-ui/icons/Phonelink';
import RoomIcon from '@material-ui/icons/Room';

const contactIcon = {
    email: EmailIcon,
    phone: PhoneIcon,
    telefax: PhonelinkIcon,
    south: RoomIcon,
    north: RoomIcon,
}

const contactsText = {
    email: 'dwclinfo@dwc-legazpi.edu',
    phone: '(052)480-1239     (052)480-1239',
    telefax: 'Telefax: (052)480-2148     481-0350 (HS)',
    south: '(SOUTH CAMPUS) - cor.J.P Rizal and Fr. J.L. Bates Sts., Albay District, Legazpi City 4500 Philippines',
    north: '(NORTH CAMPUS) - Capt. F. Aquende Drive, Cruzada, Legazpi City 4500 Philippines',
}

const contacts = ['email', 'phone', 'telefax', 'south', 'north'];

const fields = [
    setObjectGen('Name', 'text'),
    setObjectGen('Email', 'email'),
    setObjectGen('Contact number', 'number'),
    setObjectGen('Subject', 'text'),
    setObjectGen('Message', 'textarea'),
];

export {
    contactsText,
    contacts,
    fields,
    contactIcon
}
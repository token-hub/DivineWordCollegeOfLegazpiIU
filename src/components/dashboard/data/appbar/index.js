import {setObject} from '../../../../helpers';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ImageIcon from '@material-ui/icons/Image';
import UpdateIcon from '@material-ui/icons/Update';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SettingsIcon from '@material-ui/icons/Settings';

const menus = [
    setObject('Home', '/dashboard/home'),
    setObject('User Management', null, [
        setObject('Roles', '/dashboard/roles'),
        setObject('Users', '/dashboard/users'),
    ]),
    setObject('Banner', null),
    setObject('Updates', '/dashboard/updates', [
        setObject('Announcement', '/dashboard/announcement'),
        setObject('News and Events', '/dashboard/news-and-events'),
    ])
];

const menuIconObject = {
    home: HomeIcon,
    users: PersonIcon,
    roles: BusinessCenterIcon,
    banner: ImageIcon,
    updates: UpdateIcon,
    announcement: AssignmentLateIcon,
    newsAndEvents: SportsHandballIcon,
    userManagement: SettingsIcon
}

export {
    menus,
    menuIconObject
}
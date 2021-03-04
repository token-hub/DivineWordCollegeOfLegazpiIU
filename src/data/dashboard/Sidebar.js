import {setObject} from '../../helpers';

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ImageIcon from '@material-ui/icons/Image';
import UpdateIcon from '@material-ui/icons/Update';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import RestoreIcon from '@material-ui/icons/Restore';

const menus = [
    setObject('Home', '/dashboard/home'),
    setObject('User Management', null, [
        setObject('Permissions', '/dashboard/permissions'),
        setObject('Roles', '/dashboard/roles'),
        setObject('Users', '/dashboard/users'),
    ]),
    setObject('Slides', '/dashboard/slides'),
    setObject('Updates', '/dashboard/updates', [
        setObject('Announcements', '/dashboard/announcement'),
        setObject('News and Events', '/dashboard/news-and-events'),
    ]),
    setObject('Logs', '/dashboard/logs'),
];

const menuIconObject = {
    home: HomeIcon,
    users: PersonIcon,
    roles: BusinessCenterIcon,
    slides: ImageIcon,
    updates: UpdateIcon,
    announcements: AssignmentLateIcon,
    newsAndEvents: SportsHandballIcon,
    userManagement: SettingsIcon,
    permissions: LockIcon,
    logs: RestoreIcon
}

export const sidebar = {
    menus,
    menuIconObject
}
import React, {useState, useContext} from 'react'
import {Paragraph, LinkTextIcon} from '../../atoms/dashboard';
import {DashboardContext} from '../../../contexts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon : {
        paddingLeft: '.5rem',
        "&:hover" : {
            cursor: 'pointer',
        }
    }
});

const RenderMenu = () => {

    const {icon} = useStyles();

    const {handleLogout, states: {users: {authenticated:{name}}}} = useContext(DashboardContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <Paragraph variant='h6' bold>{name}</Paragraph>

            <LinkTextIcon
             style={{ width: 'initial' }}
             aria-controls="user" 
             aria-haspopup="true" 
             onClick={handleClick} 
            >
                <div className={icon}> 
                    { Boolean(anchorEl) ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                </div> 
            </LinkTextIcon>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                disableScrollLock={true}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: -10, horizontal: "center" }}
                >
                <MenuItem component='a' href='/dashboard/profile' >Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default RenderMenu

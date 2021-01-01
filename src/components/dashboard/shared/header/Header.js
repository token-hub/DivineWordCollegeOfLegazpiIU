import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { dwclLogo } from '../../data/images';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 600
    },
    header: {
        width: '100%',
        height: '6rem',
        backgroundColor: theme.palette.primary.primary,
        padding: '.5rem 4rem',
        display: 'flex',
    },
    image: {
        maxHeight: '100%',
        maxWidth: '100%',
        background: 'cover'
    },
    left: {
        height: '100%',
        width: '250px',
        flex: 1
    },
    headerTitle: {
        color: 'white',
        padding: '0 1rem'
    },
    right: {
        display: 'flex',
        alignItems: 'center'
    },
    listIcon: {
        width: 0,
        color: 'gray'
    },
    noPadding: {
        padding: 0
    },
    icon: {
        color: 'white'
    }
}));

const Header = () => {

    const {bold, header, image, left, headerTitle, right, noPadding, listIcon, icon} = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid className={header}>
            <Grid container alignItems='center' className={left}>
                <img src={dwclLogo} alt='DWCL Logo' className={image} />
                <Typography variant='h6' className={clsx(bold, headerTitle)}> DWCL Panel</Typography>
            </Grid>
            <Grid item className={right}>
                <Typography variant='h6' className={clsx(bold, headerTitle)}> ADMIN</Typography>
                    <ListItem
                     className={noPadding}
                     aria-controls="user" 
                     aria-haspopup="true" 
                     onClick={handleClick} 
                     classes={{ root: listIcon }}
                     >
                    <ListItemIcon className={listIcon}>
                        <ExpandMoreIcon className={icon} />
                    </ListItemIcon>
                </ListItem>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Grid>
        </Grid>
    )
}

export default Header

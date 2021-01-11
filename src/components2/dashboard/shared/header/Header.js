import React, {useState, useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { dwclLogo } from '../../data/images';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Toolbar from '@material-ui/core/Toolbar';
import { DashboardContext } from '../../../../App';

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    bold: {
        fontWeight: 600
    },
    header: {
        width: '100%',
        height: '5rem',
        backgroundColor: theme.palette.secondary.main,
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
    listIcon: {
        width: 0,
        color: 'gray'
    },
    icon: {
        color: 'white'
    },
    noPaddingWidth: {
        padding: 0,
        width: 'initial'
    },
    right: {
        display: 'flex',
        alignItems: 'center'
    },
}));

const Header = () => {

    const {bold, header, image, left, headerTitle, right, noPadding, appBar} = useStyles();

    const {dashboardProvider: {user: {name}, handleLogout}} = useContext(DashboardContext);
  
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" className={appBar}>
        <Toolbar className={header}>
            <Grid container alignItems='center' className={left}>
                <img src={dwclLogo} alt='DWCL Logo' className={image} />
                <Typography variant='h6' className={clsx(bold, headerTitle)}> DWCL Panel</Typography>
            </Grid>
            <Grid item className={right}>
                <Typography variant='h6' className={clsx(bold, headerTitle)}> {name} </Typography>
                    <ListItem
                      style={{ width: 'initial' }}
                     aria-controls="user" 
                     aria-haspopup="true" 
                     onClick={handleClick} 
                     >
                        <ListItemIcon >
                            { Boolean(anchorEl) ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                        </ListItemIcon>
                    </ListItem>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: -10, horizontal: "center" }}
                    >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Grid>
        </Toolbar>
      </AppBar>
    )
}

export default Header

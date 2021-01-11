import React, {useState} from 'react'
import AppBarContent from './AppbarContent';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    toolbar: {
        backgroundColor: '#101820'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        backgroundColor: theme.palette.primary.dark
    },
    title: {
        fontSize: '1rem'
    },
    list: {
        width: 250,
        color: 'white'
    },
    menuButton : {
        display: 'flex',
        alignItems: 'center'
    },
}));
const Appbar = () => {

    const {title, toolbar, list, menuButton, paper} = useStyles();

    const [appbar, setAppbar] = useState(false);

    const toggleDrawer = open => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setAppbar(open); 
      };

    const leftList = () => (
    <div
        className={list}
        role="presentation"
    >
        <AppBarContent />
    </div>
    );

    return (
        <AppBar position="sticky" className={toolbar} key={'left'}>
            <Toolbar variant='dense'>
                <div className={menuButton} onClick={toggleDrawer(true)}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography className={title} variant="h6" noWrap>
                        Menu
                    </Typography>
                </div>
                <React.Fragment key={'left'}>
                    <SwipeableDrawer
                        classes={{ paper: paper }}
                        anchor={'left'}
                        open={appbar}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        {leftList()}
                    </SwipeableDrawer>
                </React.Fragment>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar

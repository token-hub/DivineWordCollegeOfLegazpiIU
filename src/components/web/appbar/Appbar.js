import React from 'react'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    toolbar: {
        backgroundColor: '#101820'
    },
    root: {
        flexGrow: 1,
      },
      title: {
       fontSize: '1rem'
      },
}));

const Appbar = () => {

    const {title, toolbar} = useStyles();

    return (
        <AppBar position="static" className={toolbar}>
            <Toolbar variant='dense'>
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
            </Toolbar>
        </AppBar>
    )
}

export default Appbar

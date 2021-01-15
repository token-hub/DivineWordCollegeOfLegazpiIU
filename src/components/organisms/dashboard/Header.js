import React from 'react'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import {LogoWithText, RenderMenu} from '../../molecules/dashboard';

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
        width: '100%',
        height: '5rem',
        backgroundColor: theme.palette.secondary.main,
        padding: '.5rem 4rem',
        display: 'flex',
    },
    left: {
        height: '100%',
        width: '250px',
        flex: 1
    },
    right: {
        display: 'flex',
        alignItems: 'center'
    },
}));

const Header = () => {

    const {appBar, toolbar, right, left} = useStyles();

    return (
        <AppBar position="fixed" className={appBar}>
            <Toolbar className={toolbar}>
                <Grid container alignItems='center' className={left}>
                    <LogoWithText /> 
                </Grid>
                <Grid item className={right}>
                    <RenderMenu />
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header

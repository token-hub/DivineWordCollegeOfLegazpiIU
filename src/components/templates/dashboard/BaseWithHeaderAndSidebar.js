import React from 'react'
import {Base} from './';
import {Header} from '../../organisms/dashboard';
import {Sidebar} from '../../organisms/dashboard';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper:{
        padding: '1.5rem 2rem',
        minHeight: '81vh',
        height: 'auto',
        [theme.breakpoints.only('xl')] : {
            minHeight: '85vh',
        }
    },
    toolbar: {
        minHeight: '70px',
    },
    content: {
        width: '81%',
        padding: theme.spacing(5),
        backgroundColor: '#E3E3FE',

        [theme.breakpoints.only('xl')]:{
            width: '85%'
        }
    },
}))

const BaseWithHeaderAndSidebar = ({ children }) => {

    const {toolbar, content, paper} = useStyles();

    return (
        <Base>
            <Header />
            <Sidebar />
            <main className={content}>
                <Toolbar classes={{ regular: toolbar }} />
                <Paper variant='elevation' className={paper}>
                    { children }
                </Paper>
            </main>
        </Base>
    )
}

export default BaseWithHeaderAndSidebar

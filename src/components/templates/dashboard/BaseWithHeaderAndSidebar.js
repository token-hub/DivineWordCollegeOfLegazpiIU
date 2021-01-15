import React from 'react'
import {Base} from './';
import {Header} from '../../organisms/dashboard';
import {Sidebar} from '../../organisms/dashboard';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    paper:{
        padding: '1.5rem 2rem',
        minHeight: '81vh',
        height: 'auto'
    },
    toolbar: {
        minHeight: '70px',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(5),
        backgroundColor: '#E3E3FE',
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

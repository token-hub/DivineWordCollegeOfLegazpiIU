import React from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Base from '../base';
import Header from '../../shared/header';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#5F5AEF',
    }
});

const DashboardLayout = ({ children }) => {

    const {bold, root} = useStyles();

    return (
        <Base root={root}>
            <Header />
            {children}
        </Base>
    )
}

export default DashboardLayout

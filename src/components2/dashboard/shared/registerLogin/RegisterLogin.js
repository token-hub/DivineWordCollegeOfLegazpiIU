import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Base from '../base';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.dark,
        minHeight: '100vh',
        height: 'auto', 
    },
    container: {
        width: '100%',
        height: 'auto',   
    },
    content: {
        padding: '1rem 2rem',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: '5%',

        [theme.breakpoints.only('xs')] : {
            padding: '1rem',
        }
    },
}));

const RegisterLogin = ({ children }) => {

    const { container, content, root } = useStyles();

    return (
        <Base root={root}>
            <Grid item md={3} />
            <Grid container alignItems='center' item md={6}>
                    <Grid container direction='row' alignItems='center' justify='center' className={container}>
                        <Grid item xs={10} md={8} xl={6} className={content}>
                            { children }
                        </Grid>
                    </Grid>
                </Grid>
            <Grid item md={3} />
        </Base>
    )
}

export default RegisterLogin

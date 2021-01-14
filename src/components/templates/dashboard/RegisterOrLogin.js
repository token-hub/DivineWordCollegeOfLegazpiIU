import React from 'react'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {LinkTextIcon, Paragraph} from '../../../components/atoms/dashboard';
import {Base} from './';

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
    top: {
        height: '5%',
    },
    icon: {
        color: 'gray',
    },
    mainText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
        width: '100%'
    },
    bottom: {
        height: '95%',
    },
}))

const RegisterOrLogin = ({topTitle, topLink = '#', mainTitle, children }) => {

    const {container, content, root, top, icon, mainText, bottom} = useStyles();

    return (
        <Base root={root}>
            <Grid item md={3} />
            <Grid container alignItems='center' item md={6}>
                    <Grid container direction='row' alignItems='center' justify='center' className={container}>
                        <Grid item xs={10} md={8} xl={6} className={content}>
                            <Grid item className={top}>
                                <LinkTextIcon title={topTitle} link={topLink} textColor='#525257'>
                                    <ChevronLeftIcon className={icon} />
                                </LinkTextIcon>
                            </Grid>
                            <Grid item className={mainText}>
                                <Paragraph color='secondary' variant='h5'>{mainTitle}</Paragraph>
                            </Grid>
                            <Grid item className={bottom}>
                                {children}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            <Grid item md={3} />
        </Base>
    )
}

export default RegisterOrLogin

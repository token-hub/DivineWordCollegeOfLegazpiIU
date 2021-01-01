import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import RegisterLogin from '../../shared/registerLogin';
import RenderListIcon from '../../../shared/renderListIcon';
import RenderTextfield from '../../shared/renderTextfield/RenderTextfield';
import {register} from '../../data/register';

const useStyles = makeStyles(theme => ({
    paragraph: {
        marginBottom: '1.5rem'
    },
    icon: {
        color: 'gray',
    },
    Top: {
        height: '5%',
    },
    Bottom: {
        height: '95%',
    },
    BottomHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
        width: '100%'
    },
    BottomMain: {
        alignItems: 'center',
        height: '40%',
        width: '100%',
        padding: '1rem'
        // padding: '1rem 2rem',
    },
    BottomFooter: {
        height: '20%',
        width: '100%',
    },
    input: {
        marginBottom: '1.5rem',
    },
}));

const Register = () => {

    const {
        paragraph, 
        icon, 
        Top, 
        Bottom, 
        BottomHeader, 
        BottomFooter, 
        BottomMain, 
    } = useStyles();

    return (
        <RegisterLogin>
            <div className={Top}>
                <RenderListIcon text='Login' link='/dashboard/login' textColor='#525257'>
                    <ChevronLeftIcon className={icon} />
                </RenderListIcon>
            </div>
            <div className={Bottom}>
                <div className={BottomHeader}>
                    <Typography variant='h5' color='secondary' className={paragraph}>
                        Register
                    </Typography>
                </div>
                <form>
                    <div className={BottomMain}>
                        <RenderTextfield data={register} />
                    </div>

                    <div className={BottomFooter}>
                        <Button variant="contained" fullWidth size='large' color='secondary'>Register</Button>
                    </div>
                </form>
            </div>
        </RegisterLogin>
    )
}

export default Register

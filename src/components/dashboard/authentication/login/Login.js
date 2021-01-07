import React, {useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import RenderListIcon from '../../../shared/renderListIcon';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import RegisterLogin from '../../shared/registerLogin';
import RenderTextfield from '../../shared/renderTextfield/RenderTextfield';
import {login} from '../../data/login';
import axios from 'axios';
import apiClient from '../../../../services/api';

const useStyles = makeStyles(theme => ({
    paragraph: {
        marginBottom: '1.5rem'
    },  
    white: {
        color: 'white'
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
        padding: '1rem',
    },
    BottomFooter: {
        height: '20%',
        width: '100%',
    },
    input: {
        marginBottom: '1.5rem',
    },
}));



const handleSubmit = e => {
    e.preventDefault();
    // axios.defaults.withCredentials = true;
    // axios.get(`${apiClient}/sanctum/csrf-cookie`, {withCredentials: true}) 
    // .then(response => {
    //     // axios.post(`${apiClient}/login`, {
    //     //     email: 'sample',
    //     //     password: 'password'
    //     // }).then(response => {
    //     //     console.log(response)
    //     // })
    // });

    apiClient.get('/sanctum/csrf-cookie')
    .then(response => {
        // apiClient.post('/login', {
        //     email: 'email',
        //     password: 'password'
        // }).then(response => {
        //     console.log(response)
        // })
    });

}

const handleLogout = e => {
    e.preventDefault();
    apiClient.post(`${apiClient}/logout`).then(response => {
        console.log(response)
    })
}

const Login = () => {
    // axios.defaults.withCredentials = true;
    // axios.defaults.baseURL = 'http://localhost:8000';
    // useEffect( ()=>{
    //     axios.get('/sanctum/csrf-cookie')
    //     .then(res => console.log(res))
    //     .log(e => console.log(e))
    // //     apiClient.get('sanctum/csrf-cookie')
    // //     .then( response => console.log(response) )
    // //     .catch( error => console.log(error) )
    // }, [] )

    const {
        paragraph, 
        icon, 
        Top, 
        Bottom, 
        BottomHeader, 
        BottomFooter, 
        BottomMain, 
        input,
    } = useStyles();

    return (
       <RegisterLogin>
            <div className={Top}>
                <RenderListIcon text='Return to website' link='/' textColor='#525257'>
                    <ChevronLeftIcon className={icon} />
                </RenderListIcon>
            </div>
            <div className={Bottom}>
                <div className={BottomHeader}>
                    <Typography variant='h5' color='secondary' className={paragraph}>
                        SIGN IN
                    </Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={BottomMain}>
                        <RenderTextfield data={login} />
                        <FormGroup row> 
                            <FormControlLabel control={<Checkbox size='small' name="rememberMe" />} label="Remember me" />
                        </FormGroup>
                    </div>

                    <div className={BottomFooter}>
                        <Button type='submit' variant="contained" fullWidth size='large' color='secondary'>Login</Button>
                        <Grid container direction='row' justify='center'>
                            <Button variant="text" href='#'  size='small' color='secondary'>Forgot password?</Button>
                            <Typography color='primary' style={{ paddingTop: '2px' }}>/</Typography>
                            <Button variant="text" href='/dashboard/register' size='small' color='secondary'>Register</Button>
                        </Grid>
                    </div>
                </form>
                <Button type='submit' variant="contained" fullWidth size='large' color='secondary' onClick={handleLogout}>Logout</Button>
            </div>
       </RegisterLogin>
    )
}

export default Login

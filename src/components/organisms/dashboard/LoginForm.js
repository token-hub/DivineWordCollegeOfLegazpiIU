import React, {useContext, useEffect}  from 'react'
import {useLocation} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {RenderTextfield} from '../../atoms/dashboard';
import {login} from '../../../data/dashboard/Authentication';
import {DashboardContext} from '../../../contexts';

const useStyles = makeStyles({
    fields: {
        alignItems: 'center',
        height: '40%',
        width: '100%',
        padding: '1rem',
    },
    button: {
        height: '20%',
        width: '100%',
    },
})


const LoginForm = () => {
    const {fields, button} = useStyles();

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const messages = query.get('messages');

    const {data} = login;

    const {handleLogin, handleSnackbar} = useContext(DashboardContext);

    if (messages) {
        handleSnackbar(messages, 'success');
    }

    return (
        <form onSubmit={handleLogin}>
            <div className={fields}>
                <RenderTextfield data={data} />
                <FormGroup row> 
                    <FormControlLabel control={<Checkbox size='small' name="rememberMe" />} label="Remember me" />
                </FormGroup>
            </div>

            <div className={button}>
                <Button type='submit' variant="contained" fullWidth size='large' color='secondary'>Login</Button>
                <Grid container direction='row' justify='center'>
                    <Button variant="text" href='/dashboard/password/reset'  size='small' color='secondary'>Forgot password?</Button>
                    <Typography color='primary' style={{ paddingTop: '2px' }}>/</Typography>
                    <Button variant="text" href='/dashboard/register' size='small' color='secondary'>Register</Button>
                </Grid>
            </div>
        </form>
    )
}

export default LoginForm

import React from 'react';
import {RegisterOrLogin} from "../../../components/templates/dashboard";
import {LoginForm} from '../../../components/organisms/dashboard';

const Login = () => {
      
    return (
        <RegisterOrLogin topTitle='Return to website' mainTitle='SIGN IN' link='/'>
            <LoginForm />
        </RegisterOrLogin>
    )
}

export default Login

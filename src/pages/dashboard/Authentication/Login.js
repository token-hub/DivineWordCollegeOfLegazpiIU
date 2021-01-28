import React from 'react';
import {Authentication} from "../../../components/templates/dashboard";
import {LoginForm} from '../../../components/organisms/dashboard';

const Login = () => {
      
    return (
        <Authentication topTitle='Return to website' mainTitle='SIGN IN' topLink='/'>
            <LoginForm />
        </Authentication>
    )
}

export default Login

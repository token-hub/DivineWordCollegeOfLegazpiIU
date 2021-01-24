import React from 'react';
import {RegisterOrLogin} from "../../../components/templates/dashboard";
import {LoginForm} from '../../../components/organisms/dashboard';

const Login = () => {
      
    return (
        <div style={{ height: '100vh', overflowY: 'hidden' }}>
            <RegisterOrLogin topTitle='Return to website' mainTitle='SIGN IN' link='/'>
                <LoginForm />
            </RegisterOrLogin>
        </div>

    )
}

export default Login

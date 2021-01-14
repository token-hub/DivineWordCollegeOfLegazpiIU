import React from 'react'
import {RegisterOrLogin} from '../../../components/templates/dashboard';
import {RenderForm} from '../../../components/molecules/dashboard';
import {register} from '../../../data/dashboard/Authentication';

const Register = () => {

    const {inputFields} = register;

    return (
        <RegisterOrLogin topTitle='Login' mainTitle='REGISTER' topLink='/dashboard/login'>
            <RenderForm buttonTitle='Submit' inputFields={inputFields} />
        </RegisterOrLogin>
    )
}

export default Register

import React, {useContext} from 'react'
import {RegisterOrLogin} from '../../../components/templates/dashboard';
import {RenderForm} from '../../../components/molecules/dashboard';
import {register} from '../../../data/dashboard/Authentication';
import {DashboardContext} from '../../../contexts';

const Register = () => {

    const {inputFields} = register;
    const {handleRegister} = useContext(DashboardContext);

    return (
        <RegisterOrLogin topTitle='Login' mainTitle='REGISTER' topLink='/dashboard/login'>
            <RenderForm buttonTitle='Submit' inputFields={inputFields} handleSubmit={handleRegister} />
        </RegisterOrLogin>
    )
}

export default Register

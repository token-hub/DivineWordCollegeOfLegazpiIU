import React, {useContext} from 'react'
import {RegisterOrLogin} from '../../../components/templates/dashboard';
import {RenderForm} from '../../../components/molecules/dashboard';
import {DashboardContext} from '../../../contexts';

const PasswordReset = () => {

    const {handlePasswordReset} = useContext(DashboardContext);

    return (
        <RegisterOrLogin topTitle='Login' mainTitle='Reset Password' topLink='/dashboard/login'>
            <RenderForm buttonTitle='Submit' inputFields={[{ item: 'email', value: 'text'}]} handleSubmit={handlePasswordReset} />
        </RegisterOrLogin>
    )
}

export default PasswordReset

import React, {useContext} from 'react'
import {Authentication} from '../../../components/templates/dashboard';
import {RenderForm} from '../../../components/molecules/dashboard';
import {DashboardContext} from '../../../contexts';

const PasswordReset = () => {

    const {handlePasswordReset} = useContext(DashboardContext);

    return (
        <Authentication topTitle='Login' mainTitle='Reset Password' topLink='/dashboard/login'>
            <RenderForm buttonTitle='Submit' inputFields={[{ item: 'email', value: 'text'}]} handleSubmit={handlePasswordReset} />
        </Authentication>
    )
}

export default PasswordReset

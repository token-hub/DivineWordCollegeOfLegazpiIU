import React, {useContext} from 'react'
import {Authentication} from '../../../components/templates/dashboard';
import {RenderForm} from '../../../components/molecules/dashboard';
import {DashboardContext} from '../../../contexts';
import {useLocation} from 'react-router-dom';
import {setObjects} from '../../../helpers';

const ManagePasswordReset = () => {

    const location = useLocation();

    const query = new URLSearchParams(location.search);

    const token = query.get('token');
    const email = query.get('email');

    const data = setObjects(['name', 'type', 'value'], [
        ['token', 'hidden', token],
        ['email', 'email', email],
        ['password', 'password', ''],
        ['password confirmation', 'password', ''],
    ]);

    const fields = token ? data : [{ name: 'email', type: 'email', value: ''}];

    const {handleSendPasswordResetLink, handlePasswordReset} = useContext(DashboardContext);

    const handler = token ? handlePasswordReset : handleSendPasswordResetLink;

    return (
        <Authentication topTitle='Login' mainTitle='Reset Password' topLink='/dashboard/login'>
            <RenderForm buttonTitle='Submit' inputFields={fields} handleSubmit={handler} />
        </Authentication>
    )
}

export default ManagePasswordReset

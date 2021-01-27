import React, {useContext} from 'react'
import {RenderForm} from '../../components/molecules/dashboard';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../components/templates/dashboard';
import {DashboardContext} from '../../contexts';
import {setObjects} from '../../helpers';

const Profile = () => {
    const {states: {user:{ name, username, email}}} = useContext(DashboardContext);

    const data = setObjects(['name', 'type', 'value'], [
        ['name', 'text', name],
        ['email', 'email', email],
        ['username', 'text', username],
    ]);

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header='Profile' linkTitle='Change password' link='/dashboard/password/edit' >
            <RenderForm buttonTitle='Update' inputFields={data} handleSubmit={()=> alert('submitted')} />
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default Profile

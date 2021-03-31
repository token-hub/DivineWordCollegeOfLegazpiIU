import React, {useContext} from 'react'
import {RenderForm} from '../../components/molecules/dashboard';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../components/templates/dashboard';
import {DashboardContext} from '../../contexts';
import {setObjects} from '../../helpers';

const Profile = () => {
    const {states: {users:  {authenticated}}, handleChangeProfileInfo} = useContext(DashboardContext);
    const {name, username, email} = authenticated;
    const isAuthenticatedNotEmpty = Object.keys(authenticated).length > 1;


    const data = setObjects(['name', 'type', 'value'], [
        ['name', 'text', name],
        ['email', 'email', email],
        ['username', 'text', username],
    ]);

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header='Profile' linkTitle='Change password' link='/dashboard/password/edit' >
          {isAuthenticatedNotEmpty && <RenderForm buttonTitle='Update' inputFields={data} handleSubmit={handleChangeProfileInfo} />}  
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default Profile

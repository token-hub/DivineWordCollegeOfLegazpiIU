import React, {useContext} from 'react'
import {RenderForm} from '../../../components/molecules/dashboard';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {passwordEdit} from '../../../data/dashboard';
import {DashboardContext} from '../../../contexts';

const PasswordEdit = () => {

    const {data} = passwordEdit;
    const {handleChangePassword} = useContext(DashboardContext);

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header='Change password'>
            <RenderForm buttonTitle='submit' inputFields={data} handleSubmit={handleChangePassword} />
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default PasswordEdit

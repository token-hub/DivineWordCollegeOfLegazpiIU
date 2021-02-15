import React, {useEffect, useContext} from 'react'
import {useParams, useLocation} from 'react-router-dom';
import {RenderForm} from '../../../../components/molecules/dashboard';
import {BasicTable} from '../../../../components/organisms/dashboard';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../../components/templates/dashboard';
import {DashboardContext} from '../../../../contexts';
import {setObjects} from '../../../../helpers';

const ManageRoles = () => {

    const {role} = useParams();
    const location = useLocation();
    const isEdit = location.pathname.includes('edit');

    const {addRole, updateRole, getSelectedRole, states:{roles:{selected}}} = useContext(DashboardContext);

    useEffect( () => {
        if (role) {
            getSelectedRole(role);
        }
    }, []);

    const renderAddRolePage = () => {
        const data = setObjects(['name', 'type', 'value'], [
            ['description', 'text', ''],
            ['permissions', 'select', 1],
        ]);
        return <RenderForm buttonTitle='Submit' inputFields={data} handleSubmit={addRole} />
    }

    const renderShowRolePage = () => {
        if (Object.keys(selected).length > 0) {
            const {description, created_at, permissions} = selected;

            const data = setObjects(
                ['date', 'description', 'permissions'],
                [[created_at, description, permissions]]);

            return <BasicTable data={data} />
        }
    }

    const renderEditRolePage = () => {
        if (Object.keys(selected).length > 0) {
            const {description} = selected;

            const data = setObjects(['name', 'type', 'value'], [
                ['description', 'text', description],
                ['permissions', 'select', 1],
            ]);
            return <RenderForm buttonTitle='Submit' inputFields={data} handleSubmit={updateRole(role)} />
        }
    }

    const renderHeaderTitle = () => {
        return rolesConditions('Add new role', 'Show role', 'Edit Role');
    }

    const rolesConditions = (isAddPage, isShowPage, isEditPage) => {
        return !role && !isEdit 
                ? isAddPage
                : role && !isEdit
                    ? isShowPage
                    : isEditPage
    }

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header={renderHeaderTitle()} link='/dashboard/roles' linkTitle='All roles'>
            {rolesConditions(renderAddRolePage(), renderShowRolePage(), renderEditRolePage())}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default ManageRoles

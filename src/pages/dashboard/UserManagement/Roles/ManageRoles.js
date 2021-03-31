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
    const {addRole, updateRole, getSelectedRole, getPermissions, states:{roles:{selected}, permissions}} = useContext(DashboardContext);
    const isPermissionEmpty = Object.keys(permissions).length < 1;
    const isSelectedRoleIsNotEmpty = Object.keys(selected).length > 0;

    useEffect(() => {
        if (role) {
            getSelectedRole(role);
        }

        if (isPermissionEmpty) {
            getPermissions();
        }
    }, []);

    const renderAddRolePage = () => {
        if (!isPermissionEmpty) {
            const filteredPermissions = permissions.map(({id, description}) => ({id, description}))
            
            const data = setObjects(['name', 'type', 'value'], [
                ['description', 'text', ''],
                ['permissions', 'select', 
                    {
                        values: filteredPermissions,
                        multiple: true
                    }
                ],
            ]);
            return <RenderForm buttonTitle='Submit' inputFields={data} handleSubmit={addRole} />
        }
    }

    const renderShowRolePage = () => {
        if (isSelectedRoleIsNotEmpty) {
            const {description, created_at, permissions} = selected;

            const data = setObjects(
                ['date', 'description', 'permissions'],
                [[created_at, description, permissions]]);

            return <BasicTable data={data} />
        }
    }

    const renderEditRolePage = () => {
        if (isSelectedRoleIsNotEmpty && !isPermissionEmpty) {
            const {description} = selected;
            const filteredPermissions = permissions.map(({id, description}) => ({id, description}))
            const default_value = selected.permissions.map(({id}) => id);

            const data = setObjects(['name', 'type', 'value'], [
                ['description', 'text', description],
                ['permissions', 'select', {
                    values: filteredPermissions,
                    default_value,
                    multiple: true
                }],
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

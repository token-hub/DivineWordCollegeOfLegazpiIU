import React, {useContext, useEffect} from 'react'
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../../components/templates/dashboard';
import {DataTable, BasicTable} from '../../../../components/organisms/dashboard';
import {RenderForm} from '../../../../components/molecules/dashboard';
import {DashboardContext} from '../../../../contexts';
import Button from '@material-ui/core/Button';
import {useParams, useLocation} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

import {
    createTableHeadCells, 
    setObjects,
    getStringDescriptionFromArrayObject
} from '../../../../helpers';

const useStyles = makeStyles({
    active: {
        backgroundColor: '#46a349',
        "&:hover":{
            backgroundColor: '#388e3c'
        }
    },
    inactive: {
        backgroundColor: '#f23a5b',
        "&:hover":{
            backgroundColor: '#d32f2f'
        }
    }
});

const ManageUsers = () => {
    const {user} = useParams();
    const location = useLocation();
    const {states: {users, roles}, 
        updateUser, 
        getSelectedUser, 
        getRoles,
    } = useContext(DashboardContext);
    const isEdit = location.pathname.includes('edit');
    const {selected} = users;
    const isSelectedUserEmpty = Object.keys(selected).length < 1;
    const isRolesEmpty = Object.keys(roles.all).length < 1;

    useEffect(()=>{
        if (isRolesEmpty) {
            getRoles();
        }
    }, [])
    
    useEffect(() => {
        if (user && isSelectedUserEmpty) {
            getSelectedUser(user);
        }
    }, [selected]);

    const renderShowUserPage = () => {
        if (!isSelectedUserEmpty) {
            const {created_at, email, name, username, is_active, roles} = users.selected;
            const accountStatus = is_active === 1 ? 'Active' : 'Inactive';

            const data = setObjects(
                ['date', 'email', 'name', 'username', 'account status', 'roles'],
                [[created_at, email, name, username, accountStatus, roles]]);

            return <BasicTable data={data} />
        }
    }

    const renderEditUserPage = () => {
        if (!isSelectedUserEmpty && !isRolesEmpty) {
            const allRoles = roles.all;
            const filteredRoles = allRoles.map(({id, description}) => ({id, description}))
            const default_value = users.selected.roles.map(({id}) => id);

            const data = setObjects(['name', 'type', 'value'], [
                ['username', 'disabled', users.selected.username],
                ['roles', 'select', {
                    values: filteredRoles,
                    default_value,
                    multiple: true
                }],
            ]);
            return <RenderForm buttonTitle='Submit' inputFields={data} handleSubmit={updateUser(user)} />
        }
    }

    const renderHeaderTitle = () => {
        return userConditions('Show user', 'Edit user');
    }

    const userConditions = (isShowPage, isEditPage) => {
        return user 
                &&  isEdit
                    ? isEditPage
                    : isShowPage 
    }

    const renderHeaderLink = user && {link: '/dashboard/users', linkTitle: 'All Users'};

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header={renderHeaderTitle()} link='/'  {...renderHeaderLink}>
            {userConditions(renderShowUserPage(), renderEditUserPage())}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default ManageUsers

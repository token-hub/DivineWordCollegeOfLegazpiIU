import React, {useContext, useEffect} from 'react'
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {DataTable, BasicTable} from '../../../components/organisms/dashboard';
import {RenderForm} from '../../../components/molecules/dashboard';
import {DashboardContext} from '../../../contexts';
import Button from '@material-ui/core/Button';
import {useParams, useLocation} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

import {
    createTableHeadCells, 
    setObjects,
    getStringDescriptionFromArrayObject
} from '../../../helpers';

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
    const {active, inactive} = useStyles();
    const location = useLocation();
    const {states: {users, roles}, handleUserAccountActivateDeactivation, deleteUser, updateUser, getSelectedUser, getUsers} = useContext(DashboardContext);
    const isEdit = location.pathname.includes('edit');
    const {selected, all} = users;
    const isSelectedUserEmpty = Object.keys(selected).length < 1;
    const isAllUserEmpty = Object.keys(all).length < 1;
    
    useEffect(() => {
        if (user && isSelectedUserEmpty) {
            getSelectedUser(user);
        }
    }, [selected]);

    useEffect(() => {
        if (isAllUserEmpty) {
            getUsers();
        }
    }, [all]);

    const renderButton = (status, id) => {
        const text = status ? 'Active' : 'Inactive';
        const setClass = status ? active : inactive;
        return (
            <Button 
                variant='contained' 
                size='small' 
                color='primary' 
                className={setClass}
                onClick={handleUserAccountActivateDeactivation(id, !status)}
            >
            {text}
            </Button>
        )
    }

    const rows = users.all.length > 0 && users.all.map( ({id, username, created_at, is_active, roles}) => {  
        
        return {
            id,
            date: created_at,
            username,
            roles:  getStringDescriptionFromArrayObject(roles),
            status: renderButton(is_active, id)
        }
    })

    const headCells = createTableHeadCells(rows);

    const renderShowUserPage = () => {
        if (Object.keys(users.selected).length > 0) {
            const {created_at, email, name, username, is_active, roles} = users.selected;
            const accountStatus = is_active === 1 ? 'Active' : 'Inactive';

            const data = setObjects(
                ['date', 'email', 'name', 'username', 'account status', 'roles'],
                [[created_at, email, name, username, accountStatus, roles]]);

            return <BasicTable data={data} />
        }
    }

    const renderEditUserPage = () => {
        if (Object.keys(users.selected).length > 0 && Object.keys(roles.all).length > 0) {
            const allRoles = roles.all;
            const filteredRoles = allRoles.map(({id, description}) => ({id, description}))
            const default_value = users.selected.roles.map(({id}) => id);

            const data = setObjects(['name', 'type', 'value'], [
                ['roles', 'select', {
                    values: filteredRoles,
                    default_value,
                    multiple: true
                }],
            ]);
            return <RenderForm buttonTitle='Submit' inputFields={data} handleSubmit={updateUser(user)} />
        }
    }

    const renderShowAllPage = () => {
        return rows.length > 0 && 
        <DataTable 
            rows={rows} 
            headCells={headCells} 
            link='/dashboard/users' 
            toolbar={['show', 'edit', 'delete']}
            handleDelete={deleteUser}
        />
    }

    const renderHeaderTitle = () => {
        return userConditions('Show user', 'Edit user', 'Users');
    }

    const userConditions = (isShowPage, isEditPage, isShowAllPage) => {
        return user 
                ?  isEdit
                    ? isEditPage
                    : isShowPage 
                :  isShowAllPage
    }

    const renderHeaderLink = user && {link: '/dashboard/users', linkTitle: 'All Users'};

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header={renderHeaderTitle()} link='/'  {...renderHeaderLink}>
            {userConditions(renderShowUserPage(), renderEditUserPage(), renderShowAllPage())}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default ManageUsers

import React, {useContext, useEffect} from 'react'
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {DataTable, BasicTable} from '../../../components/organisms/dashboard';
import {DashboardContext} from '../../../contexts';
import Button from '@material-ui/core/Button';
import {useParams} from 'react-router-dom';
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
    const {getUsers, states: {users}, handleUserAccountActivateDeactivation, deleteUser, getSelectedUser} = useContext(DashboardContext);

    useEffect(() => {
        getUsers();

        if (user) {
            getSelectedUser(user);
        }
    }, []);

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

    const renderSelectedUser = () => {
        if (Object.keys(users.selected).length > 0) {
            const {created_at, email, name, username, is_active, roles} = users.selected;
            const accountStatus = is_active === 1 ? 'Activate' : 'Inactive';

            const data = setObjects(
                ['date', 'email', 'name', 'username', 'account status', 'roles'],
                [[created_at, email, name, username, accountStatus, roles]]);

            return <BasicTable data={data} />
        }
    }

    const renderUsersTable = () => {
        return rows.length > 0 && 
        <DataTable 
            rows={rows} 
            headCells={headCells} 
            link='/dashboard/users' 
            toolbar={['show', 'delete']}
            handleDelete={deleteUser}
        />
    }

    const renderHeaderLink = user && {link: '/dashboard/users', linkTitle: 'All Users'};

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header='Users' link='/'  {...renderHeaderLink}>
            {user ? renderSelectedUser() : renderUsersTable()}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default ManageUsers

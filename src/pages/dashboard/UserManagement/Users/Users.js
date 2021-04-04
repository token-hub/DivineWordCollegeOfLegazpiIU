import React, {useContext, useEffect} from 'react'
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../../components/templates/dashboard';
import {DataTable} from '../../../../components/organisms/dashboard';
import {DashboardContext} from '../../../../contexts';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

import {
    createTableHeadCells, 
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

    const {active, inactive} = useStyles();
    const {states: {users}, 
        deleteUser, 
        getUsers,
        handleUserAccountActivateDeactivation, 
    } = useContext(DashboardContext);
 
    const {all} = users;
    const isAllUserEmpty = Object.keys(all).length < 1;

    useEffect(() => {
        if (isAllUserEmpty) {
            getUsers();
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

    const renderShowAllPage = () => {
        return <DataTable 
            rows={rows} 
            headCells={headCells} 
            link='/dashboard/users' 
            toolbar={['show', 'edit', 'delete']}
            handleDelete={deleteUser}
        />
    }

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header='Users' link='/' >
           { rows.length > 0 
                ? renderShowAllPage()
                : <p style={{ textAlign: 'center' }}><i>--  No user accounts found other than the admins and your accoount --</i></p>
            }
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default ManageUsers

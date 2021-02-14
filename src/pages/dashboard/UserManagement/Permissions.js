import React, {useEffect, useContext} from 'react'
import {DataTable} from '../../../components/organisms/dashboard';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {DashboardContext} from '../../../contexts';

const Permissions = () => {
    const {getPermissions, states:{permissions}} = useContext(DashboardContext);

    useEffect(() => {
        getPermissions();
    }, [])

    const rows = permissions.length > 0 && permissions.map( ({id, description, created_at}) => {  
        return {
            id,
            date: created_at,
            description,
        }
    })

    const headCells = [
        { id: 'id', disablePadding: false, label: '' },
        { id: 'date', disablePadding: false, label: 'Date' },
        { id: 'description', disablePadding: false, label: 'Description' },
    ];

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header='Permissions'>
            { rows.length > 0 && <DataTable rows={rows} headCells={headCells} />}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default Permissions

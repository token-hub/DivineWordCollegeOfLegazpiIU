import React, {useEffect, useContext} from 'react'
import {DataTable} from '../../../components/organisms/dashboard';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {DashboardContext} from '../../../contexts';
import {createTableHeadCells} from '../../../helpers';

const Permissions = () => {
    const {states:{permissions}} = useContext(DashboardContext);
    const isPermissionEmpty = Object.keys(permissions).length < 1;
    
    const rows = !isPermissionEmpty && permissions.map( ({id, description, created_at}) => {  
        return {
            id,
            date: created_at,
            description,
        }
    })

    const headCells = createTableHeadCells(rows);

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header='Permissions'>
            {rows.length > 0 && <DataTable rows={rows} headCells={headCells} />}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default Permissions

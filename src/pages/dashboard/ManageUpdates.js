import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../components/templates/dashboard';
import {DataTable, BasicTable} from '../../components/organisms/dashboard';
import {DashboardContext} from '../../contexts';
import {setObjects, createTableHeadCells} from '../../helpers';

const ManageUpdates = () => {

    // const rows = logs.all.length > 0 && logs.all.map( ({id, description, created_at, properties}) => {  
    //     return {
    //         id,
    //         date: created_at,
    //         description,
    //         user: properties.causer
    //     }
    // })

    const rows = [
        {
            id: 1,
            date: '123123',
            title: 'Sample title',
            category: 'category here'
        }
    ]

    const headCells = createTableHeadCells(rows)

    const renderUpdateTable = () => {
        return <DataTable rows={rows} headCells={headCells} link='/dashboard/update'  toolbar={['show', 'edit', 'delete']} handleDelete={()=>{}}/>
    }

    const setHeader = false ? 'View update' : 'Updates';

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header={setHeader} linkTitle='Add update'>
            {renderUpdateTable()}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default ManageUpdates

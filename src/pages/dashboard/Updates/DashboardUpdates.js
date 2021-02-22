import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {DataTable, BasicTable} from '../../../components/organisms/dashboard';
import {DashboardContext} from '../../../contexts';
import {setObjects, createTableHeadCells} from '../../../helpers';

const Updates = () => {

    // const {getLogs, states: {logs}, handleShowSelectedLog} = useContext(DashboardContext);

    // const {log} = useParams();

    // useEffect( () => {
    //     getLogs();

    //     if (log) {
    //         handleShowSelectedLog(log);
    //     }
    // }, []);

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
            title: 'Title here',
            category: 'sample category'
        }
    ]

    const headCells = createTableHeadCells(rows)

    const renderUpdatesTable = () => {
        return <DataTable rows={rows} headCells={headCells} link='/dashboard/logs' toolbar={['show', 'edit', 'delete']} handleDelete={()=>{}}/>
    }

    const setHeader = false ? 'View update' : 'Updates';

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header={setHeader}>
            {renderUpdatesTable()}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default Updates

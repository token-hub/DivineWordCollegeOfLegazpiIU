import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../components/templates/dashboard';
import {DataTable, BasicTable} from '../../components/organisms/dashboard';
import {DashboardContext} from '../../contexts';

const ManageLogs = () => {

    const {getLogs, states: {logs}, handleShowSelectedLog} = useContext(DashboardContext);

    const {log} = useParams();

    useEffect( () => {
        getLogs();

        if (log) {
            handleShowSelectedLog(log);
        }
    }, []);

    const rows = logs.all.length > 0 && logs.all.map( ({id, description, created_at, properties}) => {  
        return {
            id,
            description,
            date: created_at,
            user: properties.causer
        }
    })
        
    const headCells = [
        { id: 'date', numeric: false, disablePadding: true, label: 'Date' },
        { id: 'description', numeric: true, disablePadding: false, label: 'Description' },
        { id: 'user', numeric: true, disablePadding: false, label: 'User' },
    ];

    const renderLogsTable = () => {
        return logs.all.length > 0 && <DataTable rows={rows} headCells={headCells} />
    }

    const renderSelectedLog = () => {
        return  Object.keys(logs.selected).length > 0 && <BasicTable />
    }

    const setHeader = log ? 'View Log' : 'Logs';

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header={setHeader}>
            {log ? renderSelectedLog() : renderLogsTable()}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default ManageLogs

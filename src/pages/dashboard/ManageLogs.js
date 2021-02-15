import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../components/templates/dashboard';
import {DataTable, BasicTable} from '../../components/organisms/dashboard';
import {DashboardContext} from '../../contexts';
import {setObjects} from '../../helpers';

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
        return logs.all.length > 0 && <DataTable rows={rows} headCells={headCells} link='/dashboard/logs' toolbar={['show']}/>
    }

    const renderSelectedLog = () => {
        if (Object.keys(logs.selected).length > 0) {
            const {description, created_at, properties} = logs.selected;

            const data = setObjects(
                ['date', 'description', 'cause_by', 'properties'],
                [[created_at, description, properties['causer'], properties]]);

            return <BasicTable data={data} />
        }
    }

    const setHeader = log ? 'View Log' : 'Logs';

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header={setHeader}>
            {log ? renderSelectedLog() : renderLogsTable()}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default ManageLogs

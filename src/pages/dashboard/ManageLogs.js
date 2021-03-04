import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../components/templates/dashboard';
import {DataTable, BasicTable} from '../../components/organisms/dashboard';
import {DashboardContext} from '../../contexts';
import {setObjects, createTableHeadCells} from '../../helpers';

const ManageLogs = () => {

    const {states: {logs}, handleShowSelectedLog, getLogs} = useContext(DashboardContext);
    const {all, selected} = logs;
    const isAllLogsEmpty = Object.keys(all).length < 1;
    const isSelectedLogEmpty = Object.keys(selected).length < 1;
    const {log} = useParams();


    useEffect(() => {
        if (log) {
            handleShowSelectedLog(log);
        }
    }, []); 

    useEffect(()=>{
        if (isAllLogsEmpty) {
            getLogs();
        }
    }, [all])

    const rows = !isAllLogsEmpty && all.map( ({id, description, created_at, properties}) => {  
        return {
            id,
            date: created_at,
            description,
            user: properties.causer
        }
    })

    const headCells = createTableHeadCells(rows)

    const renderLogsTable = () => {
        return !isAllLogsEmpty && <DataTable rows={rows} headCells={headCells} link='/dashboard/logs' toolbar={['show']}/>
    }

    const renderSelectedLog = () => {
        if (!isSelectedLogEmpty) {
            const {description, created_at, properties} = selected;

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

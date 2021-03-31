import React, {useContext, useEffect} from 'react';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {DataTable} from '../../../components/organisms/dashboard';
import {DashboardContext} from '../../../contexts';
import {createTableHeadCells, capitalizeAllFirstLetterAndTransform} from '../../../helpers';

const Updates = () => {

    const {states: {updates}, deleteUpdate, getUpdates} = useContext(DashboardContext);
    const {all} = updates;
    const isAllUpdateNotEmpty = Object.keys(all).length > 0;

    useEffect(() => {
        if (!isAllUpdateNotEmpty) {
            getUpdates();
        }
    }, []);

    const rows = isAllUpdateNotEmpty && all.map(({id, created_at, title, category}) => {
        return {
            id, 
            date: created_at, 
            title, 
            category: capitalizeAllFirstLetterAndTransform(category, '-', ' '), 
        }
    });

    const headCells = createTableHeadCells(rows)

    const renderUpdatesTable = () => {
        return  rows.length > 0 
        ?   <DataTable 
                rows={rows} 
                headCells={headCells} 
                link='/dashboard/update' 
                toolbar={['show', 'edit', 'delete']} 
                handleDelete={deleteUpdate} 
            />
        : <p style={{ textAlign: 'center' }}><i>-- No Updates yet --</i></p>
    }

    const setHeader = false ? 'View update' : 'Updates';

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header={setHeader} link='/dashboard/update' linkTitle='Add update'>
            {renderUpdatesTable()}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default Updates

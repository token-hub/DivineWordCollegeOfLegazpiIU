import React, {useContext} from 'react';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../components/templates/dashboard';
import {DataTable} from '../../../components/organisms/dashboard';
import {DashboardContext} from '../../../contexts';
import {createTableHeadCells, capitalizeAllFirstLetterAndTransform} from '../../../helpers';

const Updates = () => {

    const {states: {updates}, deleteUpdate} = useContext(DashboardContext);
    const isAllUpdateNotEmpty = Object.keys(updates.all).length > 0;

    const rows = isAllUpdateNotEmpty && updates.all.map(({id, created_at, title, category}) => {
        return {
            id, 
            date: created_at, 
            title, 
            category: capitalizeAllFirstLetterAndTransform(category, '-', ' '), 
        }
    });

    const headCells = createTableHeadCells(rows)

    const renderUpdatesTable = () => {
        return  rows.length > 0 && 
        <DataTable 
            rows={rows} 
            headCells={headCells} 
            link='/dashboard/update' 
            toolbar={['show', 'edit', 'delete']} 
            handleDelete={deleteUpdate}
        />
    }

    const setHeader = false ? 'View update' : 'Updates';

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header={setHeader} link='/dashboard/update' linkTitle='Add update'>
            {renderUpdatesTable()}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default Updates

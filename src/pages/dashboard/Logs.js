import React, {useEffect, useContext} from 'react'
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../components/templates/dashboard';
import {DataTable} from '../../components/organisms/dashboard';
import {DashboardContext} from '../../contexts';

const Logs = () => {

    const {getLogs, states} = useContext(DashboardContext);

    useEffect( () => {
        getLogs();
    }, []);

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = states.logs && states.logs.map( ({description, created_at, properties}) => {  
        return {
            description,
            date: created_at,
            user: properties.user
        }
    })

    // const rows = [
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Donut', 452, 25.0, 51, 4.9),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //     createData('Honeycomb', 408, 3.2, 87, 6.5),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Jelly Bean', 375, 0.0, 94, 0.0),
    //     createData('KitKat', 518, 26.0, 65, 7.0),
    //     createData('Lollipop', 392, 0.2, 98, 0.0),
    //     createData('Marshmallow', 318, 0, 81, 2.0),
    //     createData('Nougat', 360, 19.0, 9, 37.0),
    //     createData('Oreo', 437, 18.0, 63, 4.0),
    // ];
        
    const headCells = [
        { id: 'date', numeric: false, disablePadding: true, label: 'Date' },
        { id: 'description', numeric: true, disablePadding: false, label: 'Description' },
        { id: 'user', numeric: true, disablePadding: false, label: 'User' },
    ];

    return (
        <BaseWithHeaderAndSidebarWithMainHeader header='Logs'>
            {states.logs && <DataTable rows={rows} headCells={headCells} />}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default Logs

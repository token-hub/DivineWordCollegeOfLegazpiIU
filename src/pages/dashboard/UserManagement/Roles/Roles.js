import React, {useEffect, useContext} from 'react'
import {DataTable} from '../../../../components/organisms/dashboard';
import {BaseWithHeaderAndSidebarWithMainHeader} from '../../../../components/templates/dashboard';
import {DashboardContext} from '../../../../contexts';

const Roles = () => {
  const {deleteRole, states:{roles}, getRoles} = useContext(DashboardContext);
  const isRolesEmpty = Object.keys(roles.all).length < 1;

  useEffect(()=>{
    if (isRolesEmpty) {
      getRoles();
    }
  }, [roles]);

  const rows = roles.all.length > 0 && roles.all.map( ({id, description, created_at}) => {  
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
        <BaseWithHeaderAndSidebarWithMainHeader header='Roles' link='/dashboard/role' linkTitle='Add Role' >
          { rows.length > 0 && 
          <DataTable 
            rows={rows} 
            headCells={headCells} 
            link='/dashboard/role' 
            toolbar={['edit', 'show', 'delete']} 
            handleDelete={deleteRole}
          />}
        </BaseWithHeaderAndSidebarWithMainHeader>
    )
}

export default Roles

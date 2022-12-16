import React from 'react'

import { DatagridProps, Datagrid as RaDatagrid } from 'react-admin'

function Datagrid(props: DatagridProps) {
  const { children, bulkActionButtons, ...rest } = props

  return (
    <RaDatagrid bulkActionButtons={bulkActionButtons || false} {...rest}>
      {children}
    </RaDatagrid>
  )
}

export default Datagrid

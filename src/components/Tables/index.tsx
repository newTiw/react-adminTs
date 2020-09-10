import React, { SFC } from 'react'
import { Table } from 'antd'

type isProps = { 
  columns: any;
  dataSource?: Array<object> | undefined
 }
const Tables:SFC<isProps> = (props) => {
  const { columns, dataSource } = props
  return (
    <div className="block">
      <Table 
        columns={columns}
        dataSource={dataSource}
        size="small"
      ></Table>
    </div>
  )
}
export default Tables
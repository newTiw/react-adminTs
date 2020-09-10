import React, { SFC } from 'react'
import Tables from '@/components/Tables'

type isProps = { }
interface Props {
  props?: isProps
}
const TableList:SFC<Props> = (props) => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age'
    },
    {
      title: '兴趣爱好',
      dataIndex: 'hobbies'
    },
    {
      title: '邮箱',
      dataIndex: 'email'
    },
    {
      title: '地址',
      dataIndex: 'add'
    }
  ]
  const dataSource = [
    {
      key: '1',
      name: '张三',
      age: '10',
      email: '954159730@qq.com',
      hobbies: '爬山、游泳',
      add: '湖南省长沙市'
    },
    {
      key: '2',
      name: '李四',
      age: '100',
      email: '954159730@qq.com',
      hobbies: '爬山、游泳',
      add: '湖南省长沙市'
    },
    {
      key: '3',
      name: '王麻子',
      age: '30',
      email: '954159730@qq.com',
      hobbies: '爬山、游泳',
      add: '湖南省长沙市'
    }
  ]
  return (
    <div>
      <Tables columns={columns} dataSource={dataSource} />
    </div>
  )
}
export default TableList
import React from 'react'
import {  Input } from 'antd'
import styles from './index.less'
interface Optino {
  name:string;
  Form:any;
  placeholder?:string;
  icon?:any;
  rules?:Array<any>;
  type?:string;
}
const InputItem: React.FC<Optino> = (props:any) => {
  const { Form, icon, rules, placeholder, type = 'text', name, children } = props
  return (
    <Form.Item
    name={name}
      rules={rules}
    >
      <div className={styles.input_block}>
        <Input className={styles.input_item} type={type} prefix={icon} placeholder={placeholder} />
        {children}
      </div>
      
    </Form.Item>
  )
}
export default InputItem
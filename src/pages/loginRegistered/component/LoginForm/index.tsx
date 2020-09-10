import React, { useState, useEffect} from 'react'
import { Form, Tabs, Input, Button } from 'antd'
import { UserOutlined, LockOutlined, CodeOutlined } from '@ant-design/icons';
import { connect, Dispatch } from 'umi';
import InputItem from './inputItem'
import Code from '../code'
import styles from './index.less'
import { queryCode } from '@/services/user';
import { decrypt } from '@/utils/aes'
const { TabPane } = Tabs
interface LoginProps {
  dispatch: Dispatch;
  onSubmit:any;
}
const LoginForm: React.FC<LoginProps> = (props:any) => {
  const [ options, setOptions ] = useState({
    stauts: true,
    text: "登录"
  })
  // 登录触发
  const onFinish = (value:any) => {
    setOptions({
      stauts: false,
      text: '正在登录'
    })
    setTimeout(() => {
      props.onSubmit && props.onSubmit(value)
    }, 3000)
  }
  const [ codeValue, setCodeValue ] = useState<string | null>(null)
  useEffect(() => {
    initCode()
  }, [])
  const initCode = async () => {
    const data =  await queryCode()
    setCodeValue(decrypt(data.data))
  }
  return (
    <Form
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      size="large"
    >
      <Tabs defaultActiveKey="username">
        <TabPane tab="账户密码登录" key="username">
          <InputItem
            Form={Form} 
            placeholder="请输入用户名"
            icon={<UserOutlined  className="site-form-item-icon" />}
            rules={[{ required: true, message: '用户名不能为空' }]}
            name="userName"
          />
          <InputItem
            Form={Form} 
            placeholder="请输入密码"
            icon={<LockOutlined  className="site-form-item-icon" />}
            rules={[{ required: true, message: '密码不能为空' }]}
            name="passWord"
            type='password'
          />
          <InputItem
            Form={Form} 
            placeholder="请输入验证码"
            icon={<CodeOutlined  className="site-form-item-icon" />}
            rules={[{ required: true, message: '验证码不能为空' }]}
            name="code"
          >
            <section className={styles.code}>
                <Code
                  onClick={initCode}
                  code={codeValue} />
            </section>
            </InputItem>
        </TabPane>
      </Tabs>
      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          loading={!options.stauts}
          className={`login-form-button ${styles.submit_btn}`}
        >{options.text}</Button>
      </Form.Item>
    </Form>
  )
}

export default connect(({ login, loading }: any) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(LoginForm);
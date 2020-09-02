import React from 'react'
import { connect, Dispatch } from 'umi';
import styles from './index.less'
import LoginForm from '../component/LoginForm'
import { encrypt } from '@/utils/aes'
interface LoginProps {
  dispatch: Dispatch;
}
const Login: React.FC<LoginProps> = (props:any) => {
  const onFinish = (value:any) => {
    value.userName = encrypt(value.userName)
    value.passWord = encrypt(value.passWord)
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: { ...value  },
    });
  }
  return (
    <section className={styles.login_form}>
      <LoginForm onSubmit={onFinish} />
    </section>
  )
};

export default connect(({  }: any) => ({
}))(Login);
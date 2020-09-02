/*
 * @Author: tiw
 * @Date: 2020-07-25 23:49:41
 * @LastEditTime: 2020-07-27 14:29:16
 * @LastEditors: Please set LastEditors
 * @Description: 用户是否登录
 */ 
import React from 'react';
import { Redirect, connect, ConnectProps } from 'umi';
import { stringify } from 'querystring';
import { ConnectState } from '@/models/connect';
import { CurrentUser } from '@/models/user';

import { Token } from '@/storage'

interface SecurityLayoutProps extends ConnectProps {
  loading?: boolean;
  currentUser?: CurrentUser;
}

interface SecurityLayoutState {
  isReady: boolean;
}

class SecurityLayout extends React.Component<SecurityLayoutProps, SecurityLayoutState> {
  state: SecurityLayoutState = {
    isReady: false,
  };

  componentDidMount() {
    this.setState({
      isReady: true,
    });
    const { dispatch } = this.props;
    if (dispatch) {
      // 获取用户信息
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }

  render() {
    const { isReady } = this.state;
    const { children } = this.props;

    // 判断用户是否登录
    const isLogin = Token.fetch()
    const queryString = stringify({
      redirect: window.location.href,
    });
    
    if (!isLogin) {
      return <Redirect to={`/user/login?`} />;
    }
    return children;
  }
}

export default connect(({ user, loading }: ConnectState) => ({
  currentUser: user.currentUser,
  loading: loading.models.user,
}))(SecurityLayout);

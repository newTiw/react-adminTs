/*
 * @Author: tiw
 * @Date: 2020-07-25 23:49:41
 * @LastEditTime: 2020-07-26 01:11:55
 * @LastEditors: Please set LastEditors
 * @Description: 用户信息
 */ 
// Tooltip
import { Tag } from 'antd';
import { Settings as ProSettings } from '@ant-design/pro-layout';
import React from 'react';
// SelectLang
import { connect, ConnectProps } from 'umi';
import { ConnectState } from '@/models/connect';
import Avatar from './AvatarDropdown';
import styles from './index.less';

export interface GlobalHeaderRightProps extends Partial<ConnectProps>, Partial<ProSettings> {
  theme?: ProSettings['navTheme'] | 'realDark';
}

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      {/* 站内搜索
        <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          }
        ]}
        onSearch={value => {
          console.log('input', value);
        }}
      /> */}
      {/* <Tooltip title="增加选项"></Tooltip> */}
      <Avatar />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
      
      {/* <SelectLang className={styles.action} /> 国际语言切换 */}
    </div>
  );
};

export default connect(({ settings }: ConnectState) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);

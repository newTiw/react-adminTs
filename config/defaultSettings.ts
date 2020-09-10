/*
 * @Author: tiw
 * @Date: 2020-07-25 23:49:41
 * @LastEditTime: 2020-09-03 10:16:58
 * @LastEditors: Please set LastEditors
 * @Description: 布局配置
 */ 
import { Settings as ProSettings } from '@ant-design/pro-layout';
import theme from './theme'
const { title } = theme
// const title  = 'q23'
type DefaultSettings = ProSettings & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  // realDark | dark
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title,
  pwa: false,
  iconfontUrl: '',
};

export type { DefaultSettings };

export default proSettings;
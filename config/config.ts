/*
 * @Author: tiw
 * @Date: 2020-09-02 17:28:26
 * @LastEditTime: 2020-09-03 11:16:43
 * @LastEditors: Please set LastEditors
 * @Description: 配置文件
 */
import { defineConfig } from 'umi'
import defaultSettings from './defaultSettings'
import proxy from './proxy'
import routes from './router'

const { REACT_APP_ENV } = process.env

export default defineConfig({
  hash: true,
  antd: {},
  dva: { hmr: true },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: { ie: 11 },
  // 路由配置
  routes,
  // 主题配置
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  // 代理
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    // 打包后资源访问路径
    basePath: '/'
  },
})

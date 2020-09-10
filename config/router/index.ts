/*
 * @Author: tiw
 * @Date: 2020-09-03 10:48:12
 * @LastEditTime: 2020-09-07 15:18:10
 * @LastEditors: Please set LastEditors
 * @Description: 路由入口
 */
import user from './user'
export default [
  user,
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        // authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/table',
          },
          {
            path: '/table',
            name: '表格',
            icon: 'table',
            component: './TableList',
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      }
    ]
  },
  {
    component: './404',
  }
]
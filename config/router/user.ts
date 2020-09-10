/*
 * @Author: tiw
 * @Date: 2020-09-03 10:58:11
 * @LastEditTime: 2020-09-03 10:58:58
 * @LastEditors: Please set LastEditors
 * @Description: 用户
 */
export default {
  path: '/user',
  component: '../layouts/UserLayout',
  routes: [
    {
      name: 'login',
      path: '/user/login',
      component: './loginRegistered/login',
    },
  ],
}
/*
 * @Author: tiw
 * @Date: 2020-07-25 23:49:41
 * @LastEditTime: 2020-07-27 13:55:50
 * @LastEditors: Please set LastEditors
 * @Description: 
 */ 
import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/users');
}

// 获取用户信息
export async function queryCurrent(): Promise<any> {
  return request('currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
// 获取验证码
export async function queryCode():Promise<any> {
  return request('verify/code')
}
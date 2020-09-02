/*
 * @Author: tiw
 * @Date: 2020-07-25 23:49:41
 * @LastEditTime: 2020-07-27 11:16:19
 * @LastEditors: Please set LastEditors
 * @Description: 
 */ 
import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  passWord: string;
  code: string;
}
// 登录
export async function fakeAccountLogin(params: LoginParamsType) {
  return request('system/user/login', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

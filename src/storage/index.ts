/*
 * @Author: tiw
 * @Date: 2020-07-27 14:11:19
 * @LastEditTime: 2020-07-27 14:45:46
 * @LastEditors: Please set LastEditors
 * @Description: 存储机制
 * { expires: 60 * 60 * 0.5} tokdn 存放时长
 */ 
import Storages from '@/utils/storages'
const storeages = new Storages('cookie')
const Token = {
  key: 'RIGHTS_EXCHANGE_ADMIN_TOKEN',
  save<T>(value:T) {
    storeages.save(this.key, value)
  },
  fetch<T>(key?:string):string | null {
    const value:string | null = storeages.fetch(this.key)
    return value
  },
  remove():void {
    storeages.remove(this.key)
  }
}
export { Token }
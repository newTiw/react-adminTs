/*
 * @Author: tiw
 * @Date: 2020-07-27 14:08:15
 * @LastEditTime: 2020-07-27 14:08:16
 * @LastEditors: Please set LastEditors
 * @Description: 
 */ 
import Cookies from 'cookies-ts'
const cookies = new Cookies()
interface ClassLimt {
  save<T>(key:string,value:T):void;
  fetch(key:string): string | null | boolean;
  remove(key:string):void;
}
interface objectLimt {
  setItem?():void;
  getItem?():void;
  remove?():void;
}
export default class Storages implements ClassLimt {
  storageType?: string | undefined

  constructor(type?:string | undefined) {
    this.storageType = type
  }

  save<T>(key:string, value:T, option?:object):void {
    const fn:objectLimt = this.calcWay(key, value, option)
    fn.setItem && fn.setItem()
  }

  fetch(key:string):any {
    const fn:objectLimt = this.calcWay(key)
    const results:any = fn.getItem && fn.getItem()
    return JSON.parse(results)
  }

  remove(key:string) {
    const fn:objectLimt = this.calcWay(key)
    fn.remove && fn.remove()
  }

  calcWay<T>(key:string, value?:T, option?:object):object {
    const calcValue:string = JSON.stringify(value)
    const display:any = {
      session: {
        setItem() { 
          sessionStorage.setItem(key, calcValue) 
        },
        getItem(): string | null { 
          const value:string | null = sessionStorage.getItem(key)
          return value
        },
        remove() { 
          sessionStorage.removeItem(key) 
        },
        clear():void {
          sessionStorage.clear()
        }
      },
      local: {
        setItem():void { 
          localStorage.setItem(key, calcValue)
        },
        getItem():string | null { 
          const value:string | null = localStorage.getItem(key) 
          return value
        },
        remove():void { 
          localStorage.removeItem(key)
        },
        clear():void {
          localStorage.clear()
        }
      },
      cookie: {
        setItem(): void {
          cookies.set(key, calcValue, option)
        },
        getItem():string | null { 
          return cookies.get(key)
        },
        remove():void {
          cookies.remove(key)
        }
      }
    }
    return display[this.storageType || 'session']
  }
}